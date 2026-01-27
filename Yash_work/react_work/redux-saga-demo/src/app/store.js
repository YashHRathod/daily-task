import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "../features/user/userSlice";
import rootSaga from "../sagas/rootSaga";
import postReducer from "../features/posts/postSlice"
import counterReducer  from "../features/counter/counterSlice"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    counter: counterReducer,

  },
  middleware: (e) =>
    e({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
