import { Layout } from './layout/layout';
import { RestaurantsPage } from './restaurants-page/restaurants-page';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title="Restaurants" />
    </Layout>
  );
};
