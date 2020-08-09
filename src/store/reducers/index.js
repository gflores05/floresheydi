import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categoriesReducer from './categories.reducer';
import productsReducer from './products.reducer';

const IndexReducer = (history) => combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  router: connectRouter(history)
});

export default IndexReducer;
