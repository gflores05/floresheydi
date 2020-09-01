import { all } from 'redux-saga/effects';

import { watchCategories } from './categories.saga';
import { watchProducts } from './products.saga';
import { watchContact } from './contacts.saga';

export default function* IndexSaga() {
  yield all([
    watchCategories(),
    watchProducts(),
    watchContact()
  ]);
}
