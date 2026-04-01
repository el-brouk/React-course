import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurants/slice';
import { reviewSlice } from './entities/reviews/slice';
import { userSlice } from './entities/users/slice';
import { dishSlice } from './entities/dishes/slice';
import { cartSlice } from './entities/cart/slice';

const loggerMiddleware: Middleware = (_api) => (next) => (action) => {
  console.log('dispatching', action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
