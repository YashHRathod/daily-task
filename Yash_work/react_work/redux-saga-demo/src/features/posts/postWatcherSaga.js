import { takeLatest } from "redux-saga/effects";
import { fetchPostRequested } from "./postSlice";
import { fetchPostWorker } from "./postSaga";


export default function* postWatcherSaga() {
  
    yield takeLatest(fetchPostRequested.type,fetchPostWorker)
}
