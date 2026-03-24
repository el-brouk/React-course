import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedUser } from '../../../constants/normalized-mock';
import { normalizedUsers } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedUsers.reduce<Record<string, NormalizedUser>>((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state, userId: string) => state.entities[userId],
  },
});

export const { selectUserById } = userSlice.selectors;
