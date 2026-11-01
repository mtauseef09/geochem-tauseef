import { profile } from '@/lib/profile-data'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#envelopes', label: 'Envelopes' },
  { href: '#connect', label: 'Connect' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#about" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground">
            MT
          </span>
          <span className="hidden font-serif text-lg font-semibold sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
