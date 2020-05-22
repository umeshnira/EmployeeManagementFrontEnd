import { combineReducers } from "redux";
import AdminSettingReducer from "./reducers/adminSetting/adminSetting.reducer";
import EmployeeReducer from "./reducers/employee/employee.reducer";
import ProjectReducer from "./reducers/projects/projects.reducer";
import TaskReducer from "./reducers/task/task.reducer";

export default combineReducers({
  adminSettingReducer: AdminSettingReducer,
  empReducer: EmployeeReducer,
  projectReducer: ProjectReducer,
  taskReducer: TaskReducer,
});
