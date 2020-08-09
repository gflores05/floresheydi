import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categoriesReducer from './categories.reducer';

const IndexReducer = (history) => combineReducers({
  categories: categoriesReducer,
  router: connectRouter(history)
});

export default IndexReducer;
