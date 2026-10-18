export type ScreenId =
  | 'menu'
  | 'about'
  | 'projects'
  | 'skills'
  | 'expertise'
  | 'experience'
  | 'contact';

export type IconKey =
  | 'card'
  | 'satchel'
  | 'dex'
  | 'badge'
  | 'scroll'
  | 'save'
  | 'anchor'
  | 'compass'
  | 'sail'
  | 'chart'
  | 'lock'
  | 'lantern';

export interface MenuEntry {
  id: Exclude<ScreenId, 'menu'>;
  path: string;
  /** Plain-language label, e.g. "About Me". */
  label: string;
  /** Game-menu name, e.g. "Trainer Card". */
  gameLabel: string;
  blurb: string;
  icon: IconKey;
}

export interface TrainerStat {
  label: string;
  /** 0-100, drives the stat bar width. */
  value: number;
  note?: string;
}

export interface TrainerInfoRow {
  label: string;
  value: string;
}

export type ProjectRarity = 'legendary' | 'rare' | 'locked';

export interface Project {
  id: string;
  name: string;
  rarity: ProjectRarity;
  /** Short line under the name in the item list. */
  kind: string;
  tagline?: string;
  role?: string;
  summary?: string;
  details?: string[];
  stack?: string[];
  link?: { label: string; href: string };
  icon: IconKey;
  /** Shown instead of details when rarity is "locked". */
  lockedNote?: string;
}

export interface Skill {
  /** Dex number, zero-padded for display. */
  no: number;
  name: string;
  category: string;
  types: string[];
  entry: string;
  /** 1-5 proficiency, drawn as filled pips. */
  level: number;
}

export interface Badge {
  id: string;
  /** Badge name, e.g. "Build Badge". */
  name: string;
  /** The area of mastery itself. */
  area: string;
  description: string;
  skills: string[];
  icon: IconKey;
}

export interface Quest {
  id: string;
  title: string;
  org: string;
  period: string;
  status: 'active' | 'complete';
  summary: string;
  objectives: string[];
  rewards?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
