import { ArrowUpRight } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import {
  conferenceContributions,
  cvEducation,
  cvPositions,
  instruments,
  journalArticles,
  links,
  projects,
  type CvEntry,
  type Publication,
} from '@/lib/profile-data'

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={`${a}-${i}`}>
          {a === 'M. Tauseef' ? <strong className="font-semibold text-foreground">{a}</strong> : a}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  )
}

function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <li className="relative border-l-2 border-primary/25 pl-5">
      <span className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-primary bg-card" />
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{pub.year}</p>
      <h4 className="mt-1 text-pretty font-medium leading-snug"><IsoText>{pub.title}</IsoText></h4>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        <Authors authors={pub.authors} />
      </p>
      <p className="mt-1 text-sm">
        <em>{pub.journal}</em>
        {pub.volume ? `, ${pub.volume}` : ''}
        {pub.pages ? `, ${pub.pages}` : ''}
      </p>
      {pub.doi ? (
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          doi:{pub.doi}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </li>
  )
}

export function PublicationsLetter() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Journal articles</h3>
        <ol className="space-y-6">
          {journalArticles.map((p) => (
            <PublicationItem key={p.doi ?? p.title} pub={p} />
          ))}
        </ol>
      </div>
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Conference contributions</h3>
        <ol className="space-y-6">
          {conferenceContributions.map((p) => (
            <PublicationItem key={p.title} pub={p} />
          ))}
        </ol>
      </div>
      <p className="text-sm text-muted-foreground">
        {'Full, up-to-date list on '}
        <a href={links.orcid} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">
          ORCID
        </a>
        {' and '}
        <a href={links.googleScholar} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">
          Google Scholar
        </a>
        .
      </p>
    </div>
  )
}

function CvList({ entries }: { entries: CvEntry[] }) {
  return (
    <ol className="space-y-5">
      {entries.map((e) => (
        <li key={`${e.title}-${e.period}`} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
          <p className="text-sm font-medium text-primary">
            {e.period}
            {e.current ? (
              <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Now</span>
            ) : null}
          </p>
          <div>
            <p className="font-medium">{e.title}</p>
            <p className="text-sm text-muted-foreground">{e.place}</p>
            {e.detail ? <p className="text-sm text-muted-foreground">{e.detail}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function CvLetter() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Positions</h3>
        <CvList entries={cvPositions} />
      </div>
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Education</h3>
        <CvList entries={cvEducation} />
      </div>
      <div className="rounded-xl bg-accent/70 p-5">
        <p className="text-sm leading-relaxed text-accent-foreground">
          {'A full CV is available on request — '}
          <a href={`mailto:${links.emailWork}?subject=CV%20request`} className="font-semibold underline underline-offset-4">
            email me
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export function InstrumentsLetter() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {instruments.map((ins) => (
        <li key={`${ins.name}-${ins.place}`} className="rounded-xl border border-primary/15 bg-background/60 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-medium leading-snug">
              <IsoText>{ins.name}</IsoText>
            </h3>
            {ins.current ? (
              <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                Working on
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground"><IsoText>{ins.use}</IsoText></p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{ins.place}</p>
        </li>
      ))}
    </ul>
  )
}

export function ProjectsLetter() {
  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.title} className="rounded-xl border border-primary/15 bg-background/60 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.period}</span>
            {p.current ? (
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Ongoing</span>
            ) : null}
          </div>
          <h3 className="mt-1.5 text-pretty font-medium leading-snug"><IsoText>{p.title}</IsoText></h3>
          <p className="text-sm text-muted-foreground">{p.place}</p>
          <p className="mt-2 text-sm leading-relaxed"><IsoText>{p.summary}</IsoText></p>
          {p.dois.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.dois.map((doi) => (
                <li key={doi}>
                  <a
                    href={`https://doi.org/${doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    {doi}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
