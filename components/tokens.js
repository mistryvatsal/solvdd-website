export const SV = {
  bg:         '#f6f4ef',
  bgAlt:      '#efece5',
  bgInk:      '#16140f',
  ink:        '#16140f',
  ink2:       '#2a2722',
  muted:      '#8a847b',
  faint:      '#b8b2a7',
  rule:       '#e6e1d6',
  ruleStrong: '#d6cfc1',
  ember:      '#c2502a',
  emberSoft:  'rgba(194,80,42,0.10)',
  sans:  '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  mono:  '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
  serif: '"Newsreader", ui-serif, Georgia, "Times New Roman", serif',
};

export const SOLVDD_EMAIL = 'contact@solvdd.com';
export const MAILTO = `mailto:${SOLVDD_EMAIL}?subject=Project%20enquiry`;

export const CAPABILITIES = [
  {
    id: '01', name: 'Backend engineering',
    blurb: 'Production-grade services and APIs. Idempotent, observable, deploy-anywhere — built to outlast the deadline that produced them.',
    tags: ['API design', 'Job systems', 'Observability'],
  },
  {
    id: '02', name: 'Distributed systems',
    blurb: 'Queueing, consensus, replication, partitioning. Designed for partial failure from the first line of code.',
    tags: ['Stream processing', 'Workflow orchestration', 'Consensus'],
  },
  {
    id: '03', name: 'Data pipelines & ETL',
    blurb: 'Streaming and batch ingestion, transformation and modeling at scale. Strict schemas, replayable from any point.',
    tags: ['Streaming', 'Batch', 'Schema evolution'],
  },
  {
    id: '04', name: 'Scalable APIs & infra',
    blurb: 'REST, gRPC and edge runtimes. Capacity-modeled, autoscaled, observed end-to-end — with budgets and alarms in place from day one.',
    tags: ['Capacity modeling', 'Edge runtimes', 'Autoscaling'],
  },
  {
    id: '05', name: 'AI / LLM workflows',
    blurb: 'Retrieval, evaluation, agents, structured extraction. Pragmatic, measured, production-shaped — wrapped in evals, retries and a budget.',
    tags: ['Retrieval', 'Evaluation', 'Agentic systems'],
  },
  {
    id: '06', name: 'Automation systems',
    blurb: 'Headless pipelines, orchestration, large-scale scraping. Rate-limited, retried, deduped, observable. Boring on purpose.',
    tags: ['Headless pipelines', 'Orchestration', 'Reliability'],
  },
  {
    id: '07', name: 'Product engineering',
    blurb: 'Web and mobile interfaces wired tightly to the backend. Fast, accessible, instrumented. Built like infrastructure, not like a brochure.',
    tags: ['Web', 'Mobile', 'Performance'],
  },
  {
    id: '08', name: 'Technical advisory',
    blurb: 'Architecture review, hiring loops, scaling plans. Senior judgment from production work — not slide decks.',
    tags: ['Architecture review', 'Hiring', 'Strategy'],
  },
];

export const FAMILIAR_WITH = [
  'Go', 'Python', 'TypeScript', 'Rust',
  'Postgres', 'ClickHouse', 'Redis', 'Kafka',
  'Temporal', 'Kubernetes', 'Terraform',
  'OpenAI', 'Anthropic', 'pgvector',
];
