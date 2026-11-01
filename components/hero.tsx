import { Mail, MapPin } from 'lucide-react'
import { IsoText } from '@/components/iso-text'
import { links, profile, researchTopics } from '@/lib/profile-data'

export function Hero() {
  return (
    <section id="about" className="scroll-mt-20 pt-14 md:pt-20">
      <div className="rounded-3xl border border-primary/15 bg-card/85 p-7 shadow-sm backdrop-blur-sm md:p-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
          <MapPin className="size-3.5" aria-hidden="true" />
          {profile.institution}
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-pretty text-lg font-medium text-primary md:text-xl">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {'I am a postdoctoral researcher in '}
          <strong className="font-semibold text-foreground">{profile.group}</strong>
          {' at '}
          <strong className="font-semibold text-foreground">{profile.institution}</strong>
          {'. I completed my PhD at the '}
          <strong className="font-semibold text-foreground">{profile.phd.institution}</strong>
          <IsoText>{` in ${profile.phd.group}, where I worked on cosmogenic noble gases and radionuclides in meteorites — cosmic-ray exposure ages, pre-atmospheric shielding, and ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages.`}</IsoText>
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Research topics">
          {researchTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm"
            >
              <IsoText>{topic}</IsoText>
            </li>
          ))}
        </ul>

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
