import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedDish } from '../../../constants/normalized-mock';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { getDishes } from './get-dishes';
import { getDishById } from './get-dish-by-id';
import type { RequestStatus } from '../../../constants/request-statuses';

const entitiesAdapter = createEntityAdapter<NormalizedDish>();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entitiesAdapter.getInitialState({
    listRequestStatus: 'idle' as RequestStatus,
    detailRequestStatus: 'idle' as RequestStatus,
  }),
  reducers: {},
  selectors: {
    selectDishById: (state, dishId: string) => state.entities[dishId],
    selectDishIds: (state) => state.ids,
    selectListRequestStatus: (state) => state.listRequestStatus,
    selectDetailRequestStatus: (state) => state.detailRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.listRequestStatus = 'pending';
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.listRequestStatus = 'fulfilled';
        entitiesAdapter.setAll(state, payload);
      })
      .addCase(getDishes.rejected, (state) => {
        state.listRequestStatus = 'rejected';
      })
      .addCase(getDishById.pending, (state) => {
        state.detailRequestStatus = 'pending';
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        state.detailRequestStatus = 'fulfilled';
        entitiesAdapter.setOne(state, payload);
      })
      .addCase(getDishById.rejected, (state) => {
        state.detailRequestStatus = 'rejected';
      }),
});

export const { selectDishById, selectDishIds, selectListRequestStatus, selectDetailRequestStatus } =
  dishSlice.selectors;
