import { ToggleUserButton } from '../../toggle-user-button/toggle-user-button';
import styles from './header.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../user-provider/index.ts';

export const Header = () => {
  const { value: user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      Header
      <div className={styles.headerUser}>
        <p>{user === 'isLoggedIn' ? 'Василий' : ''}</p>
        <ToggleUserButton />
      </div>
    </header>
  );
};
