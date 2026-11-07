'use client'

import { useState } from 'react'
import { Check, Copy, Braces } from 'lucide-react'
import type { Publication } from '@/lib/profile-data'

function bibAuthor(a: string) {
  if (a === 'et al.') return 'others'
  const m = a.match(/^((?:[A-Z]\.\s?)+)\s*(.+)$/)
  return m ? `${m[2]}, ${m[1].trim()}` : `{${a}}`
}

const SUP: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' }

/** Escape for LaTeX and turn ¹⁴C-style superscripts into $^{14}$C. */
function tex(s: string) {
  return s
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => `$^{${[...m].map((c) => SUP[c]).join('')}}$`)
}

function toBibtex(p: Publication) {
  const authors = p.authors.filter((a) => a !== '…')
  const first = authors[0]?.split(' ').pop()?.replace(/[^A-Za-z]/g, '') ?? 'ref'
  const word = p.title.split(/\s+/).find((w) => /^[A-Za-z]{4,}/.test(w)) ?? ''
  const key = `${first}${p.year}${word.replace(/[^A-Za-z]/g, '').toLowerCase()}`
  const [volume, number] = (p.volume ?? '').split(/[()]/)
  const fields: [string, string | undefined][] = [
    ['author', authors.map(bibAuthor).join(' and ')],
    ['title', `{${tex(p.title)}}`],
    ['journal', tex(p.journal)],
    ['year', String(p.year)],
    ['volume', volume || undefined],
    ['number', number || undefined],
    ['pages', p.pages?.replace('–', '--')],
    ['doi', p.doi],
  ]
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n')
  return `@article{${key},\n${body}\n}`
}

function toText(p: Publication) {
  const authors = p.authors.join(', ')
  const vol = p.volume ? `, ${p.volume}` : ''
  const pages = p.pages ? `, ${p.pages}` : ''
  const doi = p.doi ? ` https://doi.org/${p.doi}` : ''
  return `${authors} (${p.year}). ${p.title}. ${p.journal}${vol}${pages}.${doi}`
}

export function CiteButtons({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState<'text' | 'bib' | null>(null)

  async function copy(kind: 'text' | 'bib') {
    try {
      await navigator.clipboard.writeText(kind === 'bib' ? toBibtex(pub) : toText(pub))
      setCopied(kind)
      setTimeout(() => setCopied(null), 1800)
    } catch {}
  }

  const cls =
    'inline-flex items-center gap-1 rounded-full border border-primary/20 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary'

  return (
    <span className="no-print inline-flex flex-wrap gap-1.5" aria-live="polite">
      <button type="button" className={cls} onClick={() => copy('text')}>
        {copied === 'text' ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        {copied === 'text' ? 'Copied' : 'Cite'}
      </button>
      <button type="button" className={cls} onClick={() => copy('bib')}>
        {copied === 'bib' ? <Check className="size-3.5" aria-hidden="true" /> : <Braces className="size-3.5" aria-hidden="true" />}
        {copied === 'bib' ? 'Copied' : 'BibTeX'}
      </button>
    </span>
  )
}
