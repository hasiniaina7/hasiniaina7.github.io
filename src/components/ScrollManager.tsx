import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const mobileBreakpoint = 760;

function resetNestedScroll() {
  document.querySelectorAll<HTMLElement>('.site-nav, .operation-map__picture').forEach((element) => {
    element.scrollLeft = 0;
  });
}

export function ScrollManager() {
  const location = useLocation();
  const wasMobile = useRef<boolean | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    resetNestedScroll();
  }, [location.pathname]);

  useEffect(() => {
    const syncViewportMode = () => {
      const isMobile = window.innerWidth <= mobileBreakpoint;
      if (wasMobile.current === null) {
        wasMobile.current = isMobile;
        return;
      }

      if (wasMobile.current !== isMobile) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        resetNestedScroll();
        wasMobile.current = isMobile;
      }
    };

    syncViewportMode();
    window.addEventListener('resize', syncViewportMode);
    return () => window.removeEventListener('resize', syncViewportMode);
  }, []);

  return null;
}
