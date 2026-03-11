import { restaurants, type Restaurant } from '../../constants/mock';
import { RestaurantItem } from '../restaurant/restaurant';
import { useState } from 'react';
import styles from './restaurants-page.module.scss';

const s = styles as Record<string, string>;

export const RestaurantsPage = ({ title }: { title: string }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]?.id ?? null);
  return (
    <div className={s['restaurants-page']}>
      <h1>{title}</h1>
      <ul className={s['restaurants-page__tabs']}>
        {restaurants.map((item: Restaurant) => (
          <li key={item.id}>
            <button onClick={() => setActiveRestaurant(item.id)}>{item.name}</button>
          </li>
        ))}
      </ul>
      <RestaurantItem
        item={restaurants.find((item) => item.id === activeRestaurant) ?? restaurants[0]}
      />
    </div>
  );
};
