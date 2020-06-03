import { all } from "redux-saga/effects";
// admin setting saga.
import { officeLocationWatchFun } from "./adminSettings/officeLocation.saga";
import { designationWatchFun } from "./adminSettings/designation.saga";
import { departmentWatchFun } from "./adminSettings/department.saga";
import { workPrimiseWatchFunc } from "./adminSettings/workPrimise.saga";
import { rewardsWatchFunc } from "./adminSettings/rewards.saga";
import { employeeWatchFun } from "./employee.saga";
import { projectWatachFun } from "./project.saga";
import { taskWatchFun } from "./task.saga";
import { processRewardsWatchFun } from "./processRewards.saga";
import { itemsWatchFunc } from "./items.saga";
import { assetWatchFun } from "./adminSettings/asset.saga";

export default function* rootSaga() {
  yield all([
    officeLocationWatchFun(),
    designationWatchFun(),
    departmentWatchFun(),
    workPrimiseWatchFunc(),
    rewardsWatchFunc(),
    employeeWatchFun(),
    projectWatachFun(),
    taskWatchFun(),
    processRewardsWatchFun(),
    itemsWatchFunc(),
    assetWatchFun(),
  ]);
}
