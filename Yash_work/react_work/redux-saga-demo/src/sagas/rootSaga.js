import { throttle } from "redux-saga/effects";
import { fetchUserWorker } from "../features/user/userSaga";
import { fetchUserRequested } from "../features/user/userSlice";

export default function* rootSaga() {
  // Limits fetchUserWorker to run at most once every 1000ms
  yield throttle(1000, fetchUserRequested.type, fetchUserWorker);
}
