import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_DESGNATION,
  GET_DESGNATION_SUCCESS,
  ADD_DESIGINATION_SUCCESS,
  ADD_DESIGINATION,
} from "../../redux/actions/actionType";
import { designationDate } from "../../datas/designation";

// api function.
function getDesignation() {
  // api for get designation.
  return designationDate;
}

function addDesignation(designationData) {
  // api for add designation.
  console.log(designationData);
}

export function* handleGetDesignation() {
  try {
    const responds = yield call(getDesignation);
    yield put({ type: GET_DESGNATION_SUCCESS, payload: responds });
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddDesignation(payload) {
  try {
    const responds = yield call(addDesignation, payload.designationData);
    yield put({ type: ADD_DESIGINATION_SUCCESS, payload: responds });
  } catch (error) {
    console.log(error);
  }
}

// watach function.
export function* desginationWatchFun() {
  yield takeLatest({ ADD_DESIGINATION, handleAddDesignation });
  yield takeLatest({ GET_DESGNATION, handleGetDesignation });
}
