import { createSlice, createSelector, type PayloadAction } from '@reduxjs/toolkit';

type CartState = Record<string, number>;

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<string>) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItems: (state) =>
      Object.keys(state).reduce<{ id: string; amount: number }[]>((acc, id) => {
        acc.push({ id, amount: state[id] });
        return acc;
      }, []),
    selectAmountById: (state, id) => state[id] ?? 0,
  },
});

export const { selectAmountById } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;

type RootStateWithCart = { [cartSlice.name]: CartState };

const selectCartSlice = (state: RootStateWithCart) => state[cartSlice.name];

export const selectCartItems = createSelector([selectCartSlice], (cart) =>
  Object.keys(cart).reduce<{ id: string; amount: number }[]>((acc, id) => {
    acc.push({ id, amount: cart[id] });
    return acc;
  }, [])
);
