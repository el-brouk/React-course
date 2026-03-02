import { restaurants, type MenuItem, type Restaurant, type Review } from '../constants/mock';
import { TitleH3 } from './base/titleH3';

export const App = () => {
  return (
    <ol>
      {restaurants.map((item: Restaurant) => (
        <li key={item.name}>
          <h2>{item.name}</h2>

          <TitleH3 title="Меню" />
          <ul>
            {item.menu.map((item: MenuItem) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>

          <TitleH3 title="Отзывы" />
          <ul>
            {item.reviews.map((item: Review) => (
              <li key={item.user}>{item.user}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};
