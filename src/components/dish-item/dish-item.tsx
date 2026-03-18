import { type MenuItem } from '../../constants/mock';
import { DishCounter } from '../dish-counter/dish-counter';
import { useContext } from 'react';
import { UserContext } from '../user-provider/index.ts';

export const DishItem = ({ dish }: { dish: MenuItem }) => {
  const { value: user } = useContext(UserContext);

  return (
    <div>
      <p>{dish.name}</p>
      {user === 'isLoggedIn' && <DishCounter />}
    </div>
  );
};
