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
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store.ts';
import { getReviews } from '../../redux/entities/reviews/get-reviews.ts';
import { useEffect } from 'react';
import { selectListRequestStatus } from '../../redux/entities/reviews/slice.ts';

export const RestaurantReviewsPage = () => {
  const { value: user } = useContext(UserContext);
  const { restaurantId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const listRequestStatus = useSelector((state: RootState) => selectListRequestStatus(state));

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : undefined
  );

  useEffect(() => {
    if (!restaurantId) return;
    dispatch(getReviews({ restaurantId }));
  }, [dispatch, restaurantId]);

  if (!restaurantId) return null;

  if (listRequestStatus === 'pending' || listRequestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (listRequestStatus === 'rejected') {
    return <div>Failed to load reviews</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <Title title="Reviews" />
      {restaurant.reviews.length > 0 && (
        <ul className={styles.restaurantItemList}>
          {restaurant.reviews.map((review: string) => (
            <li key={review}>
              <Review id={review} />
            </li>
          ))}
        </ul>
      )}
      {user === 'isAuthorized' && <ReviewForm restaurantId={restaurantId} />}
    </div>
  );
};
