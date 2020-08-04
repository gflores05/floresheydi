import { put } from "redux-saga/effects";
import firebase from 'firebase/app';
import 'firebase/firestore';

import * as actions from "../actions";

var db = firebase.firestore();

export function* loadCategoriesSaga(action) {
  try {
    // const response = yield axios.get(
    //   "https://react-my-burger.firebaseio.com/ingredients.json"
    // );
    const categoriesSnapshot = yield db.collection('categories').get();
    const categories = categoriesSnapshot.docs.map(doc => doc.data());
    yield put(actions.setCategories(categories));
  } catch (error) {
    // yield put(actions.fetchIngredientsFailed());
    console.error(error);
  }
}
