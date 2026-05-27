import { SV, MAILTO, SOLVDD_EMAIL } from './tokens';

function SlashMark({ size = 14, color = '#dad6cb' }) {
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

export default function SolvddFooter() {
  return (
    // Outer: full-bleed dark background + top border
    <footer style={{ background: '#16140f', borderTop: '1px solid #2a2722' }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div
        className="content-inner footer-inner"
        style={{
          paddingTop: 32, paddingBottom: 32,
          display: 'flex', alignItems: 'center', gap: 24,
          fontFamily: SV.mono, fontSize: 11.5, color: '#6e6960', letterSpacing: 0.4,
        }}
      >
        <SlashMark size={14} color="#dad6cb" />
        <span className="footer-copyright" style={{ color: '#8a847b' }}>
          © {new Date().getFullYear()} · Solvdd Technology Solutions
        </span>
        <span className="footer-copyright-short" style={{ color: '#8a847b', display: 'none' }}>
          © {new Date().getFullYear()} · Solvdd
        </span>
        <div style={{ flex: 1 }} />
        <a
          href={MAILTO}
          aria-label={`Email ${SOLVDD_EMAIL}`}
          className="footer-email"
          style={{ color: '#dad6cb', textDecoration: 'none' }}
        >
          {SOLVDD_EMAIL}
        </a>
      </div>
    </footer>
  );
}
