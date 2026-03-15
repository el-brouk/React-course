import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    value: count,
    increment: () => {
      if (count < 5) setCount(count + 1);
    },
    decrement: () => {
      if (count > 0) setCount(count - 1);
    },
  };
};

export const Counter = () => {
  const { value, decrement, increment } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
