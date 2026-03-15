import styles from './counter.module.scss';

type CounterProps = {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
};

export const Counter = ({ value = 0, onChange, min = 0, max = 5 }: CounterProps) => {
  const increment = () => {
    if (value < max) onChange?.(value + 1);
  };
  const decrement = () => {
    if (value > min) onChange?.(value - 1);
  };

  return (
    <div className={styles['counter']}>
      <button type="button" className={styles['counter__button']} onClick={decrement}>
        -
      </button>
      <span className={styles['counter__value']}>{value}</span>
      <button type="button" className={styles['counter__button']} onClick={increment}>
        +
      </button>
    </div>
  );
};
