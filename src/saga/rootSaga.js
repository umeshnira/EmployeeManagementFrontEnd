import { all } from "redux-saga/effects";
// admin setting saga.
import { officeLocationWatchFun } from "./adminSettings/officeLocation.saga";
import { designationWatchFun } from "./adminSettings/designation.saga";
import { departmentWatchFun } from "./adminSettings/department.saga";
import { workPrimiseWatchFunc } from "./adminSettings/workPrimise.saga";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";
import { taskWatchFun } from "./task.saga";
import { processRewardsWatchFun } from "./processRewards.saga";

export default function* rootSaga() {
  yield all([
    officeLocationWatchFun(),
    designationWatchFun(),
    departmentWatchFun(),
    workPrimiseWatchFunc(),
    employeeWatchFun(),
    projectWatachFun(),
    taskWatchFun(),
    processRewardsWatchFun(),
  ]);
}
