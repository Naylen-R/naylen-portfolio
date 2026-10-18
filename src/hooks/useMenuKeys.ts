import { useCallback, useEffect, useRef, useState } from 'react';

interface RovingOptions {
  count: number;
  /** Items per row at the current breakpoint — drives ArrowUp/ArrowDown. */
  columns: number;
  onSelect: (index: number) => void;
}

/**
 * Roving-tabindex grid navigation: arrows move, Enter/Space opens.
 * Only one item is tabbable at a time, so Tab still skips past the whole menu.
 */
export function useRovingGrid({ count, columns, onSelect }: RovingOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);
  const shouldFocusRef = useRef(false);

  useEffect(() => {
    if (!shouldFocusRef.current) return;
    shouldFocusRef.current = false;
    itemsRef.current[activeIndex]?.focus();
  }, [activeIndex]);

  const move = useCallback(
    (next: number) => {
      const clamped = (next + count) % count;
      shouldFocusRef.current = true;
      setActiveIndex(clamped);
    },
    [count],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          move(index + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          move(index - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          move(index + columns < count ? index + columns : index % columns);
          break;
        case 'ArrowUp':
          event.preventDefault();
          move(index - columns >= 0 ? index - columns : lastInColumn(index % columns, columns, count));
          break;
        case 'Home':
          event.preventDefault();
          move(0);
          break;
        case 'End':
          event.preventDefault();
          move(count - 1);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          onSelect(index);
          break;
        default:
          break;
      }
    },
    [columns, count, move, onSelect],
  );

  const registerItem = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      itemsRef.current[index] = element;
    },
    [],
  );

  return { activeIndex, setActiveIndex, onKeyDown, registerItem };
}

/** Number of menu columns at the current viewport, matching menu-grid in CSS. */
export function useMenuColumns(): number {
  const [columns, setColumns] = useState(() => columnsForWidth(window.innerWidth));

  useEffect(() => {
    const onResize = () => setColumns(columnsForWidth(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return columns;
}

/** Bottom-most index sharing a column, so ArrowUp wraps the way ArrowDown does. */
function lastInColumn(column: number, columns: number, count: number): number {
  let index = column;
  while (index + columns < count) index += columns;
  return index;
}

function columnsForWidth(width: number): number {
  if (width <= 560) return 1;
  if (width <= 900) return 2;
  return 3;
}
