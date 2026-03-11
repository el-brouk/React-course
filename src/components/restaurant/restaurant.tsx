import { type MenuItem, type Restaurant, type Review } from '../../constants/mock';
import { Title } from '../base/title';
import { DishItem } from '../dish-item/dish-item';

export const RestaurantItem = ({ item }: { item: Restaurant }) => {
  if (!item.name) return null;
  return (
    <section>
      <h2>{item.name}</h2>

      <Title title="Меню" />
      <ul>
        {item.menu?.map((dish: MenuItem) => (
          <li key={dish.name}>
            <DishItem dish={dish} />
          </li>
        ))}
      </ul>

      <Title title="Отзывы" />
      <ul>
        {item.reviews?.map((review: Review) => (
          <li key={review.user}>
            <span>{review.user}</span>
            <span>: {review.text}</span>
            <span> (Оценка: {review.rating})</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
