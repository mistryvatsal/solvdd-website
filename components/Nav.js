import { SV, MAILTO, SOLVDD_EMAIL } from './tokens';

function SlashMark({ size = 18, color = SV.ink }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline',
      gap: size * 0.18, fontFamily: SV.sans, color, lineHeight: 1,
    }}>
      <span style={{ fontFamily: SV.mono, fontSize: size * 1.08, color: SV.muted, fontWeight: 400, lineHeight: 1 }}>/</span>
      <span style={{ fontSize: size, fontWeight: 600, letterSpacing: -0.6 }}>solvdd</span>
    </div>
  );
}

export default function Nav() {
  return (
    // Outer: full-bleed background + mobile border
    <header className="nav-outer" style={{ background: SV.bg }}>
      {/* Inner: capped at 1440px, clamp padding */}
      <nav
        className="content-inner nav-inner"
        style={{
          paddingTop: 22, paddingBottom: 22,
          display: 'flex', alignItems: 'center', gap: 32,
        }}
      >
        <a href="/" aria-label="Solvdd home" style={{ textDecoration: 'none' }}>
          <SlashMark size={18} />
        </a>

        <div style={{ flex: 1 }} />

        <div className="nav-links" style={{
          display: 'flex', gap: 28,
          fontFamily: SV.sans, fontSize: 13, color: SV.ink2, fontWeight: 500,
        }}>
          <a href="#manifesto" style={{ textDecoration: 'none' }}>How we work</a>
          <a href="#capabilities" style={{ textDecoration: 'none' }}>Capabilities</a>
          <a href="#contact" style={{ textDecoration: 'none' }}>Contact</a>
        </div>

        <div className="nav-divider" style={{ width: 1, height: 16, background: SV.rule, margin: '0 8px' }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: SV.mono, fontSize: 11, color: SV.ink2, letterSpacing: 0.6,
        }}>
          <span style={{
            width: 7, height: 7, background: SV.ember, borderRadius: 999,
            animation: 'sv-pulse 2.2s ease-in-out infinite',
            display: 'inline-block',
          }} />
          <span className="nav-status-label" style={{ textTransform: 'uppercase' }}>Available · Q3 2026</span>
          <span className="nav-status-label-short" style={{ textTransform: 'uppercase', display: 'none' }}>Q3 · 2026</span>
        </div>

        <a
          href={MAILTO}
          aria-label={`Email ${SOLVDD_EMAIL} to start a project`}
          className="nav-email"
          style={{
            fontFamily: SV.mono, fontSize: 12, color: SV.ink,
            textDecoration: 'none', borderBottom: `1px solid ${SV.ink}`,
            paddingBottom: 2, letterSpacing: 0.3,
          }}
        >
          {SOLVDD_EMAIL} ↗
        </a>
      </nav>
    </header>
  );
}
