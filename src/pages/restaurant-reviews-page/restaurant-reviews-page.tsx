import { Title } from '../../components/base/title.tsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import styles from './restaurant-reviews-page.module.scss';
import type { RootState } from '../../redux/store.ts';
import { Review } from '../../components/review/review.tsx';
import { ReviewForm } from '../../components/review-form/review-form.tsx';
import { useContext } from 'react';
import { UserContext } from '../../components/user-provider/index';
import { useParams } from 'react-router';

export const RestaurantReviewsPage = () => {
  const { value: user } = useContext(UserContext);
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : undefined
  );
  if (!restaurant) return null;
  return (
    <div>
      <Title title="Reviews" />
      {!!restaurant.reviews.length && (
        <ul className={styles.restaurantItemList}>
          {restaurant.reviews.map((review: string) => (
            <li key={review}>
              <Review id={review} />
            </li>
          ))}
        </ul>
      )}
      {user === 'isAuthorized' && <ReviewForm />}
    </div>
  );
};
