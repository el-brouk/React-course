import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import type { RootState } from '../../redux/store.ts';
import styles from './restaurant-menu-item.module.scss';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store.ts';
import { getDishById } from '../../redux/entities/dishes/get-dish-by-id.ts';
import { useEffect } from 'react';

export const RestaurantMenuItem = ({ dishId }: { dishId: string }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDishById({ dishId }));
  }, [dispatch, dishId]);

  if (!dish?.name) {
    return null;
  }
  return (
    <li className={styles.restaurantMenuItem}>
      <NavLink to={`/dishes/${dishId}`}>{dish.name}</NavLink>
    </li>
  );
};
