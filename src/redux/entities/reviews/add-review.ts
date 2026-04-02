import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedReview } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';

export const addReview = createAsyncThunk<
  NormalizedReview,
  { restaurantId: string; review: Omit<NormalizedReview, 'id'> },
  { state: RootState; rejectValue: string }
>('reviews/addReview', async ({ restaurantId, review }, { rejectWithValue }) => {
  const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = (await response.json()) as NormalizedReview;

  if (!response.ok || !result?.id) {
    return rejectWithValue('No review added');
  }
  return result;
});
