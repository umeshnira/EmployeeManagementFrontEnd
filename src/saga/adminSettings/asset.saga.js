import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ASSET,
  GET_ASSET_SUCCESS,
  ADD_ASSET,
  UPDATE_ASSET,
  DEL_ASSET,
} from "../../redux/actions/actionType";
import api from "../../apis/api";

// Api functions.
function getAssetApi() {
  // api call here
  return api.asset().getAll();
}

export function* handleGetAssets() {
  try {
    const response = yield call(getAssetApi);
    yield put({ type: GET_ASSET_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// watch function.
export function* assetWatchFun() {
  yield takeLatest(GET_ASSET, handleGetAssets);
  //   yield takeLatest(ADD_ASSET, handleAddAsset);
  //   yield takeLatest(UPDATE_ASSET, handleUpdateAsset);
  //   yield takeLatest(DEL_ASSET, handleDelAsset);
}
