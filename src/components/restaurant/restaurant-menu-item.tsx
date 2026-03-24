import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import type { RootState } from '../../redux/store.ts';
import styles from './restaurant-menu-item.module.scss';
export const RestaurantMenuItem = ({ dishId }: { dishId: string }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));

  return (
    <li className={styles.restaurantMenuItem}>
      <NavLink to={`/dishes/${dishId}`}>{dish?.name ?? dishId}</NavLink>
    </li>
  );
};
