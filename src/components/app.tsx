import { restaurants, type Restaurant } from '../constants/mock';
import { RestaurantItem } from './restaurant';

export const App = () => {
  return (
    <ol>
      {restaurants.map((item: Restaurant) => (
        <li key={item.name}>
          <RestaurantItem item={item} />
        </li>
      ))}
    </ol>
  );
};
