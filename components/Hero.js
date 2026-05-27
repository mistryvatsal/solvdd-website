import { SV, MAILTO } from './tokens';

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

function MetaCell({ index, label, value }) {
  return (
    <>
      {/* Desktop: label above value */}
      <div className="meta-cell-desktop">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Tag size={10}>{index}</Tag>
          <span style={{ flex: 1, height: 1, background: SV.rule }} />
        </div>
        <div style={{
          fontFamily: SV.mono, fontSize: 10.5, color: SV.muted,
          marginTop: 12, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          {label}
        </div>
        <div style={{ fontSize: 16, color: SV.ink, marginTop: 6, letterSpacing: -0.2 }}>
          {value}
        </div>
      </div>

      {/* Mobile: index + label inline, value below */}
      <div className="meta-cell-mobile" style={{ display: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Tag size={10}>{index}</Tag>
          <span style={{ flex: 1, height: 1, background: SV.rule }} />
          <Tag size={10}>{label}</Tag>
        </div>
        <div style={{ fontSize: 15, color: SV.ink, letterSpacing: -0.2 }}>{value}</div>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    // Outer: full-bleed bg (matches body bg, no explicit needed)
    <section>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 64, paddingBottom: 88 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 280px',
            gap: 56,
            alignItems: 'end',
          }}
        >
          <div>
            <Tag>[ Solvdd / Technology Solutions ]</Tag>
            <h1 className="hero-h1" style={{ fontWeight: 500, margin: '40px 0 0', color: SV.ink }}>
              Engineering
              <br />
              <span style={{ fontFamily: SV.serif, fontStyle: 'italic', fontWeight: 400, color: SV.ink2 }}>
                systems
              </span>
              <br />
              that scale<span style={{ color: SV.ember }}>.</span>
            </h1>
          </div>

          <div className="hero-cta-col" style={{ paddingBottom: 28 }}>
            <div style={{ width: 32, height: 1, background: SV.ink, marginBottom: 18 }} />
            <p style={{ fontSize: 16, color: SV.ink2, lineHeight: 1.55, margin: 0 }}>
              Engineering-first technology partner.
              Backend, data, infrastructure and AI systems
              for businesses where reliability is the product.
            </p>
            <a
              href={MAILTO}
              aria-label="Email Solvdd to start a project"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                marginTop: 28, fontFamily: SV.sans, fontSize: 14, fontWeight: 500,
                color: SV.bg, background: SV.ink, padding: '14px 22px',
                textDecoration: 'none',
              }}
            >
              Start a project
              <span style={{ color: SV.ember, fontFamily: SV.mono }}>↗</span>
            </a>
          </div>
        </div>

        {/* Meta row — full width of the inner container */}
        <div
          className="hero-meta"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginTop: 88,
            borderTop: `1px solid ${SV.ink}`,
            paddingTop: 24,
            gap: 32,
          }}
        >
          <MetaCell index="01" label="Operating since" value="2023 · founder-led" />
          <MetaCell index="02" label="Practice"         value="Backend · Data · AI" />
          <MetaCell index="03" label="Engagement"       value="Project · retainer · advisory" />
          <MetaCell index="04" label="Based"            value="India · serving globally" />
        </div>
      </div>
    </section>
  );
}
