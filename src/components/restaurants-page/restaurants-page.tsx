import { restaurants } from '../../constants/mock';
import { Tab } from '../base/tab';
import { RestaurantItem } from '../restaurant/restaurant';
import { useState } from 'react';
import { useContext } from 'react';
import styles from './restaurants-page.module.scss';
import { ThemeContext } from '../theme-provider';
import classNames from 'classnames';

export const RestaurantsPage = ({ title }: { title: string }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0]?.id ?? null);
  const activeRestaurant =
    restaurants.find((restaurant) => restaurant.id === activeRestaurantId) ?? restaurants[0];

  const { value: theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.restaurantsPage, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      <h1>{title}</h1>
      <ul className={styles.restaurantsPageTabs}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Tab
              onClick={() => setActiveRestaurantId(restaurant.id)}
              isActive={restaurant.id === activeRestaurantId}
            >
              {restaurant.name}
            </Tab>
          </li>
        ))}
      </ul>
      <RestaurantItem item={activeRestaurant} />
    </div>
  );
};
