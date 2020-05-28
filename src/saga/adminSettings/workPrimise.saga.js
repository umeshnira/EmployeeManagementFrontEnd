import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import api from "../../api/api";
import {
  GET_WORKPRIMISE,
  GET_WORKPRIMISE_SUCCESS,
  ADD_WORKPRIMISE,
  ADD_WORKPRIMISE_SUCCESS,
} from "../../redux/actions/actionType";

// Api function.
function* getWorkPrimiseApi() {
  let tempArr = [];
  const response = yield api.workPrimise().getAll();
  for (let i = 0; i < response.data.length; i++) {
    const { data } = response;
    tempArr.push({
      workPremise: data[i].workingPremiseType,
      workPremiseId: data[i].workingPremiseId,
      description: data[i].description,
    });
  }
  console.log(response.data);
  return tempArr;
}
function* addWorkPrimise(formData) {
  const response = yield api.workPrimise().add(formData);
  console.log(response.data);
}

// handle get all work primises.
export function* handleGetWorkPrimise() {
  try {
    const response = yield call(getWorkPrimiseApi);
    yield put({ type: GET_WORKPRIMISE_SUCCESS, payload: response });
  } catch (error) {
    console.log(error);
  }
}
// handle add work primise.
export function* handleAddWorkPrimise({ payload }) {
  try {
    const respone = yield call(addWorkPrimise, payload);
    yield put({ type: ADD_WORKPRIMISE_SUCCESS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

// watch function.
export function* workPrimiseWatchFunc() {
  yield takeLatest(GET_WORKPRIMISE, handleGetWorkPrimise);
  yield takeLatest(ADD_WORKPRIMISE, handleAddWorkPrimise);
}
