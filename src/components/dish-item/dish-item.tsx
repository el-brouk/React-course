import { useState } from 'react';
import { type MenuItem } from '../../constants/mock';
import { DishCounter } from '../dish-counter/dish-counter';

export const DishItem = ({ dish }: { dish: MenuItem }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <p>{dish.name}</p>
      <DishCounter value={quantity} onChange={setQuantity} />
    </div>
  );
};
