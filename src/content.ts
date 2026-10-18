/* ===========================================================================
 * content.ts — EVERY piece of copy on this site lives here.
 *
 * Anything marked  // TODO  is a placeholder Naylen needs to replace.
 * Nothing else in src/ needs to be touched to update the text.
 * A summary of every outstanding TODO is at the bottom of this file.
 * ======================================================================== */

import type {
  Badge,
  MenuEntry,
  Project,
  Quest,
  Skill,
  SocialLink,
  TrainerInfoRow,
  TrainerStat,
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
  footerNote: 'Original artwork. Inspired by games, affiliated with none.',
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
  // TODO: replace with your own bio. Two or three sentences reads best here.
  bio: [
    'I am a Computer Science and Business student who likes the part of the work where a rough idea turns into something people can actually use.',
    'Right now I am Lead Engineer at TapOnThat, a Canadian NFC tap-card business. I care about clean interfaces, fast pages, and shipping.',
  ],
  infoRows: [
    { label: 'Name', value: 'Naylen Ramlakhan' },
    { label: 'Program', value: 'Computer Science & Business' }, // TODO: add your school and year
    { label: 'Role', value: 'Lead Engineer, TapOnThat' },
    { label: 'Status', value: 'Open to internships & collaborations' }, // TODO: keep or change
  ] satisfies TrainerInfoRow[],
  // TODO: tune these to be honest about where you actually are.
  stats: [
    { label: 'Frontend', value: 88, note: 'React, TypeScript, CSS' },
    { label: 'Backend', value: 74, note: 'APIs, data, auth' },
    { label: 'Product Sense', value: 82, note: 'Scoping and shipping' },
    { label: 'Business', value: 79, note: 'Strategy, ops, pricing' },
  ] satisfies TrainerStat[],
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
        // TODO: add one or two concrete wins — cards shipped, clients onboarded, load time, conversion.
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
      name: 'TypeScript',
      category: 'Language',
      types: ['Typed', 'Web'],
      entry:
        'My default for anything that will live longer than a weekend. Types catch the bugs I would otherwise find in production.',
      level: 5,
    },
    {
      no: 2,
      name: 'React',
      category: 'Framework',
      types: ['UI', 'Web'],
      entry:
        'Component-driven interfaces, hooks, and keeping state boring. Most of what I build ends up here.',
      level: 5,
    },
    {
      no: 3,
      name: 'Next.js',
      category: 'Framework',
      types: ['Fullstack', 'Web'],
      entry:
        'Routing, server rendering and deploys without ceremony. What TapOnThat pages are built on.',
      level: 4,
    },
    {
      no: 4,
      name: 'Python',
      category: 'Language',
      types: ['Scripting', 'Data'],
      entry: 'Scripts, data wrangling and coursework. Fastest path from question to answer.',
      level: 4,
    },
    {
      no: 5,
      name: 'Java',
      category: 'Language',
      types: ['Typed', 'OOP'],
      entry: 'Where I learned data structures and object-oriented design properly.',
      level: 3,
    },
    {
      no: 6,
      name: 'SQL',
      category: 'Data',
      types: ['Query', 'Relational'],
      entry: 'Schema design, joins that do not scan the whole table, and reading a query plan.',
      level: 4,
    },
    {
      no: 7,
      name: 'Node.js',
      category: 'Runtime',
      types: ['Backend', 'Web'],
      entry: 'APIs, server-side glue and tooling. The quiet half of a full-stack build.',
      level: 4,
    },
    {
      no: 8,
      name: 'Git',
      category: 'Tooling',
      types: ['Workflow'],
      entry: 'Branches, clean history, and reviews that catch things before users do.',
      level: 4,
    },
    {
      no: 9,
      name: 'Figma',
      category: 'Design',
      types: ['UI', 'Prototype'],
      entry: 'Where the interface gets argued with before a single component is written.',
      level: 3,
    },
    {
      no: 10,
      name: 'Vercel',
      category: 'Platform',
      types: ['Deploy', 'Cloud'],
      entry: 'Preview deploys on every push, which makes shipping feel cheap enough to do often.',
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
        'Taking a feature from schema to screen: API design, data modelling, auth, and the deploy at the end of it.',
      skills: ['Node.js', 'REST APIs', 'SQL', 'Vercel'],
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
      id: 'business',
      name: 'Ledger Badge',
      area: 'Business & Operations',
      description:
        'The commercial half of my degree, applied: pricing, unit economics, and running a small operation that has to pay for itself.',
      skills: ['Pricing', 'Operations', 'Analytics'],
      icon: 'chart',
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
    // TODO: add a sixth badge, or delete this comment if five is right.
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
        'Co-op placement in the Design and Construction group at Elexicon Energy.', // TODO: expand — what the team does, what you own day to day.
      objectives: [
        // TODO: replace with your real responsibilities, e.g. design drawings, project
        // coordination, site/field work, permitting, stakeholder communication.
        'Add a core responsibility.',
        'Add a core responsibility.',
        'Add a measurable outcome — a project delivered, a process improved, a number.',
      ],
      rewards: ['Project coordination', 'Technical design'], // TODO: real skills from the role
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
        'Keep load times low enough that a tap feels instant.',
        // TODO: add measurable outcomes — clients served, cards shipped, performance numbers.
      ],
      rewards: ['TypeScript', 'Next.js', 'NFC', 'Team leadership'],
    },
    {
      id: 'degree',
      title: 'Computer Science & Business', // TODO: exact program name
      org: 'Your University', // TODO
      period: 'Expected 20XX', // TODO
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
  'trainerCard.bio — your own two or three sentences',
  'trainerCard.infoRows — school, program and year',
  'trainerCard.stats — honest numbers',
  'projects.items[0].details — concrete TapOnThat wins',
  'projects.items[0].stack — confirm the real stack',
  'skills.entries — prune and re-rank to what you actually use',
  'expertise.badges — rename areas to your real ones',
  'experience.mainQuests[0].period — start date',
  'experience.sideQuests — real roles, school, dates',
] as const;
