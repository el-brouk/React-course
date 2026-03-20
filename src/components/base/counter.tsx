import styles from './counter.module.scss';

type CounterProps = {
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (val: number) => void;
  min?: number;
  max?: number;
};

export const Counter = ({ value = 0, onChange, min = 0, max = 5 }: CounterProps) => {
  const increment = () => {
    if (value < max) onChange(value + 1);
  };
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
