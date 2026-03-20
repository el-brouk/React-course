import { createContext, type Dispatch, type SetStateAction } from 'react';

type User = 'unknown' | 'isAuthorized';

export const UserContext = createContext<{
  value: User;
  setUser: Dispatch<SetStateAction<User>>;
}>({
  value: 'unknown',
  setUser: () => {},
});
