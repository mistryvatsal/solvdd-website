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

const PRINCIPLES = [
  [
    'Systems are built to run, not to demo.',
    'Every project we ship has an on-call rotation, runbooks, and a recovery plan written before the launch date.',
  ],
  [
    'Architecture is a constraint, not a deliverable.',
    'We design for the next two orders of magnitude, then build for the current one. No premature distribution, no premature platform.',
  ],
  [
    'Observability is non-negotiable.',
    'If we cannot explain a slow request inside five minutes, we have not finished the system. Tracing, structured logs, SLOs from day one.',
  ],
  [
    'AI is plumbing, not magic.',
    'LLMs are one component among many — wrapped in evals, schemas, retries, and a budget. We measure outcomes, not vibes.',
  ],
  [
    'Less surface, more depth.',
    'Owning a system end-to-end beats handing it off three times. Solvdd takes fewer engagements on purpose — depth scales better than breadth.',
  ],
];

export default function Manifesto() {
  return (
    // Outer: full-bleed bg + bottom border
    <section id="manifesto" style={{ borderBottom: `1px solid ${SV.rule}` }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div
          className="manifesto-header"
          style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56, marginBottom: 56 }}
        >
          <Tag>[ How we operate ]</Tag>
          <h2 style={{
            fontSize: 56, lineHeight: 1.02, letterSpacing: -1.6,
            fontWeight: 500, margin: 0, maxWidth: 880,
          }}>
            Five principles that shape every system we ship.
          </h2>
        </div>

        <div>
          {PRINCIPLES.map(([head, body], i) => (
            <div
              key={i}
              className="manifesto-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                gap: 56,
                padding: '40px 0',
                borderTop: `1px solid ${SV.rule}`,
                alignItems: 'baseline',
              }}
            >
              <div style={{ fontFamily: SV.mono, fontSize: 13, color: SV.muted, letterSpacing: 0.4 }}>
                {String(i + 1).padStart(2, '0')} ——
              </div>
              <div style={{ fontSize: 32, letterSpacing: -0.9, lineHeight: 1.1, fontWeight: 500, color: SV.ink }}>
                {head}
              </div>
              <div style={{ fontSize: 16, color: SV.ink2, lineHeight: 1.55, maxWidth: 480 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
