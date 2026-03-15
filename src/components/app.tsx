import { Layout } from './layout/layout';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import '../styles/global.scss';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title="Restaurants" />
    </Layout>
  );
};
