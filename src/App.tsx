import { useCallback, useEffect } from 'react';
import { Hud } from './components/Hud';
import { Ocean } from './components/Ocean';
import { menu, site, ui } from './content';
import { useRoute } from './hooks/useRoute';
import { BadgeCaseScreen } from './screens/BadgeCase';
import { FieldGuideScreen } from './screens/FieldGuide';
import { InventoryScreen } from './screens/Inventory';
import { MainMenu } from './screens/MainMenu';
import { QuestLogScreen } from './screens/QuestLog';
import { SavePointScreen } from './screens/SavePoint';
import { TrainerCardScreen } from './screens/TrainerCard';

/** Esc should go back, but not while someone is typing in the contact form. */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable;
}

export default function App() {
  const { path, navigate } = useRoute();
  const goHome = useCallback(() => navigate('/'), [navigate]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (isTypingTarget(event.target)) {
        (event.target as HTMLElement).blur();
        return;
      }
      if (window.location.pathname !== '/') goHome();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goHome]);

  useEffect(() => {
    const entry = menu.find((item) => item.path === path);
    document.title = entry ? `${entry.label} — ${site.name}` : `${site.name} — Portfolio`;
  }, [path]);

  return (
    <>
      <Ocean />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="app">
        <Hud onHome={goHome} />
        <main className="page" id="main" tabIndex={-1}>
          {renderScreen(path, navigate, goHome)}
        </main>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.footerNote}
          </p>
        </footer>
      </div>
    </>
  );
}

function renderScreen(path: string, navigate: (to: string) => void, goHome: () => void) {
  switch (path) {
    case '/':
      return <MainMenu onNavigate={navigate} />;
    case '/about':
      return <TrainerCardScreen onBack={goHome} />;
    case '/projects':
      return <InventoryScreen onBack={goHome} />;
    case '/skills':
      return <FieldGuideScreen onBack={goHome} />;
    case '/expertise':
      return <BadgeCaseScreen onBack={goHome} />;
    case '/experience':
      return <QuestLogScreen onBack={goHome} />;
    case '/contact':
      return <SavePointScreen onBack={goHome} />;
    default:
      return (
        <div className="screen notfound">
          <p className="eyebrow">404</p>
          <h1 className="screen__title">{ui.notFoundTitle}</h1>
          <p className="screen__lede">{ui.notFoundBody}</p>
          <button type="button" className="btn btn--primary" onClick={goHome}>
            {ui.backToMenu}
          </button>
        </div>
      );
  }
}
