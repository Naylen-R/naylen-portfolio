import type { IconKey } from '../../types';

/* ---------------------------------------------------------------------------
 * Original line icons. All drawn by hand on a 24x24 grid, stroked with
 * currentColor so they inherit whatever the surrounding text colour is.
 * ------------------------------------------------------------------------ */

const paths: Record<IconKey, React.ReactNode> = {
  card: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <rect x="5.5" y="8" width="6" height="7.5" rx="1.5" />
      <path d="M14.5 9h4.5M14.5 12h4.5M14.5 15h3" />
    </>
  ),
  satchel: (
    <>
      <path d="M4.5 9h15l-1 10a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8Z" />
      <path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" />
      <path d="M4.9 13.2h14.2" />
    </>
  ),
  dex: (
    <>
      <path d="M12 6.6C12 5.1 10.3 4 8 4H3.5v12.8H8c2.3 0 4 1.1 4 2.6" />
      <path d="M12 6.6C12 5.1 13.7 4 16 4h4.5v12.8H16c-2.3 0-4 1.1-4 2.6" />
      <circle cx="7.2" cy="8.6" r="1.5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9.3" r="5.6" />
      <path d="M8.4 14.1 6.9 21l5.1-2.5L17.1 21l-1.5-6.9" />
    </>
  ),
  scroll: (
    <>
      <path d="M7.5 3.5H17A1.5 1.5 0 0 1 18.5 5v13.5A2 2 0 0 0 20.5 20.5H7.5A2.5 2.5 0 0 1 5 18V6a2.5 2.5 0 0 1 2.5-2.5Z" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
    </>
  ),
  save: (
    <>
      <path d="M12 2.8 16.6 8.4 12 14 7.4 8.4Z" />
      <path d="M6.8 16.4h10.4l1.8 4.8H5Z" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="4.8" r="2.1" />
      <path d="M12 6.9V20.8" />
      <path d="M8.2 9.8h7.6" />
      <path d="M4.3 14.2c0 3.9 3.4 6.6 7.7 6.6s7.7-2.7 7.7-6.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M15.4 8.6 13.5 13.5 8.6 15.4 10.5 10.5Z" />
    </>
  ),
  sail: (
    <>
      <path d="M12 3.2V15" />
      <path d="M13.6 5.4 19.2 15H13.6Z" />
      <path d="M10.4 15 5.4 10.6V15" />
      <path d="M3.4 17.4h17.2l-2.4 3.8H5.8Z" />
    </>
  ),
  chart: (
    <>
      <rect x="2.8" y="4.4" width="18.4" height="15.2" rx="2.2" />
      <path d="M6.4 16.2c2.6-1 3.4-4.6 6-5.7 1.5-.6 2.6-1.8 3.2-2.8" strokeDasharray="2.6 2.4" />
      <path d="M15.2 6.6 17.8 9.2M17.8 6.6 15.2 9.2" />
      <circle cx="6.4" cy="16.2" r=".9" />
    </>
  ),
  lock: (
    <>
      <rect x="4.6" y="10" width="14.8" height="10.6" rx="2.6" />
      <path d="M8.1 10V7.6a3.9 3.9 0 0 1 7.8 0V10" />
      <circle cx="12" cy="15.3" r="1.4" />
    </>
  ),
  lantern: (
    <>
      <path d="M8.6 3.4h6.8" />
      <path d="M12 3.4v2.2" />
      <path d="M7.4 5.6h9.2v10.6a2.2 2.2 0 0 1-2.2 2.2H9.6a2.2 2.2 0 0 1-2.2-2.2Z" />
      <circle cx="12" cy="11.2" r="2.6" />
      <path d="M9.6 20.6h4.8" />
    </>
  ),
};

interface IconProps {
  name: IconKey;
  /** Omit for decorative icons — they are hidden from assistive tech. */
  title?: string;
  className?: string;
}

export function Icon({ name, title, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

/** Brand mark: a compass rose. Used in the HUD. */
export function CompassMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="15" fill="var(--accent)" />
      <path d="M16 5 18.7 13.3 27 16 18.7 18.7 16 27 13.3 18.7 5 16 13.3 13.3Z" fill="var(--accent-contrast)" />
      <circle cx="16" cy="16" r="2.4" fill="var(--accent)" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M8 5h11v11M19 5 6 18" />
    </svg>
  );
}
