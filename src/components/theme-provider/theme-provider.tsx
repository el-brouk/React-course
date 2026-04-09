import { useState } from 'react';
import { ThemeContext } from './index';
import React from 'react';

type Theme = 'light' | 'dark';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Children is used so that the ThemeProvider can be used as a wrapper for the app
  // and the whole app would not be rerendered when the theme changes
  return <ThemeContext value={{ value: theme, setTheme }}>{children}</ThemeContext>;
};
