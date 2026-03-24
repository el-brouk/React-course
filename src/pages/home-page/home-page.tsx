import { useContext } from 'react';
import { ThemeContext } from '../../components/theme-provider';
import classNames from 'classnames';

export const HomePage = () => {
  const { value: theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames('page', {
        light: theme === 'light',
        dark: theme === 'dark',
      })}
    >
      HomePage
    </div>
  );
};
