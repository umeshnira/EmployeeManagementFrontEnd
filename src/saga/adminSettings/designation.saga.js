import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_DESIGNATION,
  GET_DESIGNATION_SUCCESS,
  ADD_DESIGINATION_SUCCESS,
  ADD_DESIGINATION,
  UPDATE_DESIGNATION,
  UPDATE_DESIGNATION_SUCCESS,
  DEL_DESIGNATION,
  DEL_DESIGNATION_SUCCESS,
} from "../../redux/actions/actionType";
import { designationDate } from "../../datas/designation";

// api function.
function getDesignationApi() {
  // api for get designation.
  return designationDate;
}
function addDesignation(designationData) {
  // api for add designation.
  console.log(designationData);
}
function updateDesignationApi(formData) {
  // api for update designation.
}
function delDesignationApi(delId) {
  // api for delete designation.
}

// get designation list.
export function* handleGetDesignation() {
  try {
    const designationDate = yield call(getDesignationApi);
    yield put({ type: GET_DESIGNATION_SUCCESS, payload: designationDate });
  } catch (error) {
    console.log(error);
  }
}
export function* handleAddDesignation({ payload }) {
  try {
    yield call(addDesignation, payload);
    yield put({ type: ADD_DESIGINATION_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpdateDesignation({ payload }) {
  try {
    yield call(updateDesignationApi, payload);
    yield put({ type: UPDATE_DESIGNATION_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}
export function* handleDelDesugantion({ payload }) {
  try {
    yield call(delDesignationApi, payload);
    yield put({ type: DEL_DESIGNATION_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

// watach function.
export function* desginationWatchFun() {
  yield takeLatest(GET_DESIGNATION, handleGetDesignation);
  yield takeLatest(ADD_DESIGINATION, handleAddDesignation);
  yield takeLatest(UPDATE_DESIGNATION, handleUpdateDesignation);
  yield takeLatest(DEL_DESIGNATION, handleDelDesugantion);
}
