import { all } from 'redux-saga/effects';

import { watchCategories } from './categories.saga';
import { watchProducts } from './products.saga';

export default function* IndexSaga() {
  yield all([
    watchCategories(),
    watchProducts()
  ]);
}
