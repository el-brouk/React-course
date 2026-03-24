import { DishCounter } from '../dish-counter/dish-counter';
import { useContext } from 'react';
import { UserContext } from '../user-provider/index.ts';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import type { RootState } from '../../redux/store';
import styles from './dish-item.module.scss';

export const DishItem = ({ id }: { id: string }) => {
  const { value: user } = useContext(UserContext);

  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish) return null;
  return (
    <div className={styles.dishItem}>
      <p>{dish.name}</p>
      <p>Price: {dish.price} coins</p>
      <p>Ingredients: {dish.ingredients.join(', ')}</p>
      {user === 'isAuthorized' && <DishCounter id={id} />}
    </div>
  );
};
