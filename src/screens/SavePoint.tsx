import { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox';
import { Screen } from '../components/Screen';
import { Icon } from '../components/art/Icons';
import { contact, site, socials } from '../content';

type Status = 'idle' | 'opened';

/** Builds a mailto: link so the message is sent from the visitor's own email
 *  app. No server, no third-party API — the message never leaves the browser
 *  until the visitor's mail client sends it. */
function buildMailto(name: string, email: string, message: string): string {
  const subject = `Portfolio message from ${name}`;
  const body = `${message}\n\n—\nFrom: ${name}\nReply to: ${email}`;
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export function SavePointScreen({ onBack }: { onBack: () => void }) {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    window.location.href = buildMailto(name, email, message);
    setStatus('opened');
  }

  return (
    <Screen eyebrow="Save Point" title={contact.heading} lede={contact.intro} onBack={onBack}>
      <DialogueBox>{contact.dialogue}</DialogueBox>

      <div className="save-layout">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="name">
              {contact.form.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder={contact.form.namePlaceholder}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="email">
              {contact.form.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={contact.form.emailPlaceholder}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="message">
              {contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={contact.form.messagePlaceholder}
            />
          </div>

          <div aria-live="polite">
            {status === 'opened' ? (
              <p className="form__status form__status--ok">{contact.form.success}</p>
            ) : null}
          </div>

          <div>
            <button type="submit" className="btn btn--primary">
              <Icon name="save" />
              {contact.form.submit}
            </button>
          </div>
        </form>

        <aside className="save-aside">
          <h2 className="save-aside__title">
            <Icon name="save" />
            Other ways to reach me
          </h2>

          <div className="save-links">
            {socials.map((link) => (
              <a
                key={link.label}
                className="save-link"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
              >
                <span>{link.label}</span>
                <span className="save-link__handle">{link.handle}</span>
              </a>
            ))}
            <a className="save-link" href={`mailto:${site.email}`}>
              <span>Direct email</span>
              <span className="save-link__handle">{site.email}</span>
            </a>
          </div>

          <p className="save-aside__note">{contact.restNote}</p>
        </aside>
      </div>
    </Screen>
  );
}
