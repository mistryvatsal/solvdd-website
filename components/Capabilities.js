import { SV, CAPABILITIES } from './tokens';

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

function CapabilityGlyph({ id }) {
  const s = { stroke: SV.ink, strokeWidth: 1.2, fill: 'none' };
  const props = { width: 28, height: 28, viewBox: '0 0 28 28' };
  switch (id) {
    case '01': return <svg {...props} aria-hidden="true"><rect x="3" y="3" width="22" height="22" {...s} /><line x1="3" y1="10" x2="25" y2="10" {...s} /><line x1="3" y1="18" x2="25" y2="18" {...s} /></svg>;
    case '02': return <svg {...props} aria-hidden="true"><circle cx="6" cy="6" r="3" {...s} /><circle cx="22" cy="6" r="3" {...s} /><circle cx="6" cy="22" r="3" {...s} /><circle cx="22" cy="22" r="3" {...s} /><line x1="6" y1="9" x2="6" y2="19" {...s} /><line x1="9" y1="6" x2="19" y2="6" {...s} /><line x1="22" y1="9" x2="22" y2="19" {...s} /><line x1="9" y1="22" x2="19" y2="22" {...s} /></svg>;
    case '03': return <svg {...props} aria-hidden="true"><path d="M3 7 L25 7 L21 14 L25 21 L3 21 L7 14 Z" {...s} /></svg>;
    case '04': return <svg {...props} aria-hidden="true"><circle cx="14" cy="14" r="11" {...s} /><circle cx="14" cy="14" r="5" {...s} /><line x1="3" y1="14" x2="25" y2="14" {...s} /><line x1="14" y1="3" x2="14" y2="25" {...s} /></svg>;
    case '05': return <svg {...props} aria-hidden="true"><path d="M14 4 L24 14 L14 24 L4 14 Z" {...s} /><circle cx="14" cy="14" r="3" {...s} fill={SV.ink} /></svg>;
    case '06': return <svg {...props} aria-hidden="true"><path d="M4 14 Q4 6 12 6 Q20 6 20 14 Q20 22 12 22 Q4 22 4 14" {...s} /><line x1="20" y1="14" x2="26" y2="14" {...s} /><line x1="24" y1="11" x2="26" y2="14" {...s} /><line x1="24" y1="17" x2="26" y2="14" {...s} /></svg>;
    case '07': return <svg {...props} aria-hidden="true"><rect x="3" y="6" width="22" height="14" {...s} /><line x1="3" y1="10" x2="25" y2="10" {...s} /><circle cx="6" cy="8" r="0.7" fill={SV.ink} /><circle cx="9" cy="8" r="0.7" fill={SV.ink} /></svg>;
    case '08': return <svg {...props} aria-hidden="true"><line x1="4" y1="22" x2="24" y2="22" {...s} /><rect x="6" y="14" width="4" height="8" {...s} /><rect x="12" y="9" width="4" height="13" {...s} /><rect x="18" y="6" width="4" height="16" {...s} /></svg>;
    default: return null;
  }
}

export default function Capabilities() {
  return (
    // Outer: full-bleed bg + bottom border
    <section id="capabilities" style={{ borderBottom: `1px solid ${SV.rule}` }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div
          className="capabilities-header"
          style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56, marginBottom: 56 }}
        >
          <Tag>[ Capabilities ]</Tag>
          <h2 style={{
            fontSize: 56, lineHeight: 1.02, letterSpacing: -1.6,
            fontWeight: 500, margin: 0, maxWidth: 880,
          }}>
            A practice
            <span style={{ color: SV.muted }}>,</span>
            {' '}
            <span style={{ fontFamily: SV.serif, fontStyle: 'italic', fontWeight: 400 }}>not a menu.</span>
          </h2>
        </div>

        <div
          className="capabilities-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 0,
            borderTop: `1px solid ${SV.ink}`,
          }}
        >
          {CAPABILITIES.map((c, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={c.id}
                className={isLeft ? '' : 'cap-card-right'}
                style={{
                  padding: '36px 36px 36px 0',
                  borderBottom: `1px solid ${SV.rule}`,
                  borderRight: isLeft ? `1px solid ${SV.rule}` : 'none',
                  paddingLeft: isLeft ? 0 : 36,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <Tag size={11}>{c.id}</Tag>
                  <div style={{ flex: 1, height: 1, background: SV.rule }} />
                  <CapabilityGlyph id={c.id} />
                </div>
                <div style={{ marginTop: 18, fontSize: 28, fontWeight: 500, letterSpacing: -0.6 }}>
                  {c.name}
                </div>
                <div style={{ marginTop: 14, fontSize: 15, color: SV.ink2, lineHeight: 1.55, maxWidth: 520 }}>
                  {c.blurb}
                </div>
                <div style={{ marginTop: 20, fontFamily: SV.mono, fontSize: 11, color: SV.muted, letterSpacing: 0.4 }}>
                  {c.tags.join('   ·   ')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
