import { all } from "redux-saga/effects";
import { desginationWatchFun } from "./adminSettings/designation.saga";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";
import { taskWatchFun } from "./task.saga";

export default function* rootSaga() {
  yield all([
    desginationWatchFun(),
    employeeWatchFun(),
    projectWatachFun(),
    taskWatchFun(),
  ]);
}
