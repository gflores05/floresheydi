import { put } from "redux-saga/effects";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import * as actions from "../actions";

var db = firebase.firestore();

function* loadsProductsSaga(action) {
  try {
    let query = db.collection('products');
      if (!!action.search && !!action.search.categories) {
        query =  query.where('categories', 'array-contains-any', action.search.categories);
      } 
      if(!!action.search && !!action.search.tags) {
        query =  query.where('tags', 'array-contains-any', action.search.tags);
      }
    const productsSnapshot = yield query.get();
    const products = productsSnapshot.docs.map(doc => doc.data());

    yield put(actions.loadProductsSuccess(products));
  } catch (error) {
    console.error(error);
  }
}

export function* watchProducts() {
  yield takeEvery(actionTypes.PRODUCTS_LOAD, loadsProductsSaga);
}