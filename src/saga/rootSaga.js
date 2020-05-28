import { all } from "redux-saga/effects";
// admin setting saga.
import { officeLocationWatchFun } from "./adminSettings/officeLocation.saga";
import { desginationWatchFun } from "./adminSettings/designation.saga";
import { workPrimiseWatchFunc } from "./adminSettings/workPrimise.saga";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";
import { taskWatchFun } from "./task.saga";
import { processRewardsWatchFun } from "./processRewards.saga";

export default function* rootSaga() {
  yield all([
    officeLocationWatchFun(),
    desginationWatchFun(),
    workPrimiseWatchFunc(),
    employeeWatchFun(),
    projectWatachFun(),
    taskWatchFun(),
    processRewardsWatchFun(),
  ]);
}
