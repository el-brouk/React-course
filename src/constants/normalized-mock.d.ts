export interface NormalizedRestaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export interface NormalizedDish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface NormalizedReview {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export interface NormalizedUser {
  id: string;
  name: string;
}

export const normalizedRestaurants: NormalizedRestaurant[];
export const normalizedDishes: NormalizedDish[];
export const normalizedReviews: NormalizedReview[];
export const normalizedUsers: NormalizedUser[];
