import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { ExternalIcon, Icon } from '../components/art/Icons';
import { projects, ui } from '../content';
import { useRovingGrid } from '../hooks/useMenuKeys';
import type { Project } from '../types';

function ItemDetail({ item }: { item: Project }) {
  if (item.rarity === 'locked') {
    return (
      <div className="detail">
        <div className="detail__head">
          <span className="detail__crest detail__crest--plain">
            <Icon name={item.icon} />
          </span>
          <div>
            <h2 className="detail__title">{item.name}</h2>
            <p className="rail-item__meta">{item.kind}</p>
          </div>
        </div>
        <div className="locked-note">
          <Icon name="lock" className="menu-card__icon" />
          <p>{item.lockedNote}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detail">
      <div className="detail__head">
        <span className="detail__crest">
          <Icon name={item.icon} />
        </span>
        <div>
          <h2 className="detail__title">
            {item.name}
            <span className="rarity rarity--legendary">{item.rarity}</span>
          </h2>
          {item.tagline ? <p className="detail__tagline">{item.tagline}</p> : null}
          <p className="rail-item__meta">{item.kind}</p>
        </div>
      </div>

      {item.role ? (
        <div className="tag-row" style={{ marginBottom: 'var(--sp-4)' }}>
          <span className="tag tag--gold">Role · {item.role}</span>
        </div>
      ) : null}

      {item.summary ? <p className="detail__summary">{item.summary}</p> : null}

      {item.details?.length ? (
        <div className="detail__section">
          <h3 className="detail__section-title">What it does</h3>
          <ul className="bullets">
            {item.details.map((line, index) => (
              <li key={index}>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.stack?.length ? (
        <div className="detail__section">
          <h3 className="detail__section-title">Built with</h3>
          <div className="tag-row">
            {item.stack.map((tech, index) => (
              <span className="tag" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {item.link ? (
        <div className="detail__section">
          <a className="btn btn--primary" href={item.link.href} target="_blank" rel="noreferrer noopener">
            Visit {item.link.label}
            <ExternalIcon />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export function InventoryScreen({ onBack }: { onBack: () => void }) {
  const items = projects.items;

  // In a listbox, selection follows focus — activeIndex is the selection.
  const { activeIndex, setActiveIndex, onKeyDown, registerItem } = useRovingGrid({
    count: items.length,
    columns: 1,
    onSelect: () => undefined,
  });

  const current = items[activeIndex];

  return (
    <Screen eyebrow="Inventory" title="Projects" onBack={onBack}>
      <DialogueBox>{projects.dialogue}</DialogueBox>

      <div className="split">
        <ul className="list-rail" role="listbox" aria-label="Project items" tabIndex={-1}>
          {items.map((item, index) => (
            <li key={item.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                className={[
                  'item-row',
                  item.rarity === 'legendary' ? 'item-row--legendary' : '',
                  item.rarity === 'locked' ? 'item-row--locked' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                ref={registerItem(index)}
                tabIndex={index === activeIndex ? 0 : -1}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="item-row__icon">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <span className="item-row__name">{item.name}</span>
                  {item.rarity === 'locked' ? (
                    <span className="rarity rarity--locked">{ui.locked}</span>
                  ) : null}
                  <span className="item-row__kind" style={{ display: 'block' }}>
                    {item.kind}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <ItemDetail item={current} />
      </div>
    </Screen>
  );
}
