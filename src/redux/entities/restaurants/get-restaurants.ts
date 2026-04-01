import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NormalizedRestaurant } from '../../../constants/normalized-mock';
import type { RootState } from '../../store';
import { selectRestaurantIds } from './slice';

export const getRestaurants = createAsyncThunk<
  NormalizedRestaurant[],
  void,
  { state: RootState; rejectValue: string }
>(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants');

    const result = (await response.json()) as NormalizedRestaurant[];

    if (!result.length) {
      return rejectWithValue('No restaurants found');
    }
    return result;
  },
  // condition - функция, которая проверяет, нужно ли выполнять thunk
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
      // Если в state уже есть restaurants, то thunk не выполняется
    },
  }
);
