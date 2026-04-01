import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedUser } from '../../../constants/normalized-mock';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { getUsers } from './get-users';
import type { RequestStatus } from '../../../constants/request-statuses';

const entitiesAdapter = createEntityAdapter<NormalizedUser>();

export const userSlice = createSlice({
  name: 'user',
  initialState: entitiesAdapter.getInitialState({
    listRequestStatus: 'idle' as RequestStatus,
  }),
  reducers: {},
  selectors: {
    selectUserById: (state, userId: string) => state.entities[userId],
    selectListRequestStatus: (state) => state.listRequestStatus,
    selectUsersIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.listRequestStatus = 'pending';
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.listRequestStatus = 'fulfilled';
        entitiesAdapter.setAll(state, payload);
      })
      .addCase(getUsers.rejected, (state) => {
        state.listRequestStatus = 'rejected';
      }),
});

export const { selectUserById, selectListRequestStatus, selectUsersIds } = userSlice.selectors;
