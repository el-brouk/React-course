import { useState } from 'react';
import { ThemeContext } from './index';
import React from 'react';

type Theme = 'light' | 'dark';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return <ThemeContext value={{ value: theme, setTheme }}>{children}</ThemeContext>;
};
