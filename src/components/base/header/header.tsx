import { ToggleUserButton } from '../../toggle-user-button/toggle-user-button';
import styles from './header.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../user-provider/index.ts';
import { NavLink } from 'react-router';

export const Header = () => {
  const { value: user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </li>
      </ul>
      <div className={styles.headerUser}>
        <p>{user === 'isAuthorized' ? 'Василий' : ''}</p>
        <ToggleUserButton />
      </div>
    </header>
  );
};
