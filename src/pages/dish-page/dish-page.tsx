import { DishItem } from '../../components/dish-item/dish-item';
import { useParams } from 'react-router';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../components/theme-provider';

export const DishPage = () => {
  const { dishId } = useParams();
  const { value: theme } = useContext(ThemeContext);

  if (!dishId) return null;

  return (
    <div
      className={classNames('page', {
        light: theme === 'light',
        dark: theme === 'dark',
      })}
    >
      <DishItem id={dishId} />
    </div>
  );
};
