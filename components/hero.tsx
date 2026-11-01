import { Mail, MapPin } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import {
  awards,
  coAuthorArticles,
  firstAuthorArticles,
  links,
  manuscripts,
  profile,
  researchTopics,
} from '@/lib/profile-data'

export function Hero() {
  const stats = [
    { value: firstAuthorArticles.length + coAuthorArticles.length, label: 'Peer-reviewed papers' },
    { value: firstAuthorArticles.length, label: 'First-author' },
    { value: manuscripts.length, label: 'In review / prep' },
    { value: awards.length, label: 'Awards & fellowships' },
  ]

  return (
    <section id="about" className="scroll-mt-20 pt-14 md:pt-20">
      <div className="rounded-3xl border border-primary/15 bg-card/85 p-7 shadow-sm backdrop-blur-sm md:p-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
          <MapPin className="size-3.5" aria-hidden="true" />
          {profile.location}
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
          {profile.name}
          <span className="text-primary">{`, ${profile.title}`}</span>
        </h1>
        <p className="mt-3 text-pretty text-lg font-medium text-primary md:text-xl">{profile.role}</p>
        <p className="mt-1 text-pretty text-sm text-muted-foreground">
          {`${profile.department}, ${profile.institution}`}
        </p>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {'I work in '}
          <strong className="font-semibold text-foreground">{profile.group}</strong>
          {' at '}
          <strong className="font-semibold text-foreground">{profile.institution}</strong>
          {', developing a noble gas extraction line for fluid and solid samples. I completed my PhD in Physics (Space Research and Planetology) at the '}
          <strong className="font-semibold text-foreground">{profile.phd.institution}</strong>
          <IsoText>{` in ${profile.phd.group}, on the ¹⁴C and ¹⁴C/¹⁰Be terrestrial age dating system for stony meteorites.`}</IsoText>
        </p>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">{profile.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Research topics">
          {researchTopics.map((topic) => (
            <li key={topic} className="rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm">
              <IsoText>{topic}</IsoText>
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-accent/70 px-4 py-3">
              <dt className="text-xs font-medium text-accent-foreground/80">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-primary">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${links.emailWork}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
          <a
            href="#envelopes"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            Open my envelopes
          </a>
        </div>
      </div>
    </section>
  )
}
