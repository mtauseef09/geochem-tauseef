import type { ReactNode } from 'react'
import { ArrowUpRight, Award, GraduationCap, Languages, Megaphone, Mic } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import {
  awards,
  coAuthorArticles,
  conferenceContributions,
  conferences,
  cvEducation,
  cvPositions,
  firstAuthorArticles,
  instruments,
  languages,
  links,
  manuscripts,
  outreach,
  projects,
  skills,
  teaching,
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
      <h4 className="mt-1 text-pretty font-medium leading-snug">
        <IsoText>{pub.title}</IsoText>
      </h4>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        <Authors authors={pub.authors} />
      </p>
      <p className="mt-1 text-sm">
        <em>{pub.journal}</em>
        {pub.volume ? `, ${pub.volume}` : ''}
        {pub.pages ? `: ${pub.pages}` : ''}
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

function PubGroup({ title, note, pubs }: { title: string; note?: string; pubs: Publication[] }) {
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-baseline gap-x-3">
        <h3 className="font-serif text-xl font-semibold">{title}</h3>
        <span className="text-sm text-muted-foreground">{note ?? `${pubs.length} items`}</span>
      </div>
      <ol className="space-y-6">
        {pubs.map((p) => (
          <PublicationItem key={p.doi ?? p.title} pub={p} />
        ))}
      </ol>
    </div>
  )
}

export function PublicationsLetter() {
  return (
    <div className="space-y-10">
      <PubGroup title="First-author, peer-reviewed" pubs={firstAuthorArticles} />
      <PubGroup title="Co-author, peer-reviewed" pubs={coAuthorArticles} />
      <PubGroup title="Under review & in preparation" pubs={manuscripts} />
      <PubGroup title="Selected conference contributions" pubs={conferenceContributions} />
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
    <ol className="space-y-6">
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
            {e.detail ? (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                <IsoText>{e.detail}</IsoText>
              </p>
            ) : null}
            {e.highlight ? (
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                <Award className="size-3.5" aria-hidden="true" />
                {e.highlight}
              </p>
            ) : null}
            {e.bullets ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-primary">
                {e.bullets.map((b) => (
                  <li key={b}>
                    <IsoText>{b}</IsoText>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

function CvBlock({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/15 bg-background/60 p-5">
      <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-semibold">
        <span className="text-primary">{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  )
}

export function CvLetter() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Experience</h3>
        <CvList entries={cvPositions} />
      </div>
      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Education</h3>
        <CvList entries={cvEducation} />
      </div>

      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Awards & honours</h3>
        <ol className="grid gap-3 sm:grid-cols-2">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-3 rounded-xl bg-accent/60 p-4">
              <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{a.year}</p>
                <p className="font-medium leading-snug">{a.title}</p>
                {a.detail ? <p className="text-sm text-muted-foreground">{a.detail}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="mb-5 font-serif text-xl font-semibold">Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.area}>
              <p className="text-sm font-semibold text-primary">{s.area}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full border border-primary/20 bg-background/70 px-2.5 py-1 text-xs">
                    <IsoText>{item}</IsoText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <CvBlock icon={<GraduationCap className="size-5" aria-hidden="true" />} title="Supervision & teaching">
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-primary">
            {teaching.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </CvBlock>
        <CvBlock icon={<Mic className="size-5" aria-hidden="true" />} title="Conferences & research stays">
          <ul className="space-y-2 text-sm leading-relaxed">
            {conferences.map((c) => (
              <li key={c.name}>
                <span className="font-medium">{c.name}</span>
                <span className="text-muted-foreground">
                  {' — '}
                  <IsoText>{c.where}</IsoText>
                </span>
              </li>
            ))}
          </ul>
        </CvBlock>
        <CvBlock icon={<Megaphone className="size-5" aria-hidden="true" />} title="Scientific outreach">
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-primary">
            {outreach.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </CvBlock>
        <CvBlock icon={<Languages className="size-5" aria-hidden="true" />} title="Languages">
          <ul className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                {l}
              </li>
            ))}
          </ul>
        </CvBlock>
      </div>

      <div className="rounded-xl bg-primary p-5 text-primary-foreground">
        <p className="text-sm leading-relaxed">
          {'A full PDF CV is available on request — '}
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
        <li key={ins.name} className="rounded-xl border border-primary/15 bg-background/60 p-5">
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
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            <IsoText>{ins.use}</IsoText>
          </p>
          {ins.place ? (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{ins.place}</p>
          ) : null}
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
          <h3 className="mt-1.5 text-pretty font-medium leading-snug">
            <IsoText>{p.title}</IsoText>
          </h3>
          <p className="text-sm text-muted-foreground">{p.place}</p>
          <p className="mt-2 text-sm leading-relaxed">
            <IsoText>{p.summary}</IsoText>
          </p>
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
