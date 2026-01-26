import { all } from "redux-saga/effects";
import { watchFetchUser } from "../features/user/userSaga";

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
