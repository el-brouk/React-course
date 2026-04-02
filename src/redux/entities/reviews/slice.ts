import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedReview } from '../../../constants/normalized-mock';
// import { normalizedReviews } from '../../../constants/normalized-mock';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { getReviews } from './get-reviews';
import type { RequestStatus } from '../../../constants/request-statuses';
import { addReview } from './add-review';

const entitiesAdapter = createEntityAdapter<NormalizedReview>();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entitiesAdapter.getInitialState({
    listRequestStatus: 'idle' as RequestStatus,
    addReviewRequestStatus: 'idle' as RequestStatus,
  }),
  reducers: {},
  selectors: {
    selectReviewById: (state, reviewId: string) => state.entities[reviewId],
    selectListRequestStatus: (state) => state.listRequestStatus,
    selectAddReviewRequestStatus: (state) => state.addReviewRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.listRequestStatus = 'pending';
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.listRequestStatus = 'fulfilled';
        entitiesAdapter.setAll(state, payload);
      })
      .addCase(getReviews.rejected, (state) => {
        state.listRequestStatus = 'rejected';
      })
      .addCase(addReview.pending, (state) => {
        state.addReviewRequestStatus = 'pending';
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.addReviewRequestStatus = 'fulfilled';
        entitiesAdapter.addOne(state, payload);
      })
      .addCase(addReview.rejected, (state) => {
        state.addReviewRequestStatus = 'rejected';
      }),
});

export const { selectReviewById, selectListRequestStatus, selectAddReviewRequestStatus } =
  reviewSlice.selectors;
