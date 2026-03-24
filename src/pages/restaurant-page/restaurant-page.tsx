import { RestaurantItem } from '../../components/restaurant/restaurant';
//import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../components/theme-provider';
import classNames from 'classnames';
import { Outlet, useParams } from 'react-router';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { value: theme } = useContext(ThemeContext);
  if (!restaurantId) return null;
  return (
    <div
      className={classNames('page', {
        light: theme === 'light',
        dark: theme === 'dark',
      })}
    >
      <RestaurantItem id={restaurantId} />
      <Outlet />
    </div>
  );
};
