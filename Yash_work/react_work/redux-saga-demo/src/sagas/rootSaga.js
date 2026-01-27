import { all } from "redux-saga/effects";
import userWatcherSaga from "../features/user/userWatcherSaga";
import postWatcherSaga from "../features/posts/postWatcherSaga";
import { counterWatcherSaga } from "../features/counter/counterWatcherSaga";


export default function* rootSaga() {
   yield  all([
        userWatcherSaga(),
        postWatcherSaga(),
        counterWatcherSaga()
    ])
}
