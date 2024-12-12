import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import createSagaMiddleware from "redux-saga";
import watchFetchDataSaga from "./dataSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: dataSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchDataSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
