import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categoriesReducer from './categories.reducer';
import productsReducer from './products.reducer';
import contactReducer from './contacts.reducer';

const IndexReducer = (history) => combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  contact: contactReducer,
  router: connectRouter(history)
});

export default IndexReducer;
