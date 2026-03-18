import { createContext, type Dispatch, type SetStateAction } from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  value: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({
  value: 'light',
  setTheme: () => {},
});
