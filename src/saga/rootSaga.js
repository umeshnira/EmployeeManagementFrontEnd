import { all } from "redux-saga/effects";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";
import { taskWatchFun } from "./task.saga";

export default function* rootSaga() {
  yield all([employeeWatchFun(), projectWatachFun(), taskWatchFun()]);
}
