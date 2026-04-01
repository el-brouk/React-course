import styles from './restaurant.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';
import { NavLink } from 'react-router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store.ts';
import { getRestaurantById } from '../../redux/entities/restaurants/get-restaurant-by-id.ts';
import { useEffect } from 'react';
import { selectDetailRequestStatus } from '../../redux/entities/restaurants/slice.ts';

export const RestaurantItem = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  const requestStatus = useSelector((state: RootState) => selectDetailRequestStatus(state));
  useEffect(() => {
    dispatch(getRestaurantById({ restaurantId: id }));
  }, [dispatch]);

  if (requestStatus === 'pending' || requestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (requestStatus === 'rejected' || !restaurant.name) {
    return <div>Failed to load restaurant</div>;
  }

  return (
    <section className={styles.restaurantItem}>
      <h2>{restaurant.name}</h2>

      <ul className={styles.restaurantTabs}>
        <li>
          <NavLink className={styles.restaurantTab} to={`/restaurants/${id}/menu`}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.restaurantTab} to={`/restaurants/${id}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
