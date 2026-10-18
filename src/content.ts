/* ===========================================================================
 * content.ts — EVERY piece of copy on this site lives here.
 *
 * Anything marked  // TODO  is a placeholder Naylen needs to replace.
 * Nothing else in src/ needs to be touched to update the text.
 * A summary of every outstanding TODO is at the bottom of this file.
 * ======================================================================== */

import type {
  Badge,
  BuildEntry,
  MenuEntry,
  Project,
  Quest,
  Skill,
  SocialLink,
  TrainerInfoRow,
} from './types';

/* --------------------------------------------------------------------------
 * Site identity
 * ----------------------------------------------------------------------- */

export const site = {
  name: 'Naylen Ramlakhan',
  role: 'Computer Science & Business Student',
  email: 'naylen1r@gmail.com',
  location: 'Toronto, Canada',
  tagline: 'Building things on the web, one voyage at a time.',
  menuGreeting: 'Choose a destination.',
} as const;

/* --------------------------------------------------------------------------
 * Social links — shown on the Trainer Card and the Save Point screen.
 * Delete any row you don't want. TODO: replace every href and handle.
 * ----------------------------------------------------------------------- */

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Naylen-R', handle: '@Naylen-R' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naylen-ramlakhan/', handle: '/in/naylen-ramlakhan' },
  { label: 'Email', href: 'mailto:naylen1r@gmail.com', handle: 'naylen1r@gmail.com' },
];

/* --------------------------------------------------------------------------
 * Main menu
 * ----------------------------------------------------------------------- */

export const menu: MenuEntry[] = [
  {
    id: 'about',
    path: '/about',
    label: 'About Me',
    gameLabel: 'Trainer Card',
    blurb: 'Who I am, in ID-card form.',
    icon: 'card',
  },
  {
    id: 'projects',
    path: '/projects',
    label: 'Projects',
    gameLabel: 'Inventory',
    blurb: 'Things I have built and shipped.',
    icon: 'satchel',
  },
  {
    id: 'skills',
    path: '/skills',
    label: 'Skills',
    gameLabel: 'Field Guide',
    blurb: 'Tools and tech, catalogued.',
    icon: 'dex',
  },
  {
    id: 'expertise',
    path: '/expertise',
    label: 'Expertise',
    gameLabel: 'Badge Case',
    blurb: 'Areas I have real depth in.',
    icon: 'badge',
  },
  {
    id: 'experience',
    path: '/experience',
    label: 'Experience',
    gameLabel: 'Quest Log',
    blurb: 'Main quest and side quests.',
    icon: 'scroll',
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    gameLabel: 'Save Point',
    blurb: 'Send a message. Rest here.',
    icon: 'save',
  },
];

/* --------------------------------------------------------------------------
 * About Me — Trainer Card
 * ----------------------------------------------------------------------- */

export const trainerCard = {
  dialogue: 'Trainer data loaded. Here is the card.',
  idNo: '0001',
  photoSrc: '/photo.jpg' as string | null,
  photoAlt: 'Portrait of Naylen Ramlakhan',
  bio: [
    "I'm a Computer Science and Business student at Trent University. I like building things people actually end up using, not just code that runs on my machine.",
    "Right now I'm doing a Design & Construction co-op at Elexicon Energy, where I track capital project progress and build Power BI dashboards. I'm also the Lead Engineer at TapOnThat, a Canadian NFC tap-card company now used by hundreds of vendors across the GTA.",
  ],
  infoRows: [
    { label: 'Name', value: 'Naylen Ramlakhan' },
    { label: 'Program', value: 'Computer Science & Business, Trent University \'27' },
    { label: 'Role', value: 'Design & Construction Co-op, Elexicon Energy' },
    { label: 'Status', value: 'Open to internships & collaborations' }, // TODO: keep or change
  ] satisfies TrainerInfoRow[],
  // Only entries backed by something verifiable go here — repo history, a
  // live link, or a fact Naylen confirmed directly. Marketing copy about a
  // product (e.g. TapOnThat's own description) is not evidence of a specific
  // personal technical contribution, so it does not get a card on its own.
  // TODO: add a TapOnThat entry once you give me a specific technical problem
  // you solved there (not just the role/stack) and a link.
  // TODO: add an Elexicon entry once you give me a specific artifact (e.g. a
  // named dashboard) and what problem it solved, beyond the general job duties.
  builds: [
    {
      id: 'portfolio-site',
      title: 'This portfolio site',
      summary:
        'Designed and built from scratch: a keyboard-navigable, game-menu-styled interface with light/dark theming and an ambient animated backdrop, shipped as a static site with no backend.',
      tools: ['React', 'TypeScript', 'Vite', 'Vercel'],
      problem:
        'Replaced a third-party form API (Formspree) with a client-side mailto: flow, so the contact form works with zero backend dependency.',
      link: { label: 'View source on GitHub', href: 'https://github.com/Naylen-R/naylen-portfolio' },
    },
  ] satisfies BuildEntry[],
};

/* --------------------------------------------------------------------------
 * Projects — Inventory
 * TapOnThat is the headliner. The two locked slots are deliberate.
 * ----------------------------------------------------------------------- */

export const projects = {
  dialogue: 'You open your bag. One item glows.',
  emptyNote: 'Select an item to inspect it.',
  items: [
    {
      id: 'taponthat',
      name: 'TapOnThat',
      rarity: 'legendary',
      kind: 'NFC tap-card business · Canada',
      tagline: 'Tap. Connect. Done.',
      role: 'Lead Engineer',
      summary:
        'A Canadian NFC tap-card business. Tap a card on a phone and a page opens instantly — booking, website, menu, contact — with no app to download on either side.',
      details: [
        'Tap-to-open experience built around a single NFC tap: no app, no install, no friction.',
        'One card can point at whatever the business needs most — bookings, a menu, a website, or direct contact.',
        'Designed for small Canadian businesses that want a physical object doing digital work.',
        'In use by hundreds of vendors across the Greater Toronto Area.',
      ],
      // TODO: confirm this stack matches what TapOnThat actually runs on.
      stack: ['TypeScript', 'React', 'Next.js', 'NFC / NDEF', 'Vercel'],
      link: { label: 'taponthat.com', href: 'https://taponthat.com/' },
      icon: 'chart',
    },
    {
      id: 'locked-1',
      name: '???',
      rarity: 'locked',
      kind: 'Not yet discovered',
      lockedNote: 'Coming soon. Something is being built here.',
      icon: 'lock',
    },
    {
      id: 'locked-2',
      name: '???',
      rarity: 'locked',
      kind: 'Not yet discovered',
      lockedNote: 'Coming soon. Check back after the next voyage.',
      icon: 'lock',
    },
  ] satisfies Project[],
};

/* --------------------------------------------------------------------------
 * Skills — Field Guide (dex-style entries)
 * TODO: this is a starter list. Add, remove and re-rank so it is honest.
 * `level` is 1-5 and draws as filled pips.
 * ----------------------------------------------------------------------- */

export const skills = {
  dialogue: 'Field guide open. Select an entry to read it.',
  entries: [
    {
      no: 1,
      name: 'Excel',
      category: 'Data & Reporting',
      types: ['Tracking', 'Reporting'],
      entry:
        'Tracking progress and spending on capital construction projects at Elexicon Energy — the tool behind every status report.',
      level: 4,
    },
    {
      no: 2,
      name: 'Power BI',
      category: 'Data & Reporting',
      types: ['Dashboards', 'KPIs'],
      entry:
        'Building and maintaining dashboards that track departmental KPIs at Elexicon Energy.',
      level: 4,
    },
    {
      no: 3,
      name: 'TypeScript',
      category: 'Language',
      types: ['Typed', 'Web'],
      entry:
        'My default for anything that will live longer than a weekend. What TapOnThat — and this site — are built in.',
      level: 5,
    },
    {
      no: 4,
      name: 'React',
      category: 'Framework',
      types: ['UI', 'Web'],
      entry:
        'Component-driven interfaces, hooks, and keeping state boring. Most of what I build ends up here.',
      level: 5,
    },
    {
      no: 5,
      name: 'Next.js',
      category: 'Framework',
      types: ['Fullstack', 'Web'],
      entry:
        'Routing, server rendering and deploys without ceremony. What the TapOnThat pages are built on.',
      level: 4,
    },
    {
      no: 6,
      name: 'NFC / NDEF',
      category: 'Hardware',
      types: ['Embedded', 'Mobile'],
      entry:
        'Encoding and reading NFC tags so a single tap reliably opens the right page — the core of how TapOnThat works.',
      level: 4,
    },
  ] satisfies Skill[],
};

/* --------------------------------------------------------------------------
 * Expertise — Badge Case
 * One badge per area of real mastery. TODO: make these yours.
 * ----------------------------------------------------------------------- */

export const expertise = {
  dialogue: 'Badge case open. Each badge is an area I can be trusted with.',
  badges: [
    {
      id: 'frontend',
      name: 'Tide Badge',
      area: 'Frontend Engineering',
      description:
        'Interfaces that stay fast and legible as they grow — component architecture, accessible markup, and CSS that does not fight back.',
      skills: ['React', 'TypeScript', 'CSS architecture', 'Accessibility'],
      icon: 'sail',
    },
    {
      id: 'fullstack',
      name: 'Anchor Badge',
      area: 'Full-Stack Delivery',
      description:
        'Building and maintaining the web platform behind TapOnThat — from the page a tap opens to the deploy that ships it.',
      skills: ['TypeScript', 'Next.js', 'API design', 'Deployment'],
      icon: 'anchor',
    },
    {
      id: 'product',
      name: 'Compass Badge',
      area: 'Product & Strategy',
      description:
        'Deciding what is worth building. Scoping, prioritising, and connecting an engineering decision to a business one.',
      skills: ['Scoping', 'Prioritisation', 'Market research'],
      icon: 'compass',
    },
    {
      id: 'leadership',
      name: 'Lantern Badge',
      area: 'Technical Leadership',
      description:
        'Leading engineering on TapOnThat — setting direction, reviewing work, and keeping a small team unblocked.',
      skills: ['Code review', 'Mentoring', 'Planning'],
      icon: 'lantern',
    },
    {
      id: 'data',
      name: 'Chart Badge',
      area: 'Data & Reporting',
      description:
        'Turning raw numbers into something a room full of people can act on — built on Excel and Power BI at Elexicon Energy.',
      skills: ['Excel', 'Power BI', 'KPI reporting'],
      icon: 'chart',
    },
    {
      id: 'nfc',
      name: 'Tap Badge',
      area: 'NFC & Embedded Systems',
      description:
        'Making a single physical tap reliably open the right page — the hardware side of how TapOnThat actually works.',
      skills: ['NFC / NDEF', 'Embedded hardware', 'TypeScript'],
      icon: 'signal',
    },
  ] satisfies Badge[],
};

/* --------------------------------------------------------------------------
 * Experience — Quest Log
 * TODO: replace the side quests with your real roles, clubs and coursework.
 * ----------------------------------------------------------------------- */

export const experience = {
  dialogue: 'Quest log open. Main quest first.',
  mainQuests: [
    {
      id: 'elexicon-coop',
      title: 'Design & Construction Co-op',
      org: 'Elexicon Energy',
      period: 'Present', // TODO: add a start date, e.g. "2025 — Present"
      status: 'active',
      summary:
        'Co-op placement in the Design and Construction group at Elexicon Energy, supporting capital construction project tracking, KPI reporting, and future planning.',
      objectives: [
        'Track progress and spending on capital construction projects in Excel, reporting status at progress meetings.',
        'Build and maintain Power BI dashboards to track and report departmental KPIs.',
        'Assist in developing the Execution Work Program, the annual capital project plan.',
      ],
      rewards: ['Excel', 'Power BI', 'Project tracking', 'KPI reporting'],
    },
  ] satisfies Quest[],
  sideQuests: [
    {
      id: 'taponthat-role',
      title: 'Lead Engineer',
      org: 'TapOnThat',
      period: 'Present', // TODO: add a start date, e.g. "2024 — Present"
      status: 'active',
      summary:
        'Lead engineering for a Canadian NFC tap-card business. One tap opens a page — booking, website, menu or contact — with nothing to install.',
      objectives: [
        'Own the tap-to-page experience end to end, from NFC encoding to the page that loads.',
        'Build and maintain the web platform behind the cards.',
        'In use by hundreds of vendors across the Greater Toronto Area.',
      ],
      rewards: ['TypeScript', 'Next.js', 'NFC', 'Team leadership'],
    },
    {
      id: 'degree',
      title: 'Computer Science & Business',
      org: 'Trent University',
      period: 'Expected 2027',
      status: 'active',
      summary:
        'A joint degree in software and commerce — algorithms and data structures on one side, strategy and operations on the other.', // TODO
      objectives: [
        'Relevant coursework: data structures, databases, systems.', // TODO
        'Add a standout course, project or award here.', // TODO
      ],
      rewards: ['Algorithms', 'Databases', 'Strategy'], // TODO
    },
  ] satisfies Quest[],
};

/* --------------------------------------------------------------------------
 * Contact — Save Point
 * ----------------------------------------------------------------------- */

export const contact = {
  dialogue: 'Would you like to save your progress?',
  heading: 'Save Point',
  intro:
    'Fill this in and it opens your own email app with everything pre-filled, ready to send. Internships, project work, or just to say hello — all welcome.',
  form: {
    nameLabel: 'Your name',
    namePlaceholder: 'Who is sending this?',
    emailLabel: 'Your email',
    emailPlaceholder: 'where I should reply',
    messageLabel: 'Message',
    messagePlaceholder: 'Say as much or as little as you like.',
    submit: 'Save & Send',
    success: 'Your email app should be opening now. If nothing happened, email me directly below.',
  },
  restNote: 'This opens your own email app. Nothing here touches a server or a third party.',
};

/* --------------------------------------------------------------------------
 * Shared UI strings
 * ----------------------------------------------------------------------- */

export const ui = {
  backToMenu: 'Back to menu',
  menuTitle: 'Main Menu',
  keyboardHint: 'Arrow keys to move · Enter to open · Esc to go back',
  themeToLight: 'Switch to day',
  themeToDark: 'Switch to night',
  locked: 'Locked',
  notFoundTitle: 'Uncharted waters',
  notFoundBody: 'There is no island at these coordinates.',
};

/* ===========================================================================
 * TODO CHECKLIST — everything above that still needs your input.
 * Also reproduced in README.md.
 * ======================================================================== */

export const TODO_CHECKLIST = [
  'trainerCard.builds — add a TapOnThat entry (specific problem + link) and optionally an Elexicon one',
  'projects.items[0].stack — confirm the real stack',
  'skills.entries — sanity-check the proficiency levels (1-5)',
  'experience.mainQuests[0].period — Elexicon start date',
] as const;
