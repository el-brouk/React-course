import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedDish } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';
import { selectDishIds } from './slice';

export const getDishes = createAsyncThunk<
  NormalizedDish[],
  { restaurantId: string },
  { state: RootState; rejectValue: string }
>(
  'dishes/getDishes',
  async ({ restaurantId }, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    const result = (await response.json()) as NormalizedDish[];

    if (!result.length) {
      return rejectWithValue('No dishes found');
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectDishIds(getState()).length === 0;
      // Если в state уже есть dishes, то thunk не выполняется
    },
  }
);
