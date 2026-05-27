import { SV, MAILTO, SOLVDD_EMAIL } from './tokens';

export default function Contact() {
  return (
    // Outer: full-bleed bgInk — stretches to viewport edge at all widths
    <section id="contact" style={{ background: SV.bgInk, color: '#e6e1d6' }}>
      {/* Inner: capped + clamp padding + vertical padding */}
      <div className="content-inner" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}
        >
          {/* Left — display type */}
          <div>
            <span style={{
              fontFamily: SV.mono, fontSize: 11, letterSpacing: 1.2,
              color: '#8a847b', textTransform: 'uppercase',
            }}>
              [ Contact ]
            </span>
            <h2 style={{
              fontSize: 'clamp(68px, 9vw, 132px)',
              lineHeight: 0.92,
              letterSpacing: 'clamp(-2px, -0.035em, -4px)',
              fontWeight: 500, margin: '24px 0 0', color: '#f6f4ef',
            }}>
              {"Let's"}
              <br />
              <span style={{ fontFamily: SV.serif, fontStyle: 'italic', fontWeight: 400 }}>
                {'build it'}
                <span style={{ color: SV.ember }}>.</span>
              </span>
            </h2>
          </div>

          {/* Right — descriptor + CTA */}
          <div>
            <p style={{ fontSize: 17, color: '#b8b2a7', lineHeight: 1.55, maxWidth: 420, margin: 0 }}>
              One email opens the conversation. Send the shape of the
              problem — we will write back within a working day with the
              outline of a plan.
            </p>
            <a
              href={MAILTO}
              aria-label={`Send an email to ${SOLVDD_EMAIL}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: SV.sans, fontWeight: 500, fontSize: 18,
                marginTop: 32, padding: '20px 24px',
                background: '#f6f4ef', color: '#16140f',
                textDecoration: 'none', letterSpacing: -0.2, minHeight: 48,
              }}
            >
              {SOLVDD_EMAIL} ↗
            </a>
            <div style={{
              marginTop: 14, fontFamily: SV.mono, fontSize: 11.5,
              color: '#6e6960', letterSpacing: 0.4, textAlign: 'center',
            }}>
              opens your mail client · ~24h reply
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
