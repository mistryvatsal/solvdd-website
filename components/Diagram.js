import { useEffect, useState } from 'react';
import { SV } from './tokens';

function Tag({ children, color = SV.muted, size = 11 }) {
  return (
    <span style={{
      fontFamily: SV.mono, fontSize: size, letterSpacing: 1.2,
      color, textTransform: 'uppercase',
    }}>
      {children}
    </span>
  );
}

const TIERS = [
  { y: 40,  label: 'Sources',    nodes: [{ x: 100, n: 'mobile' }, { x: 280, n: 'web' }, { x: 460, n: 'partners' }, { x: 640, n: 'iot' }, { x: 820, n: 'feeds' }, { x: 1000, n: 'crawl' }, { x: 1180, n: 'apis' }] },
  { y: 170, label: 'Ingestion',  nodes: [{ x: 240, n: 'edge-gw' }, { x: 540, n: 'queue' }, { x: 840, n: 'streamer' }, { x: 1140, n: 'collector' }] },
  { y: 300, label: 'Processing', nodes: [{ x: 200, n: 'workers' }, { x: 460, n: 'enrich' }, { x: 720, n: 'agent' }, { x: 980, n: 'index' }, { x: 1200, n: 'eval' }] },
  { y: 420, label: 'Stores',     nodes: [{ x: 320, n: 'oltp' },   { x: 600, n: 'olap' }, { x: 880, n: 'vector' }, { x: 1140, n: 'blob' }] },
];

const MOBILE_TIERS = [
  { label: 'Sources',    nodes: ['mobile', 'web', 'apis'] },
  { label: 'Ingestion',  nodes: ['edge-gw', 'queue'] },
  { label: 'Processing', nodes: ['workers', 'agent', 'index'] },
  { label: 'Stores',     nodes: ['oltp', 'olap', 'vector'] },
];

const EMBER_NODES = new Set(['queue', 'agent', 'vector']);

function buildEdges() {
  const edges = [];
  for (let i = 0; i < TIERS.length - 1; i++) {
    const a = TIERS[i], b = TIERS[i + 1];
    a.nodes.forEach((p) => b.nodes.forEach((q) => {
      if (Math.abs(p.x - q.x) < 250) {
        edges.push({ x1: p.x, y1: a.y, x2: q.x, y2: b.y, key: `${i}-${p.n}-${q.n}` });
      }
    }));
  }
  return edges;
}

const EDGES = buildEdges();
const PACKET_EDGES = EDGES.filter((_, i) => i % 4 === 0);
const W = 1280, H = 460;

function DesktopSVG({ reduceMotion }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H + 60}`}
      width="100%"
      style={{ display: 'block', maxWidth: 1280, margin: '0 auto', overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="topo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={SV.rule} strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect x={-200} y={0} width={W + 400} height={H + 60} fill="url(#topo-grid)" opacity="0.7" />

      {TIERS.map((t) => (
        <g key={t.label}>
          <line x1={-200} x2={W + 200} y1={t.y} y2={t.y} stroke={SV.ruleStrong} strokeDasharray="2 6" strokeWidth="0.8" />
          <text x={-180} y={t.y - 8} fontFamily={SV.mono} fontSize="10" fill={SV.muted} letterSpacing="1.2">
            {t.label.toUpperCase()}
          </text>
        </g>
      ))}

      {EDGES.map((e) => (
        <line key={e.key} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={SV.ink} strokeOpacity="0.18" strokeWidth="0.8" />
      ))}

      {!reduceMotion && PACKET_EDGES.map((e, i) => (
        <circle key={`p-${e.key}`} r="3" fill={SV.ink}>
          <animate attributeName="cx" from={e.x1} to={e.x2} dur={`${2 + (i % 5) * 0.6}s`} begin={`${(i * 0.2) % 3}s`} repeatCount="indefinite" />
          <animate attributeName="cy" from={e.y1} to={e.y2} dur={`${2 + (i % 5) * 0.6}s`} begin={`${(i * 0.2) % 3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur={`${2 + (i % 5) * 0.6}s`} begin={`${(i * 0.2) % 3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {TIERS.map((t) => t.nodes.map((p) => (
        <g key={`${t.label}-${p.n}`}>
          {EMBER_NODES.has(p.n) && !reduceMotion && (
            <circle cx={p.x} cy={t.y} r="22" fill="none" stroke={SV.ember} strokeWidth="0.8" opacity="0.4">
              <animate attributeName="r"       values="22;46" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          )}
          <rect
            x={p.x - 52} y={t.y - 14} width="104" height="28"
            fill={SV.bg}
            stroke={EMBER_NODES.has(p.n) ? SV.ember : SV.ink}
            strokeWidth="1"
          />
          <text x={p.x} y={t.y + 4} fontFamily={SV.mono} fontSize="11" fill={SV.ink} textAnchor="middle">
            {p.n}
          </text>
        </g>
      )))}
    </svg>
  );
}

function MobileStack() {
  return (
    <div style={{ marginTop: 36, position: 'relative' }}>
      {MOBILE_TIERS.map((t, i) => (
        <div key={t.label} style={{ marginBottom: i < MOBILE_TIERS.length - 1 ? 24 : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Tag size={10}>{t.label.toUpperCase()}</Tag>
            <span style={{ flex: 1, height: 0, borderTop: `1px dashed ${SV.ruleStrong}`, opacity: 0.7 }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {t.nodes.map((n) => (
              <div
                key={n}
                style={{
                  padding: '8px 12px', background: SV.bg,
                  border: `1px solid ${EMBER_NODES.has(n) ? SV.ember : SV.ink}`,
                  fontFamily: SV.mono, fontSize: 11, color: SV.ink, letterSpacing: 0.3,
                }}
              >
                {n}
              </div>
            ))}
          </div>
          {i < MOBILE_TIERS.length - 1 && (
            <div style={{ width: 1, height: 16, background: SV.ruleStrong, margin: '12px 0 0 24px' }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Diagram() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    // Outer: full-bleed bgAlt surface + full-width borders
    <section style={{
      background: SV.bgAlt,
      borderTop: `1px solid ${SV.rule}`,
      borderBottom: `1px solid ${SV.rule}`,
    }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 64, paddingBottom: 96 }}>

        {/* Desktop header (two-column) */}
        <div className="diagram-header" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56, marginBottom: 48 }}>
          <Tag>[ A typical surface ]</Tag>
          <div>
            <h2 style={{ fontSize: 36, lineHeight: 1.08, letterSpacing: -1, fontWeight: 500, margin: 0, maxWidth: 720 }}>
              The shape of what we build
              <span style={{ color: SV.muted }}>:</span>
              {' '}
              <span style={{ fontFamily: SV.serif, fontStyle: 'italic', fontWeight: 400, color: SV.ink2 }}>
                sources, ingestion, processing, stores
              </span>
              <span style={{ color: SV.ember }}>.</span>
            </h2>
            <p style={{ fontSize: 14, color: SV.ink2, marginTop: 18, maxWidth: 620, lineHeight: 1.55 }}>
              Most engagements look something like this — partner feeds and
              user surfaces on top, an OLTP / OLAP / vector / blob tier at the
              base, with the agent and queueing layers that hold them together.
            </p>
            <div style={{ marginTop: 18, fontFamily: SV.mono, fontSize: 11, color: SV.muted, letterSpacing: 1, textTransform: 'uppercase' }}>
              [ Illustrative · pattern, not a specific system ]
            </div>
          </div>
        </div>

        {/* Mobile header (single-column) */}
        <div className="diagram-header-mobile" style={{ display: 'none', marginBottom: 0 }}>
          <Tag size={10}>[ A typical surface ]</Tag>
          <h2 style={{ fontSize: 26, lineHeight: 1.15, letterSpacing: -0.7, fontWeight: 500, margin: '14px 0 0' }}>
            The shape of what we build
            <span style={{ color: SV.muted }}>:</span>
            {' '}
            <span style={{ fontFamily: SV.serif, fontStyle: 'italic', fontWeight: 400, color: SV.ink2 }}>
              sources, ingestion, processing, stores
            </span>
            <span style={{ color: SV.ember }}>.</span>
          </h2>
          <p style={{ fontSize: 14, color: SV.ink2, marginTop: 14, lineHeight: 1.55 }}>
            Most engagements look something like this — feeds and surfaces up top,
            a storage tier at the base, agents and queues holding it together.
          </p>
          <div style={{ marginTop: 12, fontFamily: SV.mono, fontSize: 10, color: SV.muted, letterSpacing: 1, textTransform: 'uppercase' }}>
            [ Illustrative · pattern, not a specific system ]
          </div>
        </div>

        {/* Desktop SVG */}
        <div className="diagram-svg">
          <DesktopSVG reduceMotion={reduceMotion} />
        </div>

        {/* Mobile vertical stack */}
        <div className="diagram-mobile-stack" style={{ display: 'none' }}>
          <MobileStack />
        </div>
      </div>
    </section>
  );
}
