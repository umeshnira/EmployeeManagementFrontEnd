import { call, put, takeLatest } from "redux-saga/effects";
import api from "../apis/api";
import {
  GET_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DEL_ITEM,
  GET_ITEMS_SUCCESS,
} from "../redux/actions/actionType";

// APi functions.
function* getItemsApi() {
  const response = yield api.items().getAll();
  console.log(response.data);
  return response;
}

export function* handleGetItems() {
  try {
    const response = yield call(getItemsApi);
    yield put({ type: GET_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// watch function.
export function* itemsWatchFunc() {
  yield takeLatest(GET_ITEMS, handleGetItems);
  //   yield takeLatest(ADD_ITEM, handleAddItem);
  //   yield takeLatest(UPDATE_ITEM, handleUpdateItem);
  //   yield takeLatest(DEL_ITEM, handleDelItem);
}
