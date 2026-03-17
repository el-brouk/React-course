import { type MenuItem } from '../../constants/mock';
import { DishCounter } from '../dish-counter/dish-counter';

export const DishItem = ({ dish }: { dish: MenuItem }) => {
  return (
    <div>
      <p>{dish.name}</p>
      <DishCounter />
    </div>
  );
};
