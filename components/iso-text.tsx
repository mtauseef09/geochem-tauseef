import { Fragment } from 'react'

const SUPERSCRIPTS: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
}

const SUPERSCRIPT_RUN = /([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/

export function isoString(text: string) {
  return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUPERSCRIPTS[c])
}

export function IsoText({ children }: { children: string }) {
  const parts = children.split(SUPERSCRIPT_RUN)
  return (
    <>
      {parts.map((part, i) =>
        SUPERSCRIPT_RUN.test(part) ? (
          <sup key={i} className="text-[0.7em]">
            {isoString(part)}
          </sup>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
