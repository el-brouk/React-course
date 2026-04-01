import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedReview } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';

export const getReviews = createAsyncThunk<
  NormalizedReview[],
  { restaurantId: string },
  { state: RootState; rejectValue: string }
>('reviews/getReviews', async ({ restaurantId }, { rejectWithValue }) => {
  const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

  const result = (await response.json()) as NormalizedReview[];

  if (!result.length) {
    return rejectWithValue('No reviews found');
  }
  return result;
});
