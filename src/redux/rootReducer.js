import { combineReducers } from "redux";
import AssetReducer from "./reducers/adminSetting/asset.reducer";
import EmployeReducer from "./reducers/employee/employee.reducer";
import ProjectReducer from "./reducers/projects/projects.reducer";

export default combineReducers({
  assetReducer: AssetReducer,
  empReducer: EmployeReducer,
  projectReducer: ProjectReducer,
});
