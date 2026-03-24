import { useContext } from 'react';
import { ThemeContext } from '../../components/theme-provider';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { Tabs } from '../../components/base/tabs/tabs';
import { RestaurantTabContainer } from '../restaurant-tab-container/restaurant-tab-container';
import { Outlet } from 'react-router';

export const RestaurantsLayout = ({ title }: { title: string }) => {
  const restaurantIds = useSelector((state: RootState) => selectRestaurantIds(state));

  const { value: theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames('page', {
        light: theme === 'light',
        dark: theme === 'dark',
      })}
    >
      <h1>{title}</h1>
      <Tabs>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </Tabs>
      <Outlet />
    </div>
  );
};
