import { useContext } from 'react';
import { UserContext } from '../user-provider/index.ts';
import styles from './toggle-user-button.module.scss';

export const ToggleUserButton = () => {
  const { value: user, setUser } = useContext(UserContext);

  return (
    <button
      className={styles.toggleUserButton}
      onClick={() => setUser((current) => (current === 'unknown' ? 'isAuthorized' : 'unknown'))}
    >
      {user === 'unknown' ? 'Log in' : 'Log out'}
    </button>
  );
};
