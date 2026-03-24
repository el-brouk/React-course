import { createSlice } from '@reduxjs/toolkit';
import type { NormalizedDish } from '../../../constants/normalized-mock';
import { normalizedDishes } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedDishes.reduce<Record<string, NormalizedDish>>((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
  selectors: {
    selectDishById: (state, dishId: string) => state.entities[dishId],
  },
});

export const { selectDishById } = dishSlice.selectors;
