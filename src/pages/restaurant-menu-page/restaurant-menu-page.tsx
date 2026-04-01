import { Title } from '../../components/base/title';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import styles from './restaurant-menu-page.module.scss';
import { RestaurantMenuItem } from '../../components/restaurant/restaurant-menu-item.tsx';
import type { RootState } from '../../redux/store.ts';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store.ts';
import { getDishes } from '../../redux/entities/dishes/get-dishes.ts';
import { selectListRequestStatus } from '../../redux/entities/dishes/slice.ts';
import { useEffect } from 'react';

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) return null;

  const dispatch = useDispatch<AppDispatch>();

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : undefined
  );

  const requestStatus = useSelector((state: RootState) => selectListRequestStatus(state));

  useEffect(() => {
    dispatch(getDishes({ restaurantId }));
  }, [dispatch]);

  if (requestStatus === 'pending' || requestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (requestStatus === 'rejected' || !restaurant?.menu?.length) {
    return <div>Failed to load menu</div>;
  }
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
