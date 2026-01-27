import {
  takeLatest,
  takeEvery,
  fork,
  cancel,
} from "redux-saga/effects";

import {
  incrementAsync,
  startAutoIncrement,
  stopAutoIncrement,
} from "./counterSlice";

import {
  incrementAsyncWorker,
  autoIncrementWorker,
} from "./counterSaga";

let autoTask = null; 

export function* counterWatcherSaga() {
 
  yield takeLatest(incrementAsync.type, incrementAsyncWorker);

  yield takeEvery(startAutoIncrement.type, function* () {
    if (!autoTask) {
      autoTask = yield fork(autoIncrementWorker);
    }
  });

 
  yield takeLatest(stopAutoIncrement.type, function* () {
    if (autoTask) {
      yield cancel(autoTask);
      autoTask = null;
    }
  });
}
