import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  GET_PROJECT_LIST,
  GET_PROJECT_LIST_SUCCES,
  GET_SELECT_PROJECT,
  GET_SELECT_PROJECT_SUCCESS,
} from "../redux/actions/actionType";
import { projectsList } from "../datas/projects"; //Dummy Data.

// Api Functions.
function getProjectListApi() {
  // api call.
  return { projectsList };
}
function getSelectProject(projectId) {
  // api call.
  let projectDate = projectsList.filter(
    (ele) => String(ele.projectId) === projectId
  );

  return { projectDate };
}

// get all the projects.
export function* handleGetProjectList() {
  try {
    const { projectsList } = yield call(getProjectListApi);
    console.log(projectsList);

    yield put({ type: GET_PROJECT_LIST_SUCCES, payload: projectsList });
  } catch (error) {
    console.log(error);
  }
}

// get the selected project deatils.
export function* handleGetSelectProject(projectId) {
  try {
    const { projectDate } = yield call(getSelectProject, projectId.payload);
    yield put({ type: GET_SELECT_PROJECT_SUCCESS, payload: projectDate });
  } catch (error) {
    console.log(error);
  }
}

// watch function

export function* projectWatachFun() {
  yield takeLatest(GET_PROJECT_LIST, handleGetProjectList);
  yield takeLatest(GET_SELECT_PROJECT, handleGetSelectProject);
}
