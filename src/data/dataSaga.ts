import axios from "axios";
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import {
  Data,
  fetchDataRequest,
  fetchDataFailure,
  fetchDataSuccess,
} from "./dataSlice";

// Function to fetch data
const fetchDataFromAPI = async (): Promise<Data[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

function* fetchDataSaga(): Generator<
  CallEffect<Data[]> | PutEffect<any>, // Types of yielded effects
  void, // Final return type
  unknown // Input type for `next()`
> {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchDataSaga() {
  yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}

export default watchFetchDataSaga;
