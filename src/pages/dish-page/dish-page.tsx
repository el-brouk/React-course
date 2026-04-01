import { DishItem } from '../../components/dish-item/dish-item';
import { useParams } from 'react-router';
import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../components/theme-provider';
import { useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { getDishById } from '../../redux/entities/dishes/get-dish-by-id.ts';
import { useSelector } from 'react-redux';
import { selectDetailRequestStatus } from '../../redux/entities/dishes/slice.ts';

export const DishPage = () => {
  const { dishId } = useParams();

  if (!dishId) return null;

  const dispatch = useDispatch<AppDispatch>();
  const { value: theme } = useContext(ThemeContext);

  const requestStatus = useSelector((state: RootState) => selectDetailRequestStatus(state));
  useEffect(() => {
    dispatch(getDishById({ dishId }));
  }, [dispatch]);

  if (requestStatus === 'pending' || requestStatus === 'idle') {
    return <div>Loading...</div>;
  }

  if (requestStatus === 'rejected') {
    return <div>Failed to load dish</div>;
  }

  return (
    <div
      className={classNames('page', {
        light: theme === 'light',
        dark: theme === 'dark',
      })}
    >
      <DishItem id={dishId} />
    </div>
  );
};
