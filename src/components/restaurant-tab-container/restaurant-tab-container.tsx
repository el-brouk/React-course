import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { NavLink } from 'react-router';
import styles from './restaurant-tab-container.module.scss';
import classNames from 'classnames';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';

export const RestaurantTabContainer = ({ id }: { id: string }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles['restaurant-tab'], isActive ? styles.active : styles.inactive)
      }
      to={`/restaurants/${id}`}
    >
      {restaurant.name}
    </NavLink>
  );
};
