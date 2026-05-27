import { SV, FAMILIAR_WITH } from './tokens';

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

export default function FamiliarWith() {
  return (
    // Outer: full-bleed bg + top border
    <div style={{ borderTop: `1px solid ${SV.rule}` }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 64, paddingBottom: 64 }}>

        {/* Desktop: two-column grid */}
        <div className="familiar-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'start' }}>
          <Tag>[ Familiar with ]</Tag>
          <div style={{ fontFamily: SV.mono, fontSize: 13, color: SV.muted, lineHeight: 2.0, letterSpacing: 0.4 }}>
            {FAMILIAR_WITH.map((t, i) => (
              <span key={t}>
                <span>{t}</span>
                {i < FAMILIAR_WITH.length - 1 && (
                  <span style={{ opacity: 0.4, margin: '0 10px' }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: label on top, flex-wrap */}
        <div className="familiar-mobile" style={{ display: 'none' }}>
          <Tag size={10}>[ Familiar with ]</Tag>
          <div style={{
            marginTop: 18, display: 'flex', flexWrap: 'wrap',
            alignItems: 'baseline', columnGap: 14, rowGap: 8,
            fontFamily: SV.mono, fontSize: 13, color: SV.muted, letterSpacing: 0.4,
          }}>
            {FAMILIAR_WITH.map((t, i) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 14 }}>
                <span>{t}</span>
                {i < FAMILIAR_WITH.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
