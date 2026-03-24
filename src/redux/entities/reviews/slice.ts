import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedReview } from '../../../constants/normalized-mock';
import { normalizedReviews } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedReviews.reduce<Record<string, NormalizedReview>>((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (state, reviewId: string) => state.entities[reviewId],
  },
});

export const { selectReviewById } = reviewSlice.selectors;
