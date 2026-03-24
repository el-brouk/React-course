import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NormalizedRestaurant } from '../../../constants/normalized-mock.js';
import { normalizedRestaurants } from '../../../constants/normalized-mock.js';

const initialState = {
  entities: normalizedRestaurants.reduce<Record<string, NormalizedRestaurant>>(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    },
    {}
  ),
  ids: normalizedRestaurants.map(({ id }) => id),
  activeRestaurantId: normalizedRestaurants[0]?.id ?? null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setActiveRestaurantId: (state, action: PayloadAction<string>) => {
      state.activeRestaurantId = action.payload;
    },
  },
  selectors: {
    selectRestaurantById: (state, restaurantId: string) => state.entities[restaurantId],
    selectRestaurantIds: (state) => state.ids,
    selectActiveRestaurantId: (state) => state.activeRestaurantId,
  },
});

export const { setActiveRestaurantId } = restaurantSlice.actions;
export const { selectRestaurantById, selectRestaurantIds, selectActiveRestaurantId } =
  restaurantSlice.selectors;
