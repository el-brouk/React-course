import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedUser } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';
import { selectUsersIds } from './slice';

export const getUsers = createAsyncThunk<
  NormalizedUser[],
  void,
  { state: RootState; rejectValue: string }
>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);

    const result = (await response.json()) as NormalizedUser[];

    if (!result.length) {
      return rejectWithValue('No users found');
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUsersIds(getState()).length === 0;
      // Если в state уже есть users, то thunk не выполняется
    },
  }
);
