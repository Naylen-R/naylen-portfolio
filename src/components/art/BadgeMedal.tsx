import type { IconKey } from '../../types';
import { Icon } from './Icons';

/* ---------------------------------------------------------------------------
 * BadgeMedal — original medal shapes. Each badge gets its own silhouette so
 * the case reads as a set of distinct badges without a second accent colour.
 * ------------------------------------------------------------------------ */

const shapes = [
  // Hexagon
  'M32 3 57 17.5 57 46.5 32 61 7 46.5 7 17.5Z',
  // Shield
  'M32 3 57 12v21c0 14-12.5 23.5-25 28C19.5 56.5 7 47 7 33V12Z',
  // Droplet
  'M32 3c12 15 25 23 25 35a25 25 0 0 1-50 0C7 26 20 18 32 3Z',
  // Octagon
  'M21 4h22l17 17v22L43 60H21L4 43V21Z',
  // Rounded diamond
  'M32 2 62 32 32 62 2 32Z',
  // Scalloped disc
  'M32 3a29 29 0 1 1 0 58 29 29 0 0 1 0-58Z',
];

interface BadgeMedalProps {
  index: number;
  icon: IconKey;
  className?: string;
}

export function BadgeMedal({ index, icon, className }: BadgeMedalProps) {
  const shape = shapes[index % shapes.length];
  const gradientId = `medal-grad-${index}`;

  return (
    <span className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--kalos-blue)" />
          </linearGradient>
        </defs>
        <path d={shape} fill={`url(#${gradientId})`} />
        <path
          d={shape}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          color: 'var(--accent-contrast)',
        }}
      >
        <Icon name={icon} className="badge-card__glyph" />
      </span>
    </span>
  );
}
