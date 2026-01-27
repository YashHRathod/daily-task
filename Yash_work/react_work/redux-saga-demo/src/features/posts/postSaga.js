import { call, put } from "redux-saga/effects";
import { fetchPostFailed, fetchPostSuccess } from "./postSlice";




function fetchPostApi() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json());
}

export function* fetchPostWorker() {
  try {
    const data = yield call(fetchPostApi);
    yield put(fetchPostSuccess(data));
  } catch (error) {
    yield put(fetchPostFailed(error.message));
  }
}
