export const profile = {
  name: 'Mohammad Tauseef',
  title: 'PhD',
  role: 'Postdoctoral Researcher in Noble Gas Geochemistry',
  group: "Prof. Tao Wen's group",
  department: 'Department of Earth and Environmental Sciences',
  institution: 'Syracuse University',
  location: 'Syracuse, NY, United States',
  phd: {
    institution: 'University of Bern',
    group: "Prof. Ingo Leya's group",
  },
  summary:
    'Planetary geochemist with a strong publication record in noble gas mass spectrometry and cosmogenic radionuclide studies. Experienced in developing and applying analytical methods for cosmic-ray exposure determination, terrestrial age dating, and shielding history reconstruction in ordinary chondrites. My research interests focus on improving chronological tools for understanding meteoroid evolution, planetary surface processes, and impact-related histories.',
  orcid: '0000-0002-9773-2595',
  /** Optional portrait. Drop an image in /public (e.g. /tauseef.jpg) and set its path here. */
  photo: '' as string,
}

/** Public URL of the deployed site (used for SEO, sitemap and social previews). */
export const siteUrl = 'https://geochem-tauseef.vercel.app'

export const links = {
  emailWork: 'mtauseef@syr.edu',
  emailPersonal: 'tauseef.iitk@gmail.com',
  orcid: 'https://orcid.org/0000-0002-9773-2595',
  googleScholar:
    'https://scholar.google.com/citations?view_op=search_authors&mauthors=Mohammad+Tauseef',
  researchGate: 'https://www.researchgate.net/search/researcher?q=Mohammad%20Tauseef',
  bernProfile:
    'https://www.space.unibe.ch/about_us/personen/tauseef_mohammad/index_eng.html',
  phdThesis: 'https://boristheses.unibe.ch/6716/',
  github: 'https://github.com/mtauseef09',
}

/** Short, dated updates shown in the "Latest" strip. Newest first. */
export const news = [
  {
    date: 'Oct 2026',
    text: 'Started as Postdoctoral Researcher in Dr. Tao Wen’s group at Syracuse University, building a noble gas extraction line.',
  },
  {
    date: '2026',
    text: 'Two co-authored papers out in Meteoritics & Planetary Science: Atacama Desert terrestrial ages and the Al-Khadhaf fall from Oman.',
    href: 'https://doi.org/10.1111/maps.70125',
  },
  {
    date: '2025',
    text: 'PhD in Physics (Space Research and Planetology), University of Bern — thesis on ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of stony meteorites.',
    href: 'https://boristheses.unibe.ch/6716/',
  },
  {
    date: '2025',
    text: 'Awarded the O. Richard Norton Travel Grant for the Meteoritical Society Meeting in Perth.',
  },
]

/** Plain-language explainers for the Research section. */
export const researchExplainers = [
  {
    key: 'noble',
    title: 'Noble gases as recorders',
    body: 'Helium, neon and argon barely react with anything, so the atoms trapped in a rock or a groundwater sample stay put. Measuring their isotopes tells us where the gas came from — the atmosphere, Earth’s mantle, radioactive decay, or cosmic rays.',
  },
  {
    key: 'cre',
    title: 'How long a meteorite flew through space',
    body: 'While a meteoroid travels through space, cosmic rays knock atoms apart and create rare isotopes like ²¹Ne. Their amount works like a stopwatch: the cosmic-ray exposure age, often millions of years.',
  },
  {
    key: 'terrestrial',
    title: 'When it fell to Earth',
    body: 'Once a meteorite lands, the atmosphere shields it and radioactive ¹⁴C (half-life ≈ 5,730 years) starts decaying. Comparing ¹⁴C — and the ¹⁴C/¹⁰Be ratio — with what it had in space gives its terrestrial age, telling us how meteorite falls have changed through time.',
  },
  {
    key: 'earth',
    title: 'Now: noble gases on Earth',
    body: 'At Syracuse I’m applying the same tools to Earth and environmental systems — tracing fluids and gases in the subsurface with noble gas isotopes measured in water and rock samples.',
  },
]

export const researchTopics = [
  'Noble gas mass spectrometry (He, Ne, Ar)',
  'Cosmogenic radionuclides (¹⁴C, ¹⁰Be)',
  'Terrestrial ages of meteorites',
  'Cosmic-ray exposure ages',
  'Pre-atmospheric shielding',
  'Gas retention ages',
  'Meteoroid evolution',
]

export type Publication = {
  year: number | string
  title: string
  authors: string[]
  journal: string
  volume?: string
  pages?: string
  doi?: string
  status?: 'Under review' | 'In preparation'
}

export const firstAuthorArticles: Publication[] = [
  {
    year: 2025,
    title:
      'Cosmic ray exposure ages and pre-atmospheric shielding of Omani meteorites: Implications for ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of meteorites from hot and cold deserts',
    authors: ['M. Tauseef', 'I. Leya', 'B. A. Hofmann'],
    journal: 'Meteoritics & Planetary Science',
    volume: '60(9)',
    pages: '2184–2196',
    doi: '10.1111/maps.70029',
  },
  {
    year: 2025,
    title:
      'Evaluating the shielding dependent ¹⁴C saturated activities and ¹⁴C/¹⁰Be saturated ratios in H-, L- and LL-chondrites: A comprehensive study using model predictions, experimental data and ²²Ne/²¹Ne(cos) ratios',
    authors: [
      'M. Tauseef',
      'I. Leya',
      'J. Gattacceca',
      'S. Szidat',
      'R. Braucher',
      'P. Kruttasch',
      'A. Zappatini',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '60(5)',
    pages: '1263–1283',
    doi: '10.1111/maps.14355',
  },
  {
    year: 2024,
    title:
      '¹⁴C and ¹⁴C-¹⁰Be terrestrial age dating system for meteorites: New data for four recently fallen meteorites',
    authors: [
      'M. Tauseef',
      'I. Leya',
      'J. Gattacceca',
      'B. Hofmann',
      'S. Szidat',
      'R. Braucher',
      'ASTER Team',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '59(6)',
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

export const coAuthorArticles: Publication[] = [
  {
    year: 2026,
    title:
      'Terrestrial ages of meteorites from the Atacama Desert (Chile) and insights into the past meteorite flux to the Earth',
    authors: [
      'C. Sadaka',
      'J. Gattacceca',
      'F. Dumas',
      'R. Braucher',
      'I. Leya',
      'M. Tauseef',
      'et al.',
    ],
    journal: 'Meteoritics & Planetary Science',
    volume: '61(4)',
    pages: '644–663',
    doi: '10.1111/maps.70125',
  },
  {
    year: 2026,
    title: 'Al-Khadhaf: The first camera-observed (H5–6) meteorite fall from Oman',
    authors: ['A. Zappatini', 'E. Gnos', 'B. A. Hofmann', '…', 'M. Tauseef', 'et al.'],
    journal: 'Meteoritics & Planetary Science',
    volume: '61(3)',
    pages: '522–547',
    doi: '10.1111/maps.70110',
  },
]

export const journalArticles: Publication[] = [...firstAuthorArticles, ...coAuthorArticles]

export const manuscripts: Publication[] = [
  {
    year: 'Under review',
    status: 'Under review',
    title: 'Unexpected high ¹⁴C concentrations in old meteorites from the Atacama Desert',
    authors: ['M. Tauseef', 'I. Leya', 'J. Gattacceca', 'T. Sava', 'S. Szidat'],
    journal: 'Radiocarbon',
  },
  {
    year: 'Under review',
    status: 'Under review',
    title: 'Thionasilite: a link between silicates and sulfides from the early Solar System',
    authors: ['A. Zappatini', 'G. Cametti', 'G. Edwin', 'B. Hofmann', '…', 'M. Tauseef', 'et al.'],
    journal: 'American Mineralogist',
  },
  {
    year: 'In preparation',
    status: 'In preparation',
    title: 'Cosmic-ray exposure history and gas retention ages of 5 recently fallen ordinary chondrites',
    authors: ['M. Tauseef', 'I. Leya', 'J. Gattacceca'],
    journal: 'Meteoritics & Planetary Science',
  },
  {
    year: 'In preparation',
    status: 'In preparation',
    title: 'Raja: a camera-observed EH3 fall from Oman',
    authors: ['A. Zappatini', 'B. A. Hofmann', '…', 'M. Tauseef', 'et al.'],
    journal: 'Meteoritics & Planetary Science',
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
  highlight?: string
  bullets?: string[]
  current?: boolean
  link?: { href: string; label: string }
}

export const cvPositions: CvEntry[] = [
  {
    period: 'Oct 2026 – Present',
    title: 'Postdoctoral Researcher',
    place: 'Department of Earth and Environmental Sciences, Syracuse University, Syracuse, NY',
    detail: 'Collaborating with Dr. Tao Wen',
    current: true,
    bullets: [
      'Developing and operating a noble gas extraction line for isotopic analysis of noble gases in fluid and solid samples',
      'Conducting noble gas isotope measurements to investigate geochemical processes in Earth and environmental systems',
    ],
  },
  {
    period: 'Apr 2025 – Sep 2025',
    title: 'Early Postdoctoral Researcher',
    place: 'Physics Institute, University of Bern, Switzerland',
    bullets: [
      'High-precision noble gas isotope measurements (He, Ne, Ar) on ordinary chondrite meteorites',
      'Developed and optimised laboratory procedures for cosmogenic radionuclide (¹⁴C) extraction and analysis',
      'Investigated shielding-dependent production rates and exposure histories through combined noble gas and radionuclide datasets',
      'Interpreted gas retention characteristics and fragmentation histories of meteoroids',
      'Co-supervised MSc and BSc students; maintained instrumentation, calibration procedures, and analytical quality control',
    ],
  },
]

export const cvEducation: CvEntry[] = [
  {
    period: '2025',
    title: 'PhD in Physics (Space Research and Planetology)',
    place: 'University of Bern, Switzerland',
    detail:
      'Dissertation: ¹⁴C and ¹⁴C/¹⁰Be terrestrial age dating system for stony meteorites. Supervisor: Prof. Ingo Leya',
    link: { href: 'https://boristheses.unibe.ch/6716/', label: 'Read the thesis (open access)' },
  },
  {
    period: '2020',
    title: 'MSc Tech. in Geological Technology',
    place: 'Indian Institute of Technology (IIT) Kanpur, India',
    detail:
      'Thesis: Geochemistry of a loess-paleosol section from the Kashmir Valley, Himalaya: Implications for Late Pleistocene climate. Supervisor: Prof. Debajyoti Paul',
    highlight: 'Gold Medal for Best MSc Research in Earth Sciences',
  },
  {
    period: '2018',
    title: 'MSc in Applied Geology',
    place: 'Aligarh Muslim University, India',
  },
  {
    period: '2016',
    title: 'BSc (Hons) in Geology',
    place: 'Aligarh Muslim University, India',
  },
]

export const awards = [
  { year: '2025', title: 'O. Richard Norton Travel Grant', detail: 'Meteoritical Society Meeting, Perth' },
  {
    year: '2022',
    title: 'Young Researcher Award — Best Oral Presentation',
    detail: '2nd MetMeSS Conference',
  },
  { year: '2021', title: 'Swiss National Science Foundation Doctorate Fellowship', detail: '' },
  { year: '2020', title: 'Gold Medal for Best MSc Research in Earth Sciences', detail: 'IIT Kanpur' },
  { year: '2018', title: 'Institute Fellowship for MSc Education', detail: 'IIT Kanpur, India' },
]

export const teaching = [
  'Supervised 1 MSc and 1 BSc student in noble gas measurements and data interpretation, University of Bern',
  "Teaching and exam assistant for Bachelor's minor Physics courses, University of Bern",
  'Teaching assistant for instrumentation and geochemistry courses, IIT Kanpur',
  'Mentoring in noble gas extraction and AMS data interpretation, University of Bern',
]

export const conferences = [
  { name: 'Meteoritical Society Meeting', where: 'Perth, Brussels, Los Angeles, Glasgow (2022–2025)' },
  { name: 'AGU Fall Meeting', where: 'San Francisco (2023)' },
  { name: 'MetMeSS', where: 'Ahmedabad, India (2022)' },
  { name: 'Radiocarbon Conference', where: 'Zurich (2021)' },
  { name: 'Research stay, CEREGE', where: 'France — ¹⁰Be chemical extraction and AMS target preparation' },
]

export const outreach = [
  'Volunteer, PlanetS, Swiss Comic Con 2023 & 2024',
  'Public engagement on meteorites, planetary science, and astrobiology',
  'Planetarium sessions and science communication activities',
]

export const skills = [
  {
    area: 'Noble gas mass spectrometry & cosmochemistry',
    items: [
      'He, Ne, Ar isotope measurements in meteorites',
      'Gas extraction line operation & maintenance',
      'Calibration with standards, blank corrections, QC',
    ],
  },
  {
    area: 'Cosmogenic radionuclide analysis',
    items: [
      'Chemical extraction & AMS target preparation (¹⁴C, ¹⁰Be)',
      'Combining radionuclide and noble gas data for exposure & terrestrial ages',
    ],
  },
  {
    area: 'Analytical & laboratory techniques',
    items: ['Clean lab procedures & low-level gas handling', 'ICP-MS, XRF, XRD, IRMS'],
  },
  {
    area: 'Data analysis & programming',
    items: [
      'CRE age calculations & shielding depth reconstruction',
      'Gas retention & diffusive loss interpretation',
      'Python (data reduction & modelling), Origin, Excel',
    ],
  },
]

export const languages = ['English (fluent)', 'Hindi/Urdu (native)', 'German (basic)']

export type Instrument = {
  name: string
  use: string
  place?: string
  current?: boolean
}

export const instruments: Instrument[] = [
  {
    name: 'Noble gas extraction line',
    use: 'Developing and operating a line for isotopic analysis of noble gases in fluid and solid samples',
    place: 'Syracuse University',
    current: true,
  },
  {
    name: 'Noble gas mass spectrometry (He, Ne, Ar)',
    use: 'High-precision isotope measurements on ordinary chondrites — CRE ages, gas retention ages, and the (²²Ne/²¹Ne)cos shielding indicator',
    place: 'University of Bern',
  },
  {
    name: 'Bernese ¹⁴C extraction line',
    use: 'Developing and optimising procedures for extracting cosmogenic ¹⁴C from meteorites',
    place: 'University of Bern',
  },
  {
    name: 'MICADAS AMS system (LARA)',
    use: 'Accelerator mass spectrometry of ¹⁴C for terrestrial age dating',
    place: 'LARA, University of Bern',
  },
  {
    name: '¹⁰Be chemistry & AMS target preparation',
    use: 'Chemical extraction of ¹⁰Be and preparation of AMS targets during a research stay',
    place: 'CEREGE, France',
  },
  {
    name: 'ICP-MS',
    use: 'Trace-element measurements for geochemical characterisation',
  },
  {
    name: 'X-ray Fluorescence (XRF)',
    use: 'Bulk major and trace element geochemistry',
  },
  {
    name: 'X-ray Diffraction (XRD)',
    use: 'Mineralogical characterisation',
  },
  {
    name: 'Isotope Ratio Mass Spectrometry (IRMS)',
    use: 'Stable isotope measurements',
  },
  {
    name: 'Magnetic susceptibility',
    use: 'Characterising the Pattan loess-paleosol sequence, Kashmir Valley',
    place: 'IIT Kanpur',
  },
]

export type Project = {
  title: string
  period: string
  place: string
  summary: string
  dois: string[]
  status?: string
  current?: boolean
}

export const projects: Project[] = [
  {
    title: 'Noble gases in Earth and environmental systems',
    period: 'Oct 2026 – Present',
    place: "Syracuse University — Dr. Tao Wen's group",
    summary:
      'Building and operating a noble gas extraction line and using noble gas isotope measurements in fluid and solid samples to investigate geochemical processes in Earth and environmental systems.',
    dois: [],
    current: true,
  },
  {
    title: 'Shielding-dependent ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of meteorites (PhD)',
    period: '2021 – 2025',
    place: "University of Bern — Prof. Ingo Leya's group (SNSF Doctorate Fellowship)",
    summary:
      'Evaluating shielding-dependent ¹⁴C saturated activities and ¹⁴C/¹⁰Be saturated ratios in H-, L- and LL-chondrites using model predictions, experimental data, and (²²Ne/²¹Ne)cos ratios, with new data for recently fallen meteorites.',
    dois: ['10.1111/maps.14144', '10.1111/maps.14355'],
  },
  {
    title: 'Cosmic-ray exposure ages and pre-atmospheric shielding of Omani meteorites',
    period: '2025',
    place: 'University of Bern & Natural History Museum Bern',
    summary:
      'Cosmogenic noble gas measurements to derive CRE ages and shielding, with implications for ¹⁴C and ¹⁴C/¹⁰Be terrestrial ages of meteorites from hot and cold deserts.',
    dois: ['10.1111/maps.70029'],
  },
  {
    title: 'Exposure history and gas retention ages of recently fallen ordinary chondrites',
    period: 'In preparation',
    place: 'University of Bern & CEREGE',
    summary:
      'Cosmic-ray exposure history and gas retention ages of five recently fallen ordinary chondrites, interpreting gas loss and meteoroid fragmentation histories.',
    dois: [],
    status: 'In preparation',
  },
  {
    title: 'Atacama Desert meteorites: terrestrial ages and unexpected ¹⁴C',
    period: '2026',
    place: 'Collaboration with CEREGE and partners',
    summary:
      'Terrestrial ages of Atacama Desert meteorites and the past meteorite flux to Earth, plus a first-author study on unexpectedly high ¹⁴C concentrations in old Atacama meteorites (under review, Radiocarbon).',
    dois: ['10.1111/maps.70125'],
  },
  {
    title: 'Camera-observed meteorite falls from Oman',
    period: '2026',
    place: 'Collaborative study — University of Bern & Natural History Museum Bern',
    summary:
      'Characterisation of Al-Khadhaf (H5–6), the first camera-observed meteorite fall from Oman, and Raja, a camera-observed EH3 fall (in preparation).',
    dois: ['10.1111/maps.70110'],
  },
  {
    title: 'Thionasilite: linking silicates and sulfides from the early Solar System',
    period: 'Under review',
    place: 'Collaborative study',
    summary: 'Contribution to the description of thionasilite (under review, American Mineralogist).',
    dois: [],
    status: 'Under review',
  },
  {
    title: 'Loess-paleosol record of the Indian summer monsoon, Kashmir Valley (MSc)',
    period: '2018 – 2022',
    place: 'IIT Kanpur — Prof. Debajyoti Paul',
    summary:
      'Mineralogical, geochemical, and magnetic susceptibility variations in the Pattan loess-paleosol sequence recording an enhanced Indian summer monsoon around 35 ka. Awarded the Gold Medal for Best MSc Research in Earth Sciences.',
    dois: ['10.1016/j.quaint.2021.12.014'],
  },
]
