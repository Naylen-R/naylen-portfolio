import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { skills } from '../content';
import { useRovingGrid } from '../hooks/useMenuKeys';

function Pips({ level }: { level: number }) {
  return (
    <span className="pips" role="img" aria-label={`Proficiency ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span key={step} className={step <= level ? 'pip pip--on' : 'pip'} />
      ))}
    </span>
  );
}

const pad = (no: number) => String(no).padStart(3, '0');

export function FieldGuideScreen({ onBack }: { onBack: () => void }) {
  const entries = skills.entries;
  const { activeIndex, setActiveIndex, onKeyDown, registerItem } = useRovingGrid({
    count: entries.length,
    columns: 1,
    onSelect: () => undefined,
  });

  const current = entries[activeIndex];

  return (
    <Screen
      eyebrow="Field Guide"
      title="Skills"
      lede="Every tool I reach for, catalogued with an honest note on how far I have taken it."
      onBack={onBack}
    >
      <DialogueBox>{skills.dialogue}</DialogueBox>

      <div className="split">
        <ul className="list-rail" role="listbox" aria-label="Skill entries" tabIndex={-1}>
          {entries.map((entry, index) => (
            <li key={entry.no} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                className="rail-item"
                ref={registerItem(index)}
                tabIndex={index === activeIndex ? 0 : -1}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="rail-item__no">{pad(entry.no)}</span>
                <span>
                  <span className="rail-item__name">{entry.name}</span>
                  <span className="rail-item__meta" style={{ display: 'block' }}>
                    {entry.category}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <article className="detail">
          <div className="detail__head">
            <div>
              <p className="dex-no">No. {pad(current.no)}</p>
              <h2 className="detail__title">{current.name}</h2>
              <p className="rail-item__meta">{current.category}</p>
            </div>
          </div>

          <p className="detail__summary">{current.entry}</p>

          <div className="dex-meta">
            <span className="dex-meta__group">
              Type
              <span className="tag-row">
                {current.types.map((type, index) => (
                  <span className="tag" key={index}>
                    {type}
                  </span>
                ))}
              </span>
            </span>
            <span className="dex-meta__group">
              Proficiency
              <Pips level={current.level} />
            </span>
          </div>
        </article>
      </div>
    </Screen>
  );
}
