import { useContext } from 'react';
import { UserContext } from '../user-provider/index.ts';
import styles from './toggle-user-button.module.scss';
import { firstMockUserId } from '../../constants/normalized-mock.js';

export const ToggleUserButton = () => {
  const { value: user, setUser } = useContext(UserContext);

  return (
    <button
      className={styles.toggleUserButton}
      onClick={() =>
        setUser((current) => (current === null ? { id: firstMockUserId, name: 'John Doe' } : null))
      }
    >
      {user === null ? 'Log in' : 'Log out'}
    </button>
  );
};
