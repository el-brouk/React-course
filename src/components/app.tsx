import { Layout } from './layout/layout';
import { RestaurantsLayout } from './restaurants-layout/restaurants-layout';
import '../styles/global.scss';
import { ThemeProvider } from './theme-provider/theme-provider.tsx';
import { UserProvider } from './user-provider/user-provider.tsx';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from '../pages/home-page/home-page';
import { RestaurantPage } from '../pages/restaurant-page/restaurant-page.tsx';
import { DishPage } from '../pages/dish-page/dish-page.tsx';
import { RestaurantMenuPage } from '../pages/restaurant-menu-page/restaurant-menu-page.tsx';
import { RestaurantReviewsPage } from '../pages/restaurant-reviews-page/restaurant-reviews-page.tsx';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsLayout title="Restaurants" />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<RestaurantMenuPage />} />
                    <Route path="reviews" element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route path="/dishes/:dishId" element={<DishPage />} />
              </Route>
              <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
