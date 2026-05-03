// Tiny helpers for time strings that should age automatically.
// Read these once per render — cheap, no memoization needed.

export const currentYear = () => new Date().getFullYear();

export const currentQuarter = () => {
  const month = new Date().getMonth(); // 0–11
  return `Q${Math.floor(month / 3) + 1}`;
};

export const currentQuarterYear = () =>
  `${currentQuarter()} ${currentYear()}`;

export const currentMonthYear = () =>
  new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

// "1.5+ years" format, rounded down to the nearest half year.
// Pass a YYYY-MM-DD string for the start date.
export const yearsSince = (startISO) => {
  const start = new Date(startISO);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  const halfYears = Math.floor(months / 6) / 2; // 0, 0.5, 1, 1.5, ...
  if (halfYears < 0.5) return '<1 yr';
  return `${halfYears}+ yrs`;
};

// Linkpublishers tenure — Jan 2024 → today.
export const experienceLabel = () => yearsSince('2024-01-01');
