import { Layout } from './layout/layout';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import '../styles/global.scss';
import { ThemeProvider } from './theme-provider/theme-provider.tsx';
import { UserProvider } from './user-provider/user-provider.tsx';

export const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <RestaurantsPage title="Restaurants" />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};
