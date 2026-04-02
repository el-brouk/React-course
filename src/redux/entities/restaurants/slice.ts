import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NormalizedRestaurant } from '../../../constants/normalized-mock';
import { normalizedRestaurants } from '../../../constants/normalized-mock.js';
import { getRestaurants } from './get-restaurants.ts';
import { createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store.js';
import { getRestaurantById } from './get-restaurant-by-id.ts';
import type { RequestStatus } from '../../../constants/request-statuses';
import { addReview } from '../reviews/add-review.ts';

// Вариант без использования `createEntityAdapter()`: вручную пишем начальное состояние state
// type RestaurantState = {
//   requestStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
//   entities: Record<string, NormalizedRestaurant>;
//   ids: string[];
//   activeRestaurantId: string | null;
// };

// const initialState: RestaurantState = {
//   requestStatus: 'idle',
//   entities: {},
//   ids: [],
//   activeRestaurantId: normalizedRestaurants[0]?.id ?? null,
// };

// По умолчанию `createEntityAdapter()` возвращает `{ ids: [], entities: {} }`
// Нужен для того, чтобы упростить сохранение состояния entities и ids в state
const entitiesAdapter = createEntityAdapter<NormalizedRestaurant>();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  // В качестве initialState передаем результат вызова `getInitialState()` из `entitiesAdapter`
  // и добавляем в стандартным ids и entities еще requestStatus и activeRestaurantId
  initialState: entitiesAdapter.getInitialState({
    listRequestStatus: 'idle' as RequestStatus,
    detailRequestStatus: 'idle' as RequestStatus,
    activeRestaurantId: normalizedRestaurants[0]?.id ?? null,
  }),
  reducers: {
    setActiveRestaurantId: (state, action: PayloadAction<string>) => {
      state.activeRestaurantId = action.payload;
    },
  },
  selectors: {
    selectRestaurantById: (state, restaurantId: string) => state.entities[restaurantId],
    selectRestaurantIds: (state) => state.ids,
    selectActiveRestaurantId: (state) => state.activeRestaurantId,
    selectListRequestStatus: (state) => state.listRequestStatus,
    selectDetailRequestStatus: (state) => state.detailRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.listRequestStatus = 'pending';
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.listRequestStatus = 'fulfilled';
        // Используем `setAll()` для  получения данных из payload и установки всех entities и ids в state для того, чтобы не писать руками
        entitiesAdapter.setAll(state, payload);
        // Если бы мы писали руками, то код был бы таким:
        // const restaurants = payload as NormalizedRestaurant[];
        // state.entities = restaurants.reduce<Record<string, NormalizedRestaurant>>(
        //   (acc, restaurant) => {
        //     acc[restaurant.id] = restaurant;

        //     return acc;
        //   },
        //   {},
        // );
        // state.ids = restaurants.map(({ id }) => id);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.listRequestStatus = 'rejected';
      })
      // get 1 restaurant
      .addCase(getRestaurantById.pending, (state) => {
        state.detailRequestStatus = 'pending';
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        state.detailRequestStatus = 'fulfilled';
        entitiesAdapter.setOne(state, payload);
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.detailRequestStatus = 'rejected';
      })
      .addCase(addReview.fulfilled, (state, action) => {
        const { restaurantId } = action.meta.arg;
        const newReview = action.payload;
        const restaurant = state.entities[restaurantId];
        if (restaurant && !restaurant.reviews.includes(newReview.id)) {
          restaurant.reviews.push(newReview.id);
        }
      }),
});

export const { setActiveRestaurantId } = restaurantSlice.actions;
export const {
  selectRestaurantById,
  selectRestaurantIds,
  selectActiveRestaurantId,
  selectListRequestStatus,
  selectDetailRequestStatus,
} = restaurantSlice.selectors;

const selectRestaurantsSlice = (state: RootState) => state[restaurantSlice.name];

// заменяет получение  selectRestaurantById на selectById из коробки из createEntityAdapter
export const { selectById: selectRestaurantByIdSelector } =
  entitiesAdapter.getSelectors(selectRestaurantsSlice);
