export const profile = {
  name: 'Mohammad Tauseef',
  role: 'Postdoctoral Researcher in Noble Gas Geochemistry',
  group: "Prof. Tao Wen's group",
  institution: 'Syracuse University',
  phd: {
    institution: 'University of Bern',
    group: "Prof. Ingo Leya's group",
  },
  orcid: '0000-0002-9773-2595',
}

export const links = {
  emailWork: 'mtauseef@syr.edu',
  emailPersonal: 'tauseef.iitk@gmail.com',
  orcid: 'https://orcid.org/0000-0002-9773-2595',
  googleScholar:
    'https://scholar.google.com/citations?view_op=search_authors&mauthors=Mohammad+Tauseef',
  researchGate: 'https://www.researchgate.net/search/researcher?q=Mohammad%20Tauseef',
  bernProfile:
    'https://www.space.unibe.ch/about_us/personen/tauseef_mohammad/index_eng.html',
}

export const researchTopics = [
  'Noble gas geochemistry',
  'Cosmogenic nuclides (He, Ne, ¹⁴C, ¹⁰Be)',
  'Terrestrial ages of meteorites',
  'Cosmic-ray exposure ages',
  'Pre-atmospheric shielding',
]

export type Publication = {
  year: number
  title: string
  authors: string[]
  journal: string
  volume?: string
  pages?: string
  doi?: string
}

export const journalArticles: Publication[] = [
  {
    year: 2026,
    title:
      'Terrestrial ages of meteorites from the Atacama Desert (Chile) and insights into the past meteorite flux to Earth',
    authors: [
      'C. Sadaka',
      'J. Gattacceca',
      'F. Dumas',
      'R. Braucher',
      'I. Leya',
      'M. Tauseef',
      'P.-H. Blard',
      'D. Bekaert',
      'E. Füri',
      'L. Zimmermann',
      'A. Lagain',
      'H. A. R. Devillepoix',
      'M. Gounelle',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '61',
    pages: '644–663',
    doi: '10.1111/maps.70125',
  },
  {
    year: 2026,
    title: 'Al-Khadhaf: The first camera-observed (H5–6) meteorite fall from Oman',
    authors: [
      'A. Zappatini',
      'E. Gnos',
      'B. A. Hofmann',
      'U. Eggenberger',
      'P. M. Kruttasch',
      'F. Gfeller',
      'M. Tauseef',
      'I. Leya',
      'H. A. R. Devillepoix',
      'E. K. Sansom',
      'M. Cupák',
      'S. E. Deam',
      'T. W. C. Stevenson',
      'P. Jenniskens',
      'S. Lindemann',
      'B. Booz',
      'M. S. Al-Muati',
      'A. A. Al-Zakwani',
      'H. A. Al-Ghafri',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '61',
    pages: '522–547',
    doi: '10.1111/maps.70110',
  },
  {
    year: 2025,
    title:
      'Cosmic ray exposure ages and pre-atmospheric shielding of Omani meteorites: Implications for ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of meteorites from hot and cold deserts',
    authors: ['M. Tauseef', 'I. Leya', 'B. Hofmann'],
    journal: 'Meteoritics & Planetary Science',
    volume: '60',
    pages: '2184–2196',
    doi: '10.1111/maps.70029',
  },
  {
    year: 2025,
    title:
      'Evaluating ¹⁴C and ¹⁴C/¹⁰Be terrestrial age dating systems for meteorites using experimental data and model calculations',
    authors: [
      'M. Tauseef',
      'I. Leya',
      'J. Gattacceca',
      'S. Szidat',
      'R. Braucher',
      'P. M. Kruttasch',
      'A. Zappatini',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '60',
    pages: '1263–1283',
    doi: '10.1111/maps.14355',
  },
  {
    year: 2024,
    title:
      '¹⁴C and ¹⁴C-¹⁰Be terrestrial age dating system for meteorites — New data for four recently fallen meteorites',
    authors: [
      'M. Tauseef',
      'I. Leya',
      'J. Gattacceca',
      'B. Hofmann',
      'S. Szidat',
      'R. Braucher',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '59',
    pages: '1219–1235',
    doi: '10.1111/maps.14144',
  },
  {
    year: 2022,
    title:
      'Mineralogical, geochemical, and magnetic susceptibility variations in the loess-paleosol sequence from Pattan, Kashmir Valley, India record an enhanced Indian summer monsoon around 35 ka',
    authors: ['M. Tauseef', 'E. Ray', 'D. Paul', 'J. N. Malik', 'I. Ahmad'],
    journal: 'Quaternary International',
    volume: '616',
    pages: '55–66',
    doi: '10.1016/j.quaint.2021.12.014',
  },
]

export const conferenceContributions: Publication[] = [
  {
    year: 2024,
    title:
      'Constraints on the ¹⁴C Production Rate and ¹⁴C/¹⁰Be Production Rate Ratio in H-, L-, and LL-Chondrites: Model Calculations and Experimental Data',
    authors: ['M. Tauseef', 'et al.'],
    journal: 'LPI Contributions',
  },
  {
    year: 2023,
    title:
      'New Correlations of ¹⁴C Production Rates and ¹⁴C/¹⁰Be Production Rate Ratios as a Function of (²²Ne/²¹Ne)cos for Meteorite Terrestrial Age Dating',
    authors: ['M. Tauseef', 'et al.'],
    journal: 'AGU Fall Meeting Abstracts',
  },
  {
    year: 2023,
    title: 'Studying the Shielding Dependence of ¹⁴C and ¹⁴C/¹⁰Be for Terrestrial Age Dating',
    authors: ['M. Tauseef', 'et al.'],
    journal: '86th Annual Meeting of the Meteoritical Society',
  },
  {
    year: 2022,
    title:
      'Studying ¹⁴C production in meteorites using the Bernese ¹⁴C extraction line and the MICADAS AMS system at LARA, University of Bern',
    authors: ['M. Tauseef', 'et al.'],
    journal: 'Conference poster',
    doi: '10.13140/RG.2.2.28789.45283/1',
  },
]

export type CvEntry = {
  period: string
  title: string
  place: string
  detail?: string
  current?: boolean
}

export const cvPositions: CvEntry[] = [
  {
    period: 'Present',
    title: 'Postdoctoral Researcher — Noble Gas Geochemistry',
    place: 'Syracuse University, USA',
    detail: "Prof. Tao Wen's group",
    current: true,
  },
  {
    period: 'Apr 2025 – Sep 2025',
    title: 'Early Postdoctoral Researcher',
    place: 'Space Research & Planetology, University of Bern, Switzerland',
  },
]

export const cvEducation: CvEntry[] = [
  {
    period: 'Apr 2021 – Mar 2025',
    title: 'PhD',
    place: 'Physics Institute, University of Bern, Switzerland',
    detail: "Prof. Ingo Leya's group",
  },
  {
    period: 'Aug 2018 – Jun 2020',
    title: 'M.Tech, Earth Sciences',
    place: 'Indian Institute of Technology Kanpur, India',
  },
  {
    period: 'Aug 2016 – May 2018',
    title: 'M.Sc., Geology',
    place: 'Aligarh Muslim University, India',
  },
]

export type Instrument = {
  name: string
  use: string
  place: string
  current?: boolean
}

export const instruments: Instrument[] = [
  {
    name: 'Noble gas mass spectrometry',
    use: 'Noble gas geochemistry research',
    place: 'Syracuse University',
    current: true,
  },
  {
    name: 'Noble gas mass spectrometry (He, Ne)',
    use: 'Cosmogenic He and Ne in meteorites — CRE ages and (²²Ne/²¹Ne)cos shielding indicator',
    place: 'University of Bern',
  },
  {
    name: 'Bernese ¹⁴C extraction line',
    use: 'Extraction of cosmogenic ¹⁴C from meteorite samples',
    place: 'University of Bern',
  },
  {
    name: 'MICADAS AMS system (LARA)',
    use: 'Accelerator mass spectrometry of ¹⁴C for terrestrial age dating',
    place: 'LARA, University of Bern',
  },
  {
    name: 'X-ray Diffraction (XRD)',
    use: 'Mineralogical analysis of sediments',
    place: 'IIT Kanpur',
  },
  {
    name: 'X-ray Fluorescence (XRF)',
    use: 'Bulk geochemical analysis',
    place: 'IIT Kanpur',
  },
  {
    name: 'Isotope Ratio Mass Spectrometry (IRMS)',
    use: 'Stable isotope analysis',
    place: 'IIT Kanpur',
  },
  {
    name: 'Magnetic susceptibility',
    use: 'Loess-paleosol sequence characterisation',
    place: 'IIT Kanpur',
  },
]

export type Project = {
  title: string
  period: string
  place: string
  summary: string
  dois: string[]
  current?: boolean
}

export const projects: Project[] = [
  {
    title: 'Noble gas geochemistry',
    period: 'Current',
    place: "Syracuse University — Prof. Tao Wen's group",
    summary: 'Postdoctoral research in noble gas geochemistry.',
    dois: [],
    current: true,
  },
  {
    title: 'Shielding-corrected ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of meteorites',
    period: '2021 – 2025',
    place: "University of Bern — Prof. Ingo Leya's group",
    summary:
      'Developing new correlations of ¹⁴C production rates and ¹⁴C/¹⁰Be production-rate ratios as a function of the shielding indicator (²²Ne/²¹Ne)cos, combining experimental data with model calculations.',
    dois: ['10.1111/maps.14144', '10.1111/maps.14355'],
  },
  {
    title: 'Cosmic-ray exposure ages and pre-atmospheric shielding of Omani meteorites',
    period: '2025',
    place: 'University of Bern & Natural History Museum Bern',
    summary:
      'Cosmogenic He and Ne measurements to derive CRE ages and shielding, with implications for terrestrial ages of meteorites from hot and cold deserts.',
    dois: ['10.1111/maps.70029'],
  },
  {
    title: 'Al-Khadhaf — the first camera-observed meteorite fall from Oman',
    period: '2026',
    place: 'Collaborative study',
    summary: 'Contribution to the characterisation of the Al-Khadhaf (H5–6) meteorite fall.',
    dois: ['10.1111/maps.70110'],
  },
  {
    title: 'Terrestrial ages of Atacama Desert meteorites and past meteorite flux',
    period: '2026',
    place: 'Collaborative study (CEREGE and partners)',
    summary:
      'Contribution to terrestrial age determinations of meteorites from the Atacama Desert, Chile, and insights into the past meteorite flux to Earth.',
    dois: ['10.1111/maps.70125'],
  },
  {
    title: 'Loess-paleosol record of the Indian summer monsoon, Kashmir Valley',
    period: '2018 – 2022',
    place: 'IIT Kanpur',
    summary:
      'Mineralogical, geochemical, and magnetic susceptibility variations in the Pattan loess-paleosol sequence recording an enhanced Indian summer monsoon around 35 ka.',
    dois: ['10.1016/j.quaint.2021.12.014'],
  },
]
