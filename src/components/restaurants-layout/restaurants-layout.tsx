import { useContext } from 'react';
import { ThemeContext } from '../../components/theme-provider';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { Tabs } from '../../components/base/tabs/tabs';
import { RestaurantTabContainer } from '../restaurant-tab-container/restaurant-tab-container';
import { Outlet } from 'react-router';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';
import { useEffect } from 'react';
import { selectListRequestStatus } from '../../redux/entities/restaurants/slice';

export const RestaurantsLayout = ({ title }: { title: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { value: theme } = useContext(ThemeContext);

  const restaurantIds = useSelector((state: RootState) => selectRestaurantIds(state));
  const requestStatus = useSelector((state: RootState) => selectListRequestStatus(state));

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === 'pending' || requestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (requestStatus === 'rejected' || !restaurantIds.length) {
    return <div>Failed to load restaurants</div>;
  }

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
