import { all } from "redux-saga/effects";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";

export default function* rootSaga() {
  yield all([employeeWatchFun(), projectWatachFun()]);
}
