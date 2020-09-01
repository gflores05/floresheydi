import { put } from "redux-saga/effects";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { takeEvery } from "redux-saga/effects";
import short from 'short-uuid';

import * as actionTypes from "../actions/actionTypes";
import * as actions from "../actions";

var db = firebase.firestore();

function* sendContactSaga(action) {
  try {
    yield db.collection('contacts')
        .doc(short.generate())
        .set(action.contact);
    yield put(actions.sendContactSuccess());
  } catch (error) {
    yield put(actions.sendContactFail());
  }
}

export function* watchContact() {
  yield takeEvery(actionTypes.CONTACT_SEND, sendContactSaga);
}