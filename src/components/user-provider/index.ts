import { createContext, type Dispatch, type SetStateAction } from 'react';

export type User = {
  id: string;
  name: string;
};

export const UserContext = createContext<{
  value: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({
  value: null,
  setUser: () => {},
});
