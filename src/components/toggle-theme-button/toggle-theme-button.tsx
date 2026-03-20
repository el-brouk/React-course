import { useContext } from 'react';
import { ThemeContext } from '../theme-provider/index.ts';

export const ToggleThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
    >
      Toggle Theme
    </button>
  );
};
