import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectDishById } from '../../redux/entities/dishes/slice';
import styles from './cart-item.module.scss';

export const CartItem = ({ id, amount }: { id: string; amount: number }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish) return null;
  return (
    <li className={styles.cartItem}>
      <span>Item: {dish.name}</span>
      <span>Amount: {amount}</span>
      <span>Price: {dish.price} coins</span>
    </li>
  );
};
