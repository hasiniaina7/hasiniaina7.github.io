import { useEffect, useRef, type ReactNode } from 'react';
import { animate, inView, stagger } from 'motion';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocation } from 'react-router-dom';

type PortfolioMotionProps = { children: ReactNode };

const revealGroups = [
  { container: '.architecture-values', children: '.architecture-value' },
  { container: '.capability-grid', children: '.capability-card' },
  { container: '.work-grid', children: '.work-card' },
  { container: '.production-sites', children: '.work-card' },
  { container: '.principles-grid', children: '.principle' },
  { container: '.timeline', children: '.timeline-item' },
  { container: '.card-grid', children: '.surface-card' },
  { container: '.mode-list', children: '.mode-item' },
  { container: '.method-agents', children: '.method-agent-row' },
] as const;

const easeOutQuint = [0.22, 1, 0.36, 1] as const;
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

function MotionContent({ children, pathname }: PortfolioMotionProps & { pathname: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion) return;

    const stops: Array<() => void> = [];

    if (pathname === '/') {
      const heroCopy = root.querySelectorAll('.premium-hero__copy > *');
      const heroVisual = root.querySelector('.premium-hero__visual');
      const heroStack = root.querySelector('.hero-stack');

      if (heroCopy.length) {
        animate(heroCopy, { opacity: [0, 1], y: [18, 0], filter: ['blur(7px)', 'blur(0px)'] }, {
          duration: 0.58,
          delay: stagger(0.055),
          ease: easeOutExpo,
        });
      }
      if (heroVisual) {
        animate(heroVisual, { opacity: [0, 1], scale: [0.965, 1], y: [14, 0], filter: ['blur(5px)', 'blur(0px)'] }, {
          duration: 0.65,
          delay: 0.08,
          ease: easeOutExpo,
        });
      }
      if (heroStack) {
        animate(heroStack, { opacity: [0, 1], x: [16, 0] }, { duration: 0.54, delay: 0.16, ease: easeOutQuint });
      }
    }

    revealGroups.forEach(({ container, children: childSelector }) => {
      root.querySelectorAll(container).forEach((group) => {
        const items = group.querySelectorAll(childSelector);
        if (!items.length) return;
        stops.push(inView(group, () => {
          animate(items, { opacity: [0.01, 1], y: [14, 0] }, {
            duration: 0.42,
            delay: stagger(Math.min(0.045, 0.3 / Math.max(items.length - 1, 1))),
            ease: easeOutQuint,
          });
        }, { amount: 0.12, margin: '0px 0px -6% 0px' }));
      });
    });

    return () => stops.forEach((stop) => stop());
  }, [pathname, reduceMotion]);

  return (
    <motion.div
      ref={rootRef}
      className="route-stage"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
      transition={{ duration: reduceMotion ? 0 : 0.22, ease: easeOutQuint }}
    >
      {children}
    </motion.div>
  );
}

export function PortfolioMotion({ children }: PortfolioMotionProps) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionContent key={location.pathname} pathname={location.pathname}>{children}</MotionContent>
    </AnimatePresence>
  );
}
