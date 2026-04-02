import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/users/slice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { selectListRequestStatus } from '../../redux/entities/users/slice';
import { useEffect } from 'react';
import { getUsers } from '../../redux/entities/users/get-users';

export const Review = ({ id }: { id: string }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const user = useSelector((state: RootState) => selectUserById(state, review?.userId));
  const dispatch = useDispatch<AppDispatch>();

  const requestStatus = useSelector((state: RootState) => selectListRequestStatus(state));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (requestStatus === 'pending' || requestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (requestStatus === 'rejected') {
    return <div>Failed to load users</div>;
  }

  if (!review) return null;
  return (
    <div>
      <span>{user?.name}</span>
      <span>: {review.text}</span>
      <span> (Rating: {review.rating})</span>
    </div>
  );
};
