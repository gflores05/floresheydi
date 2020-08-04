import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { loadCategoriesSaga } from './categories.saga';

export function* watchCategories() {
    yield takeEvery(actionTypes.CATEGORIES_LOAD, loadCategoriesSaga);
  }
  