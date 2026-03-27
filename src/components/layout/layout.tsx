import { ScrollProgressBar } from '../base/scroll-progress-bar';
import styles from './layout.module.scss';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button';
import { Header } from '../base/header/header';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div className={styles.root}>
      <ScrollProgressBar />
      <ToggleThemeButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};
