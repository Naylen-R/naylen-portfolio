/* ---------------------------------------------------------------------------
 * Ocean — the ambient scene behind every screen.
 *
 * Purely decorative and inert: fixed, pointer-events: none, aria-hidden.
 * Everything that moves is a transform or opacity animation on a handful of
 * elements, so it stays on the compositor. prefers-reduced-motion freezes it
 * into a still illustration (see global.css).
 * ------------------------------------------------------------------------ */

/** One tiling wave path. The phase repeats every 720 units so a -50% scroll
 *  across the 1440-wide viewBox loops seamlessly. */
function wavePath(amplitude: number, baseline: number): string {
  const segments = Array.from({ length: 11 }, () => 't120 0').join(' ');
  return `M0 ${baseline} q60 ${-amplitude} 120 0 ${segments} L1440 160 L0 160 Z`;
}

const STARS = [
  [60, 26, 1.4], [148, 62, 1], [232, 18, 1.2], [318, 48, 0.9], [402, 30, 1.5],
  [498, 70, 1], [566, 22, 1.1], [658, 54, 1.3], [742, 34, 0.9], [826, 66, 1.2],
  [910, 20, 1.4], [988, 50, 1], [1074, 28, 1.2], [1162, 64, 0.9], [1248, 38, 1.3],
  [1336, 24, 1.1], [1402, 58, 1],
] as const;

const CLOUDS = [
  [80, 34, 1], [300, 20, 0.7], [520, 44, 0.85],
] as const;

export function Ocean() {
  return (
    <div className="scene" aria-hidden="true">
      {/* --- Sky: stars, orb, drifting clouds --- */}
      <div className="scene__sky">
        <svg
          className="scene__stars"
          viewBox="0 0 1440 90"
          preserveAspectRatio="xMidYMin slice"
          width="100%"
          height="100%"
        >
          {STARS.map(([x, y, r], i) => (
            <circle
              key={i}
              className="star"
              cx={x}
              cy={y}
              r={r}
              fill="var(--orb)"
              style={{ animationDelay: `${(i % 7) * 0.6}s` }}
            />
          ))}
        </svg>

        <svg className="scene__orb" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="var(--orb-glow)" opacity="0.28" />
          <circle cx="50" cy="50" r="30" fill="var(--orb-glow)" opacity="0.4" />
          <circle cx="50" cy="50" r="21" fill="var(--orb)" />
          <g className="orb__craters">
            <circle cx="43" cy="44" r="4.2" fill="var(--orb-glow)" opacity="0.55" />
            <circle cx="56" cy="55" r="2.8" fill="var(--orb-glow)" opacity="0.45" />
            <circle cx="52" cy="40" r="2" fill="var(--orb-glow)" opacity="0.4" />
          </g>
        </svg>

        <div className="scene__clouds">
          <svg className="cloud-band cloud-band--a" viewBox="0 0 1440 90" preserveAspectRatio="none">
            {[0, 720].map((offset) =>
              CLOUDS.map(([x, y, s], i) => (
                <g key={`${offset}-${i}`} transform={`translate(${x + offset} ${y}) scale(${s})`}>
                  <path
                    d="M0 22c0-8 7-14 15-13 2-8 10-13 18-11 6-5 15-4 20 2 9-1 16 6 16 15 0 4-2 7-4 9H4c-2-1-4-2-4-2Z"
                    fill="var(--cloud)"
                    opacity="0.9"
                  />
                </g>
              )),
            )}
          </svg>
          <svg className="cloud-band cloud-band--b" viewBox="0 0 1440 90" preserveAspectRatio="none">
            {[180, 900].map((x, i) => (
              <g key={i} transform={`translate(${x} 30) scale(1.4)`}>
                <path
                  d="M0 20c0-7 6-12 13-11 2-7 9-11 16-9 5-5 13-4 17 2 8-1 14 5 14 13 0 3-1 5-3 7H3c-2-1-3-2-3-2Z"
                  fill="var(--cloud)"
                  opacity="0.75"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* --- Sea: three parallax wave bands and an idle boat --- */}
      <div className="scene__sea">
        <svg className="wave-band wave-band--far" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d={wavePath(26, 70)} fill="var(--sea-far)" opacity="0.65" />
        </svg>
        <svg className="wave-band wave-band--mid" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d={wavePath(20, 74)} fill="var(--sea-mid)" opacity="0.8" />
        </svg>
        <svg className="wave-band wave-band--near" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d={wavePath(14, 78)} fill="var(--sea-near)" />
        </svg>

        <svg className="scene__boat" viewBox="0 0 64 64">
          {/* mast + sail */}
          <path d="M32 10v28" stroke="var(--hull)" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M34 13c9 6 13 12 14 20H34Z" fill="var(--sail)" />
          <path d="M30 18c-6 4-9 9-10 15h10Z" fill="var(--sail)" opacity="0.82" />
          {/* pennant */}
          <path d="M32 9h9l-3 3 3 3h-9Z" fill="var(--kalos-red)" />
          {/* hull */}
          <path d="M12 40h40l-6 10a4 4 0 0 1-3.4 2H21.4A4 4 0 0 1 18 50Z" fill="var(--hull)" />
          <path d="M12 40h40l-1.6 2.8H13.6Z" fill="var(--sail)" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
