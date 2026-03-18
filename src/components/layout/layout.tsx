import type { ReactNode } from 'react';
import { ScrollProgressBar } from '../base/scroll-progress-bar';
import styles from './layout.module.scss';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button';
import { Header } from '../base/header/header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <ScrollProgressBar />
      <ToggleThemeButton />
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
