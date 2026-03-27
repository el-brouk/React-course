import { Counter } from '../base/counter';

type ReviewCounterProps = {
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export const ReviewCounter = ({ value, onChange, min = 1, max = 5 }: ReviewCounterProps) => {
  return (
    <Counter
      value={value}
      increment={() => onChange(value + 1)}
      decrement={() => onChange(value - 1)}
      min={min}
      max={max}
    />
  );
};
