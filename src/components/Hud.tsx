import { site, ui } from '../content';
import { useTheme } from '../hooks/useTheme';
import { CompassMark, MoonIcon, SunIcon } from './art/Icons';

interface HudProps {
  onHome: () => void;
}

export function Hud({ onHome }: HudProps) {
  const { theme, toggle } = useTheme();
  const nextLabel = theme === 'dark' ? ui.themeToLight : ui.themeToDark;

  return (
    <header className="hud">
      <a
        className="hud__brand"
        href="/"
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          event.preventDefault();
          onHome();
        }}
      >
        <CompassMark className="hud__mark" />
        <span className="hud__name">{site.name}</span>
        <span className="hud__role">{site.role}</span>
      </a>

      <div className="hud__spacer" />

      <button type="button" className="theme-toggle" onClick={toggle} aria-label={nextLabel}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        <span className="theme-toggle__label">{theme === 'dark' ? 'Day' : 'Night'}</span>
      </button>
    </header>
  );
}
