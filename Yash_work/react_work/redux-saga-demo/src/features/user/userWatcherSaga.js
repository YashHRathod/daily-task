import { takeLatest } from "redux-saga/effects";
import { fetchUserWorker } from "./userSaga";
import { fetchUserRequested } from "./userSlice";


export default function* userWatcherSaga() {
  // yield delay(2000);

  yield  takeLatest(fetchUserRequested.type, fetchUserWorker );
}
