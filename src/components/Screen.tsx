import { ui } from '../content';
import { ArrowLeftIcon } from './art/Icons';

interface ScreenProps {
  /** Game-menu name, e.g. "Trainer Card". */
  eyebrow: string;
  title: string;
  lede?: string;
  onBack: () => void;
  children: React.ReactNode;
}

export function Screen({ eyebrow, title, lede, onBack, children }: ScreenProps) {
  return (
    <section className="screen" aria-labelledby="screen-title">
      <button type="button" className="back-link" onClick={onBack}>
        <ArrowLeftIcon />
        {ui.backToMenu}
      </button>

      <div className="screen__head">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="screen__title" id="screen-title">
          {title}
        </h1>
        {lede ? <p className="screen__lede">{lede}</p> : null}
      </div>

      {children}
    </section>
  );
}
