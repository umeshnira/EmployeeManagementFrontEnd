import { combineReducers } from "redux";
import AdminSettingReducer from "./reducers/adminSetting/adminSetting.reducer";
import EmployeReducer from "./reducers/employee/employee.reducer";
import ProjectReducer from "./reducers/projects/projects.reducer";
import TaskReducer from "./reducers/task/task.reducer";

export default combineReducers({
  adminSettingReducer: AdminSettingReducer,
  empReducer: EmployeReducer,
  projectReducer: ProjectReducer,
  taskReducer: TaskReducer,
});
