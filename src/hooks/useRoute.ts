import { useCallback, useEffect, useState } from 'react';

/**
 * Minimal History API router — six static routes do not justify a dependency.
 * Vercel rewrites every path to index.html (see vercel.json) so deep links work.
 */
export function useRoute() {
  const [path, setPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return { path, navigate };
}
