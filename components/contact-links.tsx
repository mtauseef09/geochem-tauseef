import { BookOpen, GraduationCap, Mail, Network } from 'lucide-react'
import { links } from '@/lib/profile-data'

const items = [
  { href: `mailto:${links.emailWork}`, label: links.emailWork, sub: 'Syracuse University', icon: Mail },
  { href: `mailto:${links.emailPersonal}`, label: links.emailPersonal, sub: 'Personal', icon: Mail },
  { href: links.googleScholar, label: 'Google Scholar', sub: 'Citations', icon: GraduationCap, external: true },
  { href: links.researchGate, label: 'ResearchGate', sub: 'Publications & posters', icon: Network, external: true },
  { href: links.orcid, label: 'ORCID', sub: '0000-0002-9773-2595', icon: BookOpen, external: true },
]

export function ContactLinks() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.href}>
            <a
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-3 rounded-xl border border-primary/15 bg-card/90 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium">{item.label}</span>
                <span className="block truncate text-sm text-muted-foreground">{item.sub}</span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
