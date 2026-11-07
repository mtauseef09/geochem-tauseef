import { ArrowUpRight } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import { news } from '@/lib/profile-data'

export function NewsStrip() {
  return (
    <section className="pt-10" aria-labelledby="news-heading">
      <div className="rounded-2xl border border-primary/15 bg-card/85 p-5 backdrop-blur-sm md:p-6">
        <h2 id="news-heading" className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Latest
        </h2>
        <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
          {news.map((n) => (
            <li key={n.text} className="grid grid-cols-[4.5rem_1fr] gap-3 text-sm leading-relaxed">
              <span className="font-medium text-primary">{n.date}</span>
              <span>
                <IsoText>{n.text}</IsoText>
                {n.href ? (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-0.5 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Read
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
