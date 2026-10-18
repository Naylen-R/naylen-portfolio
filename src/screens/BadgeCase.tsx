import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { BadgeMedal } from '../components/art/BadgeMedal';
import { expertise } from '../content';

export function BadgeCaseScreen({ onBack }: { onBack: () => void }) {
  return (
    <Screen
      eyebrow="Badge Case"
      title="Expertise"
      lede="One badge per area I have real depth in — earned on actual work, not coursework alone."
      onBack={onBack}
    >
      <DialogueBox>{expertise.dialogue}</DialogueBox>

      <ul className="badge-grid">
        {expertise.badges.map((badge, index) => (
          <li className="badge-card" key={badge.id}>
            <BadgeMedal index={index} icon={badge.icon} className="badge-card__medal" />
            <p className="badge-card__name">{badge.name}</p>
            <h2 className="badge-card__area">{badge.area}</h2>
            <p className="badge-card__desc">{badge.description}</p>
            <div className="tag-row">
              {badge.skills.map((skill, index) => (
                <span className="tag tag--muted" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Screen>
  );
}
