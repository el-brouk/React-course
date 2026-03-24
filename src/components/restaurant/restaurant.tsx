import styles from './restaurant.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';
import { NavLink } from 'react-router';

export const RestaurantItem = ({ id }: { id: string }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  if (!restaurant.name) return null;
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
