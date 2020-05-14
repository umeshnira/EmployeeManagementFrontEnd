import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EMP_TASK_SUCCESS,
  GET_EMP_TASK,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  DEL_TASK,
  DEL_TASK_SUCCESS,
} from "../redux/actions/actionType";
import { tasks } from "../datas/tasks";

// Api Functions.
function getEmpTaskApi(empId) {
  // api call.
  let empTask = tasks.filter((el) => el.empId === empId);
  return { empTask };
}

function addTaskApi(formData, taskProjectId) {
  // api call to add task.
}

function updateTaskApi(formData, taskProjectId) {
  // api call to update task.
}

function delTaskApi(delId) {
  //api call
}

// get all the task of a particular employee.
export function* handleGetEmpTask(empId) {
  try {
    const { empTask } = yield call(getEmpTaskApi, empId.payload);
    yield put({ type: GET_EMP_TASK_SUCCESS, payload: empTask });
  } catch (error) {
    console.log(error);
  }
}

// add task
export function* handleAddTask({ payload }) {
  try {
    yield call(addTaskApi, payload.formData, payload.taskProjectId);
    yield put({
      type: ADD_TASK_SUCCESS,
      formData: payload.formData,
      taskProjectId: payload.taskProjectId,
    });
  } catch (error) {
    console.log(error);
  }
}

// update task
export function* handleUpdateTask({ payload }) {
  try {
    yield call(updateTaskApi, payload.formData, payload.taskId);
    yield put({
      type: UPDATE_TASK_SUCCESS,
      formData: payload.formData,
      taskId: payload.taskId,
    });
  } catch (error) {
    console.log(error);
  }
}

//  delete task.
export function* handleDelTask(delId) {
  try {
    yield call(delTaskApi, delId.payload);
    yield put({ type: DEL_TASK_SUCCESS, payload: delId.payload });
  } catch (error) {
    console.log(error);
  }
}

// watch function.
export function* taskWatchFun() {
  yield takeLatest(GET_EMP_TASK, handleGetEmpTask);
  yield takeLatest(ADD_TASK, handleAddTask);
  yield takeLatest(UPDATE_TASK, handleUpdateTask);
  yield takeLatest(DEL_TASK, handleDelTask);
}
