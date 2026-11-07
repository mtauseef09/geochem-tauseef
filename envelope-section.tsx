'use client'

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { BookOpenText, FileUser, FlaskConical, FolderKanban, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type EnvelopeItem = {
  id: string
  label: string
  caption: string
  icon: 'publications' | 'cv' | 'instruments' | 'projects'
  content: ReactNode
}

const icons: Record<EnvelopeItem['icon'], LucideIcon> = {
  publications: BookOpenText,
  cv: FileUser,
  instruments: FlaskConical,
  projects: FolderKanban,
}

export function EnvelopeSection({ items }: { items: EnvelopeItem[] }) {
  const [active, setActive] = useState(items[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const panelRef = useRef<HTMLDivElement>(null)
  const current = items.find((i) => i.id === active) ?? items[0]

  // Deep links: /#publications, /#cv, /#instruments, /#projects open that envelope.
  useEffect(() => {
    function fromHash() {
      const id = window.location.hash.slice(1)
      if (items.some((i) => i.id === id)) {
        setActive(id)
        requestAnimationFrame(() => panelRef.current?.scrollIntoView({ block: 'start' }))
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [items])

  function open(id: string) {
    setActive(id)
    history.replaceState(null, '', `#${id}`)
    // On small screens the letter sits below the fold — bring it into view.
    requestAnimationFrame(() => {
      const panel = panelRef.current
      if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.7) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (index + dir + items.length) % items.length
    setActive(items[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="envelopes" className="scroll-mt-20 pt-16" aria-labelledby="envelopes-heading">
      <div className="mb-6">
        <h2 id="envelopes-heading" className="font-serif text-3xl font-semibold">
          Open an envelope
        </h2>
        <p className="mt-1 text-muted-foreground">Papers, CV, instruments and projects — pick one to read what&apos;s inside.</p>
      </div>

      <div role="tablist" aria-label="Profile envelopes" className="mt-16 grid grid-cols-2 gap-x-4 gap-y-16 md:grid-cols-4 md:gap-x-6">
        {items.map((item, index) => {
          const isOpen = item.id === active
          const Icon = icons[item.icon]
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isOpen}
              aria-controls={`panel-${item.id}`}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => open(item.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className="group relative aspect-[4/3] w-full rounded-xl text-left outline-none [perspective:800px] focus-visible:ring-4 focus-visible:ring-ring/50"
            >
              <span className="absolute inset-0 rounded-xl bg-primary/25 shadow-sm" />
              <span
                className={cn(
                  'absolute inset-x-[9%] bottom-[8%] top-[12%] z-10 rounded-md bg-card p-3 shadow transition-transform duration-500 ease-out',
                  isOpen ? '-translate-y-[34%]' : 'group-hover:-translate-y-[10%]',
                )}
              >
                <span className="block h-1.5 w-3/5 rounded-full bg-primary/40" />
                <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-primary/20" />
                <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-primary/20" />
              </span>
              <span
                className="absolute inset-0 z-20 flex flex-col justify-end rounded-xl bg-primary p-3 text-primary-foreground md:p-4"
                style={{ clipPath: 'polygon(0 30%, 50% 62%, 100% 30%, 100% 100%, 0 100%)' }}
              >
                <span className="flex items-center gap-2">
                  <Icon className="size-4 shrink-0 md:size-5" aria-hidden="true" />
                  <span className="truncate text-sm font-semibold md:text-base">{item.label}</span>
                </span>
                <span className="mt-0.5 truncate text-xs text-primary-foreground/80">{item.caption}</span>
              </span>
              <span
                className={cn(
                  'absolute inset-x-0 top-0 h-[62%] origin-top rounded-t-xl bg-[var(--envelope-flap)] transition-transform duration-500 ease-out [backface-visibility:visible]',
                  isOpen ? 'z-0 [transform:rotateX(180deg)]' : 'z-30',
                )}
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        key={current.id}
        ref={panelRef}
        tabIndex={0}
        className="animate-in fade-in slide-in-from-top-2 mt-8 scroll-mt-20 rounded-2xl border border-primary/15 border-t-4 border-t-primary bg-card/95 p-6 shadow-sm backdrop-blur-sm duration-300 md:p-9"
      >
        <h3 className="mb-6 font-serif text-2xl font-semibold">{current.label}</h3>
        {current.content}
      </div>
    </section>
  )
}
