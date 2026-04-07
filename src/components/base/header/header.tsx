import { ToggleUserButton } from '../../toggle-user-button/toggle-user-button';
import styles from './header.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../user-provider/index.ts';
import { NavLink } from 'react-router';
import { CartModal } from '../../modal/cart-modal/cart-modal.tsx';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/entities/cart/slice.ts';
import type { RootState } from '../../../redux/store.ts';
import { CartItem } from '../../cart-item/cart-item.tsx';

export const Header = () => {
  const { value: user } = useContext(UserContext);
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </li>
      </ul>
      <CartModal>
        <p className={styles.cartTitle}>Cart</p>
        <ol className={styles.cartList}>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} amount={item.amount} />
          ))}
        </ol>
      </CartModal>
      <div className={styles.headerUser}>
        <p>{user?.name}</p>
        <ToggleUserButton />
      </div>
    </header>
  );
};
