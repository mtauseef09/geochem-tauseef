import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { CvLetter, PublicationsLetter } from '@/components/letters'
import { PrintButton } from '@/components/print-button'
import { links, profile, siteUrl } from '@/lib/profile-data'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: `Curriculum vitae of ${profile.name}, ${profile.role} at ${profile.institution}.`,
  alternates: { canonical: '/cv' },
}

export default function CvPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-5 py-10 print:max-w-none print:p-0">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
        <a
          href="/#envelopes"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to website
        </a>
        <PrintButton />
      </div>

      <header className="border-b-2 border-primary pb-5">
        <h1 className="font-serif text-4xl font-semibold">
          {profile.name}, {profile.title}
        </h1>
        <p className="mt-1 text-lg text-primary">{profile.role}</p>
        <p className="text-sm text-muted-foreground">
          {profile.department}, {profile.institution} · {profile.location}
        </p>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span>{links.emailWork}</span>
          <span>{links.emailPersonal}</span>
          <span>ORCID {profile.orcid}</span>
          <span>{siteUrl.replace('https://', '')}</span>
        </p>
      </header>

      <section className="mt-6">
        <h2 className="mb-2 font-serif text-xl font-semibold">Profile</h2>
        <p className="text-sm leading-relaxed">{profile.summary}</p>
      </section>

      <div className="mt-10">
        <CvLetter showCta={false} />
      </div>

      <section className="mt-12">
        <h2 className="mb-6 font-serif text-2xl font-semibold">Publications</h2>
        <PublicationsLetter showFooter={false} />
      </section>

      <p className="mt-12 text-xs text-muted-foreground">
        Generated from {siteUrl.replace('https://', '')} · {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
    </main>
  )
}
