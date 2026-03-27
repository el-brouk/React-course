import { Counter } from '../base/counter';
import { useCount } from './use-counter';

export const DishCounter = ({ id }: { id: string }) => {
  const { value, increment, decrement } = useCount({ id });

  return <Counter value={value} increment={increment} decrement={decrement} min={0} />;
};
