import { call, delay, put } from "redux-saga/effects";
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
    yield delay(1000);
    const data = yield call(fetchUserApi);
    console.log(data)
    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserFailed(error.message));
  }
}
