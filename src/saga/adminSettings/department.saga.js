import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DEPARTMENT,
    GET_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT,
    ADD_DEPARTMENT_SUCCESS,
    UPDATE_DEPARTMENT,
    UPDATE_DEPARTMENT_SUCCESS,
    DELETE_DEPARTMENT,
    DELETE_DEPARTMENT_SUCCESS,
} from "../../redux/actions/actionType";
import api from "../../apis/api";


// api function.
function getDepartmentApi()  {
  // api for get designation.
 const response = api.dbDepartment().GetAllDepartments();
  return response;
}
function addDepartmentApi(DepartmentData) {
  // api for add designation.
  console.log(DepartmentData);
}
function updateDepartmentApi(formData) {
  // api for update designation.
}
function delDepartmentApi(delId) {
  // api for delete designation.
  const response = api.dbDepartment().DeleteDepartment(delId);
  console.log(response);
  return response;
}

// get designation list.
export function* handleGetDepartment() {
  try {
    const response = yield call(getDepartmentApi);
    yield put({ type: GET_DEPARTMENT_SUCCESS, payload: response });
  } catch (error) {
    console.log(error);
  }
}
export function* handleAddDepartment({ payload }) {
  try {
    yield call(addDepartmentApi, payload);
    yield put({ type: ADD_DEPARTMENT_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpdateDepartment({ payload }) {
  try {
    yield call(updateDepartmentApi, payload);
    yield put({ type: UPDATE_DEPARTMENT_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}
export function* handleDelDepartment({ payload }) {
  try {
    yield call(delDepartmentApi, payload);
    yield put({ type: DELETE_DEPARTMENT_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

// watach function.
export function* departmentWatchFun() {
  yield takeLatest(GET_DEPARTMENT, handleGetDepartment);
  yield takeLatest(ADD_DEPARTMENT, handleAddDepartment);
  yield takeLatest(UPDATE_DEPARTMENT, handleUpdateDepartment);
  yield takeLatest(DELETE_DEPARTMENT, handleDelDepartment);
}