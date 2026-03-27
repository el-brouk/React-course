import styles from './counter.module.scss';

type CounterProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
  min?: number;
  /** Omit for no upper limit (e.g. cart quantity). */
  max?: number;
};

export const Counter = ({ value = 0, increment, decrement, min = 0, max }: CounterProps) => {
  const canDecrement = value > min;
  const canIncrement = max === undefined || value < max;

  return (
    <div className={styles.counter}>
      <button type="button" onClick={() => decrement()} disabled={!canDecrement}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => increment()} disabled={!canIncrement}>
        +
      </button>
    </div>
  );
};
