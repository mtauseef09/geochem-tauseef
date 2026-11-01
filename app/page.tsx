import { ContactLinks } from '@/components/contact-links'
import { EnvelopeSection, type EnvelopeItem } from '@/components/envelope-section'
import { Hero } from '@/components/hero'
import { CvLetter, InstrumentsLetter, ProjectsLetter, PublicationsLetter } from '@/components/letters'
import { PlotBackground } from '@/components/plot-background'
import { SiteHeader } from '@/components/site-header'
import { instruments, journalArticles, manuscripts, profile, projects } from '@/lib/profile-data'

export default function Page() {
  const envelopes: EnvelopeItem[] = [
    {
      id: 'publications',
      label: 'Research Papers',
      caption: `${journalArticles.length} published · ${manuscripts.length} in progress`,
      icon: 'publications',
      content: <PublicationsLetter />,
    },
    { id: 'cv', label: 'CV', caption: 'Experience, education & awards', icon: 'cv', content: <CvLetter /> },
    {
      id: 'instruments',
      label: 'Instruments',
      caption: `${instruments.length} instruments & techniques`,
      icon: 'instruments',
      content: <InstrumentsLetter />,
    },
    {
      id: 'projects',
      label: 'Projects',
      caption: `${projects.length} projects`,
      icon: 'projects',
      content: <ProjectsLetter />,
    },
  ]

  return (
    <>
      <PlotBackground />
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-20">
        <Hero />
        <EnvelopeSection items={envelopes} />
        <section id="connect" className="scroll-mt-20 pt-16" aria-labelledby="connect-heading">
          <h2 id="connect-heading" className="mb-1 font-serif text-3xl font-semibold">
            How to connect
          </h2>
          <p className="mb-6 text-muted-foreground">Happy to talk noble gases, meteorites, and collaborations.</p>
          <ContactLinks />
        </section>
      </main>
      <footer className="border-t border-primary/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <p>Background: stylised plots of the data types in my research (illustrative).</p>
        </div>
      </footer>
    </>
  )
}
