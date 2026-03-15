import styles from './base.module.scss';
import { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const progress = (scrollPosition / (totalHeight - viewportHeight)) * 100;
      setProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className={styles['scroll-progress-bar']} style={{ width: `${progress}%` }}></div>;
};
