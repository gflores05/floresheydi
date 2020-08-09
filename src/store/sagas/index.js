import { all } from 'redux-saga/effects';

import { watchCategories } from './categories.saga';

export default function* IndexSaga() {
  yield all([
    watchCategories()
  ]);
}
