import { isoString } from '@/components/iso-text'

const W = 320
const H = 240
const L = 46
const R = 12
const T = 14
const B = 38
const PW = W - L - R
const PH = H - T - B

function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function SvgIso({ text }: { text: string }) {
  return (
    <>
      {text.split(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/).map((part, i) =>
        /[⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(part) ? (
          <tspan key={i} baselineShift="super" fontSize="0.7em">
            {isoString(part)}
          </tspan>
        ) : (
          <tspan key={i}>{part}</tspan>
        ),
      )}
    </>
  )
}

function Frame({
  xLabel,
  yLabel,
  xTicks,
  yTicks,
  children,
}: {
  xLabel: string
  yLabel: string
  xTicks: string[]
  yTicks: string[]
  children: React.ReactNode
}) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" fill="none">
      <rect x={L} y={T} width={PW} height={PH} stroke="currentColor" strokeWidth={1} />
      {xTicks.map((t, i) => {
        const x = L + (PW * i) / (xTicks.length - 1)
        return (
          <g key={`x${t}`}>
            <line x1={x} x2={x} y1={T + PH} y2={T + PH - 5} stroke="currentColor" />
            <text x={x} y={T + PH + 13} fontSize={9} textAnchor="middle" fill="currentColor">
              {t}
            </text>
          </g>
        )
      })}
      {yTicks.map((t, i) => {
        const y = T + PH - (PH * i) / (yTicks.length - 1)
        return (
          <g key={`y${t}`}>
            <line x1={L} x2={L + 5} y1={y} y2={y} stroke="currentColor" />
            <text x={L - 5} y={y + 3} fontSize={9} textAnchor="end" fill="currentColor">
              {t}
            </text>
          </g>
        )
      })}
      <text x={L + PW / 2} y={H - 6} fontSize={11} textAnchor="middle" fill="currentColor">
        <SvgIso text={xLabel} />
      </text>
      <text
        x={12}
        y={T + PH / 2}
        fontSize={11}
        textAnchor="middle"
        fill="currentColor"
        transform={`rotate(-90 12 ${T + PH / 2})`}
      >
        <SvgIso text={yLabel} />
      </text>
      {children}
    </svg>
  )
}

function ProductionRatePlot() {
  const rnd = seeded(7)
  const pts = Array.from({ length: 26 }, () => {
    const t = rnd()
    const x = L + 12 + t * (PW - 24)
    const yLine = T + 22 + t * (PH - 50)
    return { x, y: yLine + (rnd() - 0.5) * 34 }
  })
  return (
    <Frame
      xLabel="(²²Ne/²¹Ne)cos"
      yLabel="¹⁴C (dpm/kg)"
      xTicks={['1.05', '1.10', '1.15', '1.20', '1.25']}
      yTicks={['20', '40', '60', '80']}
    >
      <path
        d={`M ${L + 6} ${T + 16} Q ${L + PW * 0.5} ${T + PH * 0.42} ${L + PW - 6} ${T + PH - 22}`}
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d={`M ${L + 6} ${T + 36} Q ${L + PW * 0.5} ${T + PH * 0.6} ${L + PW - 6} ${T + PH - 6}`}
        stroke="currentColor"
        strokeDasharray="4 3"
      />
      {pts.map((p, i) => (
        <g key={i}>
          <line x1={p.x} x2={p.x} y1={p.y - 6} y2={p.y + 6} stroke="currentColor" />
          <circle cx={p.x} cy={p.y} r={3} fill="currentColor" />
        </g>
      ))}
    </Frame>
  )
}

function Histogram({
  bins,
  xLabel,
  xTicks,
  yTicks,
}: {
  bins: number[]
  xLabel: string
  xTicks: string[]
  yTicks: string[]
}) {
  const max = Math.max(...bins)
  const bw = PW / bins.length
  return (
    <Frame xLabel={xLabel} yLabel="Number of meteorites" xTicks={xTicks} yTicks={yTicks}>
      {bins.map((b, i) => {
        const h = (b / max) * (PH - 14)
        return (
          <rect
            key={i}
            x={L + i * bw + 1}
            y={T + PH - h}
            width={bw - 2}
            height={h}
            fill="currentColor"
            fillOpacity={0.35}
            stroke="currentColor"
          />
        )
      })}
    </Frame>
  )
}

function NeonThreeIsotopePlot() {
  const rnd = seeded(23)
  const air = { x: L + 6, y: T + 10 }
  const cos = { x: L + PW - 18, y: T + PH - 14 }
  const pts = Array.from({ length: 22 }, () => {
    const t = 0.35 + rnd() * 0.62
    return {
      x: air.x + (cos.x - air.x) * t + (rnd() - 0.5) * 10,
      y: air.y + (cos.y - air.y) * t + (rnd() - 0.5) * 10,
    }
  })
  return (
    <Frame
      xLabel="²¹Ne/²²Ne"
      yLabel="²⁰Ne/²²Ne"
      xTicks={['0', '0.2', '0.4', '0.6', '0.8']}
      yTicks={['0', '2', '4', '6', '8', '10']}
    >
      <line x1={air.x} y1={air.y} x2={cos.x} y2={cos.y} stroke="currentColor" strokeWidth={1.4} />
      <rect x={air.x - 4} y={air.y - 4} width={8} height={8} fill="currentColor" />
      <text x={air.x + 10} y={air.y + 4} fontSize={10} fill="currentColor">
        Air
      </text>
      <rect x={cos.x - 4} y={cos.y - 4} width={8} height={8} fill="currentColor" />
      <text x={cos.x - 8} y={cos.y - 10} fontSize={10} fill="currentColor" textAnchor="end">
        Cosmogenic
      </text>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} stroke="currentColor" strokeWidth={1.2} />
      ))}
    </Frame>
  )
}

function BernPlot() {
  const rnd = seeded(41)
  const curve = Array.from({ length: 30 }, (_, i) => {
    const t = i / 29
    return { x: L + 10 + t * (PW - 20), y: T + PH - 20 - Math.pow(t, 0.7) * (PH - 40) }
  })
  const pts = Array.from({ length: 24 }, () => {
    const t = rnd()
    return {
      x: L + 10 + t * (PW - 20) + (rnd() - 0.5) * 8,
      y: T + PH - 20 - Math.pow(t, 0.7) * (PH - 40) + 6 + rnd() * 26,
    }
  })
  return (
    <Frame
      xLabel="(²²Ne/²¹Ne)cos"
      yLabel="(³He/²¹Ne)cos"
      xTicks={['1.05', '1.10', '1.15', '1.20', '1.25']}
      yTicks={['3', '4', '5', '6', '7']}
    >
      <polyline
        points={curve.map((p) => `${p.x},${p.y}`).join(' ')}
        stroke="currentColor"
        strokeWidth={1.6}
      />
      {pts.map((p, i) => (
        <path
          key={i}
          d={`M ${p.x} ${p.y - 3.5} L ${p.x + 3.5} ${p.y + 3} L ${p.x - 3.5} ${p.y + 3} Z`}
          fill="currentColor"
        />
      ))}
    </Frame>
  )
}

export function PlotBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="plot-grid absolute inset-0" />
      <div className="absolute inset-0 text-primary/[0.16]">
        <div className="absolute -left-6 top-24 w-[340px] rotate-[-4deg] md:left-6 md:w-[420px]">
          <ProductionRatePlot />
        </div>
        <div className="absolute -right-10 top-10 hidden w-[380px] rotate-[3deg] md:block lg:right-6">
          <NeonThreeIsotopePlot />
        </div>
        <div className="absolute -right-8 top-[48%] w-[320px] rotate-[-2deg] md:right-10 md:w-[400px]">
          <Histogram
            bins={[18, 26, 22, 17, 14, 10, 8, 6, 5, 3, 2, 1]}
            xLabel="Terrestrial age (kyr)"
            xTicks={['0', '10', '20', '30', '40']}
            yTicks={['0', '10', '20', '30']}
          />
        </div>
        <div className="absolute -left-10 top-[62%] hidden w-[380px] rotate-[3deg] md:block lg:left-4">
          <BernPlot />
        </div>
        <div className="absolute bottom-0 left-1/2 hidden w-[360px] -translate-x-1/2 rotate-[-1deg] lg:block">
          <Histogram
            bins={[4, 7, 9, 12, 8, 10, 6, 5, 7, 4, 3, 2]}
            xLabel="Cosmic-ray exposure age (Ma)"
            xTicks={['0', '5', '10', '15', '20']}
            yTicks={['0', '4', '8', '12']}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/50" />
    </div>
  )
}
