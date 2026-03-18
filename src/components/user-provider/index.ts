import { createContext, type Dispatch, type SetStateAction } from 'react';

type User = 'unknown' | 'isLoggedIn';

export const UserContext = createContext<{
  value: User;
  setUser: Dispatch<SetStateAction<User>>;
}>({
  value: 'unknown',
  setUser: () => {},
});
