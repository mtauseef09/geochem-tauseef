import { Atom, Droplets, Hourglass, Orbit, type LucideIcon } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import { researchExplainers } from '@/lib/profile-data'

const icons: Record<string, LucideIcon> = {
  noble: Atom,
  cre: Orbit,
  terrestrial: Hourglass,
  earth: Droplets,
}

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-20 pt-16" aria-labelledby="research-heading">
      <h2 id="research-heading" className="font-serif text-3xl font-semibold">
        My research, in plain words
      </h2>
      <p className="mt-1 max-w-2xl text-muted-foreground">
        Rocks from space carry clocks made of atoms. I read those clocks — and now use the same tools on Earth.
      </p>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {researchExplainers.map((item, i) => {
          const Icon = icons[item.key] ?? Atom
          return (
            <li
              key={item.key}
              className="relative rounded-2xl border border-primary/15 bg-card/90 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm font-semibold text-primary/70" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <IsoText>{item.body}</IsoText>
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
