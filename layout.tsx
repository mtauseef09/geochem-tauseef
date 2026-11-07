import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { journalArticles, links, profile, researchTopics, siteUrl } from '@/lib/profile-data'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

const description =
  'Mohammad Tauseef, PhD — Postdoctoral Researcher in Noble Gas Geochemistry at Syracuse University (Dr. Tao Wen group). PhD, University of Bern (Prof. Ingo Leya group): ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages, cosmic-ray exposure ages and noble gases in meteorites.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mohammad Tauseef — Noble Gas Geochemistry',
    template: '%s — Mohammad Tauseef',
  },
  description,
  applicationName: 'Mohammad Tauseef',
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    'Mohammad Tauseef',
    'noble gas geochemistry',
    'meteorites',
    'cosmic-ray exposure ages',
    'terrestrial ages',
    'radiocarbon',
    '14C',
    '10Be',
    'Syracuse University',
    'University of Bern',
    'cosmochemistry',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: 'Mohammad Tauseef',
    title: 'Mohammad Tauseef — Noble Gas Geochemistry',
    description,
    firstName: 'Mohammad',
    lastName: 'Tauseef',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Tauseef — Noble Gas Geochemistry',
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2f6b47' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1f17' },
  ],
}

// Runs before paint so the saved / system theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light'}catch(e){}})();`

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  honorificSuffix: profile.title,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${links.emailWork}`,
  ...(profile.photo ? { image: new URL(profile.photo, siteUrl).toString() } : {}),
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: profile.institution,
    department: { '@type': 'Organization', name: profile.department },
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Bern' },
    { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology Kanpur' },
    { '@type': 'CollegeOrUniversity', name: 'Aligarh Muslim University' },
  ],
  knowsAbout: researchTopics,
  identifier: { '@type': 'PropertyValue', propertyID: 'ORCID', value: profile.orcid },
  sameAs: [links.orcid, links.bernProfile, links.phdThesis],
  subjectOf: journalArticles
    .filter((p) => p.doi)
    .map((p) => ({
      '@type': 'ScholarlyArticle',
      headline: p.title,
      datePublished: String(p.year),
      isPartOf: p.journal,
      url: `https://doi.org/${p.doi}`,
    })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
