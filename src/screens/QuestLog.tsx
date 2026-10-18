import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { experience } from '../content';
import type { Quest } from '../types';

function QuestCard({ quest, main }: { quest: Quest; main: boolean }) {
  const classes = ['quest', main ? 'quest--main' : '', quest.status === 'active' ? 'quest--active' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes}>
      <div className="quest__head">
        <div>
          <h3 className="quest__title">{quest.title}</h3>
          <p className="quest__org">{quest.org}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p className="quest__period">{quest.period}</p>
          <p className={quest.status === 'active' ? 'quest__status quest__status--active' : 'quest__status'}>
            {quest.status === 'active' ? 'In progress' : 'Complete'}
          </p>
        </div>
      </div>

      <p className="quest__summary">{quest.summary}</p>

      {quest.objectives.length ? (
        <div className="quest__objectives">
          <h4 className="detail__section-title">Objectives</h4>
          <ul className="bullets">
            {quest.objectives.map((objective, index) => (
              <li key={index}>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {quest.rewards?.length ? (
        <div className="quest__rewards">
          <span className="quest__rewards-label">Rewards</span>
          {quest.rewards.map((reward, index) => (
            <span className="tag tag--muted" key={index}>
              {reward}
            </span>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export function QuestLogScreen({ onBack }: { onBack: () => void }) {
  return (
    <Screen
      eyebrow="Quest Log"
      title="Experience"
      lede="The main quest is what I spend most of my time on. Side quests are everything else that shaped the work."
      onBack={onBack}
    >
      <DialogueBox>{experience.dialogue}</DialogueBox>

      <section className="quest-group">
        <h2 className="quest-group__title">Main Quest</h2>
        <ul className="quest-list">
          {experience.mainQuests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} main />
          ))}
        </ul>
      </section>

      <section className="quest-group">
        <h2 className="quest-group__title">Side Quests</h2>
        <ul className="quest-list">
          {experience.sideQuests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} main={false} />
          ))}
        </ul>
      </section>
    </Screen>
  );
}
