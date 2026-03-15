import { restaurants } from '../../constants/mock';
import { RestaurantItem } from '../restaurant/restaurant';
import { useState } from 'react';
import styles from './restaurants-page.module.scss';

export const RestaurantsPage = ({ title }: { title: string }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0]?.id ?? null);
  const activeRestaurant =
    restaurants.find((restaurant) => restaurant.id === activeRestaurantId) ?? restaurants[0];

  return (
    <div className={styles['restaurants-page']}>
      <h1>{title}</h1>
      <ul className={styles['restaurants-page__tabs']}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <button onClick={() => setActiveRestaurantId(restaurant.id)}>{restaurant.name}</button>
          </li>
        ))}
      </ul>
      <RestaurantItem item={activeRestaurant} />
    </div>
  );
};
