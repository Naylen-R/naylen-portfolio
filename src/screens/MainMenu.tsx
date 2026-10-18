import { menu, site, ui } from '../content';
import { useMenuColumns, useRovingGrid } from '../hooks/useMenuKeys';
import { Icon } from '../components/art/Icons';

interface MainMenuProps {
  onNavigate: (path: string) => void;
}

export function MainMenu({ onNavigate }: MainMenuProps) {
  const columns = useMenuColumns();
  const { activeIndex, setActiveIndex, onKeyDown, registerItem } = useRovingGrid({
    count: menu.length,
    columns,
    onSelect: (index) => onNavigate(menu[index].path),
  });

  return (
    <div className="screen">
      <div className="hero">
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__role">{site.role}</p>
        <p className="hero__tagline">{site.tagline}</p>
      </div>

      <nav aria-label={ui.menuTitle}>
        <h2 className="visually-hidden">{ui.menuTitle}</h2>
        <ul className="menu-grid">
          {menu.map((entry, index) => (
            <li key={entry.id}>
              <a
                className="menu-card"
                href={entry.path}
                ref={registerItem(index)}
                tabIndex={index === activeIndex ? 0 : -1}
                data-active={index === activeIndex}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                  event.preventDefault();
                  onNavigate(entry.path);
                }}
              >
                <Icon name={entry.icon} className="menu-card__icon" />
                <span className="menu-card__game-label">{entry.gameLabel}</span>
                <span className="menu-card__label">{entry.label}</span>
                <span className="menu-card__blurb">{entry.blurb}</span>
                <span className="menu-card__cue" aria-hidden="true">
                  Open →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="menu-foot">{ui.keyboardHint}</p>
    </div>
  );
}
