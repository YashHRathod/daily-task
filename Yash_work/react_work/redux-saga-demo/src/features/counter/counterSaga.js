import { put, delay } from "redux-saga/effects";
import { increment } from "./counterSlice";


export function* incrementAsyncWorker() {
  yield delay(1000);
  yield put(increment());
}

export function* autoIncrementWorker() {
  while (true) {
    yield delay(500); 
    yield put(increment());
  }
}
