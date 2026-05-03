// Persistent, retry-on-its-own contact queue.
// We always tell the user "thanks" — failures stay invisible to them.

const STORAGE_KEY = 'portfolio.contactQueue.v1';
const FLUSH_INTERVAL_MS = 30_000;
const REQUEST_TIMEOUT_MS = 8_000;

const safeRead = () => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

const safeWrite = (items) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* quota errors etc. — ignore on purpose */
  }
};

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const enqueue = (submission) => {
  const item = {
    id: newId(),
    payload: submission,
    queuedAt: new Date().toISOString(),
    attempts: 0
  };
  const items = safeRead();
  items.push(item);
  safeWrite(items);
  return item;
};

export const queueSize = () => safeRead().length;

const sendOne = async (apiUrl, item) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item.payload),
      signal: ctrl.signal
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
};

export const flushQueue = async (apiUrl) => {
  let items = safeRead();
  if (items.length === 0) return { sent: 0, remaining: 0 };

  let sent = 0;
  const remaining = [];

  for (const item of items) {
    // attempt counter — kept around for future telemetry, never shown to user
    const next = { ...item, attempts: (item.attempts || 0) + 1 };
    const ok = await sendOne(apiUrl, next);
    if (ok) {
      sent += 1;
    } else {
      remaining.push(next);
    }
  }

  safeWrite(remaining);
  return { sent, remaining: remaining.length };
};

export const startBackgroundProcessor = (apiUrl) => {
  if (typeof window === 'undefined') return () => {};

  let cancelled = false;
  let timer = null;

  const tick = async () => {
    if (cancelled) return;
    if (queueSize() > 0) {
      await flushQueue(apiUrl);
    }
    if (!cancelled) {
      timer = window.setTimeout(tick, FLUSH_INTERVAL_MS);
    }
  };

  // first attempt slightly delayed so the page settles
  timer = window.setTimeout(tick, 2_000);

  // also flush when the user comes back to the tab
  const onVisibility = () => {
    if (document.visibilityState === 'visible' && queueSize() > 0) {
      flushQueue(apiUrl);
    }
  };
  document.addEventListener('visibilitychange', onVisibility);

  // best-effort flush before unload
  const onBeforeUnload = () => {
    if (queueSize() === 0) return;
    const items = safeRead();
    items.forEach((it) => {
      try {
        navigator.sendBeacon(
          `${apiUrl}/contact`,
          new Blob([JSON.stringify(it.payload)], { type: 'application/json' })
        );
      } catch {
        /* sendBeacon may not be available in some embeds */
      }
    });
  };
  window.addEventListener('beforeunload', onBeforeUnload);

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('beforeunload', onBeforeUnload);
  };
};
