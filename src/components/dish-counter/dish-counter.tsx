import { Counter } from '../base/counter';

type DishCounterProps = {
  value?: number;
  onChange?: (value: number) => void;
};

export const DishCounter = ({ value, onChange }: DishCounterProps) => {
  return <Counter value={value} onChange={onChange} min={0} max={5} />;
};
