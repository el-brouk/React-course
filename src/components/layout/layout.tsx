import type { ReactNode } from 'react';
import { ScrollProgressBar } from '../base/scroll-progress-bar';
import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <ScrollProgressBar />
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
