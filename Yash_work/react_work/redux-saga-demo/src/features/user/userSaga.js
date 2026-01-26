import { call, put } from "redux-saga/effects";
import {
  fetchUserSuccess,
  fetchUserFailed,
} from "./userSlice";


function fetchUserApi() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json());
}

export function* fetchUserWorker() {
  try {
    const data = yield call(fetchUserApi);
    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserFailed(error.message));
  }
}
