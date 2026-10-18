import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { ExternalIcon } from '../components/art/Icons';
import { site, socials, trainerCard } from '../content';

function PhotoPlaceholder() {
  return (
    <svg
      className="id-card__photo"
      viewBox="0 0 120 120"
      role="img"
      aria-label="Placeholder portrait illustration"
    >
      <defs>
        <linearGradient id="photo-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--sky-top)" />
          <stop offset="100%" stopColor="var(--sky-bottom)" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill="url(#photo-sky)" />
      <circle cx="88" cy="28" r="12" fill="var(--orb)" opacity="0.8" />
      <path d="M0 86c14 0 14-6 28-6s14 6 28 6 14-6 28-6 14 6 28 6 8-3 8-3v37H0Z" fill="var(--sea-mid)" />
      <path d="M0 98c14 0 14-5 28-5s14 5 28 5 14-5 28-5 14 5 28 5 8-2 8-2v24H0Z" fill="var(--sea-near)" />
      <g>
        <circle cx="60" cy="52" r="16" fill="var(--accent)" />
        <path d="M32 88c3-15 14-23 28-23s25 8 28 23Z" fill="var(--accent)" />
      </g>
    </svg>
  );
}

interface TrainerCardScreenProps {
  onBack: () => void;
}

export function TrainerCardScreen({ onBack }: TrainerCardScreenProps) {
  return (
    <Screen eyebrow="Trainer Card" title="About Me" onBack={onBack}>
      <DialogueBox>{trainerCard.dialogue}</DialogueBox>

      <div className="trainer">
        <article className="id-card">
          <div className="id-card__top">
            <span className="id-card__kicker">Trainer Card</span>
            <span className="id-card__no">ID · {trainerCard.idNo}</span>
          </div>

          <div className="id-card__body">
            {trainerCard.photoSrc ? (
              <img
                className="id-card__photo"
                src={trainerCard.photoSrc}
                alt={trainerCard.photoAlt}
                width={108}
                height={108}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <PhotoPlaceholder />
            )}

            <div>
              <h2 className="id-card__name">{site.name}</h2>
              <p className="id-card__role">{site.role}</p>
              {site.location ? <p className="id-card__role">{site.location}</p> : null}
            </div>
          </div>

          <dl className="id-rows">
            {trainerCard.infoRows.map((row) => (
              <div className="id-row" key={row.label}>
                <dt className="id-row__label">{row.label}</dt>
                <dd className="id-row__value">{row.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <div>
          <div className="bio">
            {trainerCard.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="stats">
            <h3 className="detail__section-title">Stats</h3>
            {trainerCard.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat__head">
                  <span className="stat__label">{stat.label}</span>
                  {stat.note ? <span className="stat__note">{stat.note}</span> : null}
                </div>
                <div
                  className="stat__track"
                  role="meter"
                  aria-valuenow={stat.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${stat.label}: ${stat.value} out of 100`}
                >
                  <div className="stat__fill" style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="social-row">
            {socials.map((link) => (
              <a
                key={link.label}
                className="btn btn--ghost"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
              >
                {link.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}
