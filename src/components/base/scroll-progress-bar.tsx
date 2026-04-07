import styles from './base.module.scss';
import { useEffect, useState } from 'react';

function throttle(handler: () => void, waitMs: number) {
  let last = 0;
  let trailingTimer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    const now = Date.now();
    const run = () => {
      last = Date.now();
      handler();
    };

    if (now - last >= waitMs) {
      if (trailingTimer) {
        clearTimeout(trailingTimer);
        trailingTimer = null;
      }
      run();
    } else if (!trailingTimer) {
      trailingTimer = setTimeout(() => {
        trailingTimer = null;
        run();
      }, waitMs - (now - last));
    }
  };
}

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = totalHeight - viewportHeight;
      const nextProgress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    const handleScroll = throttle(updateProgress, 100);

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className={styles['scroll-progress-bar']} style={{ width: `${progress}%` }} />;
};
