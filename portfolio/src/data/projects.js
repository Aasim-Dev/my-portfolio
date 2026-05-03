export const featuredProject = {
  id: 'linkpublishers',
  year: 'Jan 2024 — present',
  role: 'Associate Software Developer · Linkpublishers, Ahmedabad',
  title: 'A matching algorithm that paid for itself in a quarter.',
  oneLiner:
    'Rebuilt the publisher–order matching engine for a guest-posting marketplace. Replaced opaque scoring with an interleaving ranker over 15+ signals.',
  problem: {
    label: 'The problem',
    body:
      'Conversions stalled because the recommender was guessing. High-DA publishers sat unused while buyers churned. Revenue had a ceiling shaped by an algorithm, not by demand.'
  },
  approach: {
    label: 'The approach',
    body:
      'Profiled the hot path. Built an interleaved scorer over 15+ signals — domain authority, niche fit, historical performance. Shipped behind a flag, A/B tested for three weeks, kept what won.'
  },
  result: {
    label: 'The result',
    body:
      'Revenue +20% in one quarter. High-DA inventory drained 4× faster. CSAT followed.',
    metric: '+20%',
    metricLabel: 'platform revenue'
  },
  metrics: [
    { value: '+20%', label: 'platform revenue' },
    { value: '4×', label: 'inventory drain rate' },
    { value: '+35%', label: 'customer satisfaction' }
  ],
  pullQuote: 'It paid for the engineering cost in 14 weeks.',
  pullQuoteAttribution: '— internal performance review',
  stack: ['Laravel', 'PHP', 'MySQL', 'Elasticsearch', 'Feature flags']
};

export const projects = [
  {
    id: 'fotobazaar',
    title: 'Fotobazaar — photographer marketplace',
    summary:
      'A monorepo marketplace for photographers and clients. Bookings, payments, real-time messaging — Next.js front, Node back, Mongo data, Docker pipeline. 500+ users, three deploy targets, one codebase.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Docker', 'CI/CD'],
    metric: '500+',
    metricLabel: 'active users',
    liveUrl: 'https://fotobazaar.vercel.app/',
    githubUrl: 'https://github.com/Aasim-Dev/'
  },
  {
    id: 'cicd',
    title: 'CI/CD & containerization rollout',
    summary:
      'Containerized the legacy services. Wired GitHub Actions for every PR. Two-hour deploys became fifteen minutes. Release-day Slack panic became silence.',
    stack: ['Docker', 'GitHub Actions', 'Bash', 'Linux'],
    metric: '−85%',
    metricLabel: 'deploy errors',
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 'search',
    title: 'Elasticsearch search engine',
    summary:
      'Killed the LIKE queries. Designed analyzers, tuned indexes, rewrote ranking. p95 went sub-100ms across a thousand-query-a-day surface.',
    stack: ['Elasticsearch', 'MySQL', 'Search ranking'],
    metric: '3×',
    metricLabel: 'search performance',
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 'apis',
    title: 'High-throughput REST APIs',
    summary:
      'Built the read/write surface for the platform — 10k requests a day at 99.5% uptime. Indexing and query refactors cut p95 latency by 45%.',
    stack: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    metric: '99.5%',
    metricLabel: 'uptime · 10k+ req/day',
    liveUrl: null,
    githubUrl: null
  }
];
