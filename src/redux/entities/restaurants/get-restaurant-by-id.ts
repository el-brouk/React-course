import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedRestaurant } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';

export const getRestaurantById = createAsyncThunk<
  NormalizedRestaurant,
  { restaurantId: string },
  { state: RootState; rejectValue: string }
>('restaurants/getRestaurantById', async ({ restaurantId }, { rejectWithValue }) => {
  const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);

  const result = (await response.json()) as NormalizedRestaurant;

  if (!result) {
    return rejectWithValue('Restaurant was not found');
  }
  return result;
});
