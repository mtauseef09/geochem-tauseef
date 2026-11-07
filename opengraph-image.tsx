import { ImageResponse } from 'next/og'

export const alt = 'Mohammad Tauseef — Noble Gas Geochemistry'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Social-share preview card (LinkedIn, X, Slack, email clients…)
export default function OpengraphImage() {
  const grid = 'rgba(47,107,71,0.10)'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f2f8f3',
          backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          color: '#13291c',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 999,
              background: '#2f6b47',
              color: '#f4faf5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            MT
          </div>
          <div style={{ fontSize: 28, color: '#2f6b47', fontFamily: 'sans-serif' }}>
            Syracuse University · Earth &amp; Environmental Sciences
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Mohammad Tauseef, PhD</div>
          <div style={{ fontSize: 40, marginTop: 18, color: '#2f6b47' }}>
            Postdoctoral Researcher in Noble Gas Geochemistry
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontFamily: 'sans-serif' }}>
          {['Noble gases', 'Meteorites', 'Exposure ages', 'Radiocarbon dating'].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid rgba(47,107,71,0.35)',
                background: 'rgba(255,255,255,0.7)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
