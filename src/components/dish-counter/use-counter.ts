import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectAmountById } from '../../redux/entities/cart/slice';
import type { RootState } from '../../redux/store';

export const useCount = ({ id }: { id: string }) => {
  const amount = useSelector((state: RootState) => selectAmountById(state, id));
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

  const decrement = useCallback(() => dispatch(removeFromCart(id)), [dispatch, id]);

  return {
    value: amount,
    increment,
    decrement,
  };
};
