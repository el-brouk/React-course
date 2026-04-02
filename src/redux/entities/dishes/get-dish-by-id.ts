import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedDish } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';

export const getDishById = createAsyncThunk<
  NormalizedDish,
  { dishId: string },
  { state: RootState; rejectValue: string }
>('dishes/getDishById', async ({ dishId }, { rejectWithValue }) => {
  const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

  const result = (await response.json()) as NormalizedDish;

  if (!result) {
    return rejectWithValue('Dish was not found');
  }
  return result;
});
