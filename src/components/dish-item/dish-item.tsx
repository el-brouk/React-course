import { type MenuItem } from '../../constants/mock';
import { Counter } from '../base/counter';

export const DishItem = ({ dish }: { dish: MenuItem }) => {
  return (
    <div>
      <p>{dish.name}</p>
      <Counter />
    </div>
  );
};
