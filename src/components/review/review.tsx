import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/users/slice';

export const Review = ({ id }: { id: string }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const user = useSelector((state: RootState) => selectUserById(state, review?.userId));

  if (!review) return null;
  return (
    <div>
      <span>{user?.name}</span>
      <span>: {review.text}</span>
      <span> (Rating: {review.rating})</span>
    </div>
  );
};
