import { ThemeToggle } from '@/components/theme-toggle'
import { profile } from '@/lib/profile-data'

const nav = [
  { href: '/#about', label: 'About', hideOnMobile: true },
  { href: '/#research', label: 'Research' },
  { href: '/#envelopes', label: 'Work' },
  { href: '/#connect', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 sm:px-5">
        <a href="/#about" className="flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
          <span className="flex size-9 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground">
            MT
          </span>
          <span className="hidden font-serif text-lg font-semibold md:inline">{profile.name}</span>
        </a>
        <div className="flex items-center gap-1">
          <nav aria-label="Main">
            <ul className="flex items-center text-sm">
              {nav.map((item) => (
                <li key={item.href} className={item.hideOnMobile ? 'hidden sm:block' : undefined}>
                  <a
                    href={item.href}
                    className="rounded-full px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:px-3"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
