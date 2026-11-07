import { ArrowUp } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'
import { EnvelopeSection, type EnvelopeItem } from '@/components/envelope-section'
import { Hero } from '@/components/hero'
import { NewsStrip } from '@/components/news-strip'
import { ResearchSection } from '@/components/research-section'
import { CvLetter, InstrumentsLetter, ProjectsLetter, PublicationsLetter } from '@/components/letters'
import { PlotBackground } from '@/components/plot-background'
import { SiteHeader } from '@/components/site-header'
import { instruments, journalArticles, links, manuscripts, profile, projects } from '@/lib/profile-data'

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
      <main id="main" className="mx-auto max-w-5xl px-4 pb-20 sm:px-5">
        <Hero />
        <NewsStrip />
        <ResearchSection />
        <EnvelopeSection items={envelopes} />
        <section id="connect" className="scroll-mt-20 pt-16" aria-labelledby="connect-heading">
          <h2 id="connect-heading" className="mb-1 font-serif text-3xl font-semibold">
            Get in touch
          </h2>
          <p className="mb-6 text-muted-foreground">Happy to talk noble gases, meteorites, and collaborations.</p>
          <ContactLinks />
        </section>
      </main>
      <footer className="no-print border-t border-primary/10 bg-background/80 backdrop-blur">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 py-8 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-serif text-base font-semibold text-foreground">{profile.name}</p>
            <p>
              {profile.role} · {profile.institution}
            </p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <a className="hover:text-primary" href={`mailto:${links.emailWork}`}>
                Email
              </a>
              <a className="hover:text-primary" href={links.orcid} target="_blank" rel="noopener noreferrer">
                ORCID
              </a>
              <a className="hover:text-primary" href="/cv">
                CV
              </a>
              <a className="hover:text-primary" href={links.phdThesis} target="_blank" rel="noopener noreferrer">
                PhD thesis
              </a>
            </p>
            <p className="mt-3 text-xs">
              {'© '}
              {new Date().getFullYear()} {profile.name} · Background: stylised plots of the data types in my research
              (illustrative).
            </p>
          </div>
          <a
            href="#about"
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary/20 px-3 py-1.5 hover:border-primary/50 hover:text-primary sm:self-end"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
