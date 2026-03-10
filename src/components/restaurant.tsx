import { type MenuItem, type Restaurant, type Review } from '../constants/mock';
import { Title } from './base/title';

export const RestaurantItem = ({ item }: { item: Restaurant }) => {
  return (
    <div>
      <h2>{item.name}</h2>

      <Title title="Меню" />
      <ul>
        {item.menu.map((dish: MenuItem) => (
          <li key={dish.name}>{dish.name}</li>
        ))}
      </ul>

      <Title title="Отзывы" />
      <ul>
        {item.reviews.map((review: Review) => (
          <li key={review.user}>
            <span>{review.user}</span>
            <span>: {review.text}</span>
            <span> (Оценка: {review.rating})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
