import { put } from "redux-saga/effects";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import * as actions from "../actions";

var db = firebase.firestore();

function* loadCategoriesSaga(action) {
  try {
    const categoriesSnapshot = yield db.collection('categories').get();
    const categories = categoriesSnapshot.docs.map(doc => doc.data());
    yield put(actions.setCategories(categories));
  } catch (error) {
    // yield put(actions.fetchIngredientsFailed());
    console.error(error);
  }
}

export function* watchCategories() {
  yield takeEvery(actionTypes.CATEGORIES_LOAD, loadCategoriesSaga);
}