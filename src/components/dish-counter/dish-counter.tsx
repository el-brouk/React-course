import { Counter } from '../base/counter';
import { useState } from 'react';

export const DishCounter = () => {
  const [quantity, setQuantity] = useState(0);

  return <Counter value={quantity} onChange={setQuantity} min={0} max={5} />;
};
