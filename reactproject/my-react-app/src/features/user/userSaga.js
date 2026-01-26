import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSuccess, fetchFailed, fetchRequested } from "./userSlice";

// API function
function fetchUserApi() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json(),
  );
}

// Worker Saga
export function* fetchUserWorker() {
  try {
    const data = yield call(fetchUserApi);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailed(error.message));
  }
}

// Watcher Saga
export function* watchFetchUser() {
  yield takeLatest(fetchRequested.type, fetchUserWorker);
}
