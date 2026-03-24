import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
// import { Tab } from '../base/tab';
import {
  // selectActiveRestaurantId,
  selectRestaurantById,
  // setActiveRestaurantId,
} from '../../redux/entities/restaurants/slice';
import { NavLink } from 'react-router';
import styles from './restaurant-tab-container.module.scss';
import classNames from 'classnames';

export const RestaurantTabContainer = ({ id }: { id: string }) => {
  // const dispatch = useDispatch();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  // const activeRestaurantId = useSelector((state: RootState) => selectActiveRestaurantId(state));

  return (
    // <Tab isActive={id === activeRestaurantId} onClick={() => dispatch(setActiveRestaurantId(id))}>
    //   {restaurant?.name ?? id}
    // </Tab>
    <NavLink
      className={({ isActive }) =>
        classNames(styles['restaurant-tab'], isActive ? styles.active : styles.inactive)
      }
      to={`/restaurants/${id}`}
    >
      {restaurant.name}
    </NavLink>
  );
};
