import { Title } from '../../components/base/title';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import styles from './restaurant-menu-page.module.scss';
import { RestaurantMenuItem } from '../../components/restaurant/restaurant-menu-item.tsx';
import type { RootState } from '../../redux/store.ts';
import { useParams } from 'react-router';

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : undefined
  );
  if (!restaurant) return null;
  return (
    <div>
      <Title title="Menu" />
      {restaurant.menu.length && (
        <ul className={styles.restaurantItemList}>
          {restaurant.menu.map((dish: string) => (
            <RestaurantMenuItem key={dish} dishId={dish} />
          ))}
        </ul>
      )}
    </div>
  );
};
