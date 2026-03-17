import { type MenuItem, type Restaurant, type Review } from '../../constants/mock';
import { Title } from '../base/title';
import { DishItem } from '../dish-item/dish-item';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.scss';

export const RestaurantItem = ({ item }: { item: Restaurant }) => {
  if (!item.name) return null;
  return (
    <section className={styles.restaurantItem}>
      <h2>{item.name}</h2>

      <Title title="Menu" />
      <ul className={styles.restaurantItemList}>
        {item.menu.map((dish: MenuItem) => (
          <li key={dish.name}>
            <DishItem dish={dish} />
          </li>
        ))}
      </ul>

      <Title title="Reviews" />
      {!!item.reviews.length && (
        <ul className={styles.restaurantItemList}>
          {item.reviews.map((review: Review) => (
            <li key={review.user}>
              <span>{review.user}</span>
              <span>: {review.text}</span>
              <span> (Rating: {review.rating})</span>
            </li>
          ))}
        </ul>
      )}
      <ReviewForm />
    </section>
  );
};
