import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style/index.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// import GAListener from "./components/GAListener";
import { MainLayout } from "./components/layout";
import PageSpinner from "./components/common/PageSpinner";
// import Test from "./pages/test/Test";
// import Test2 from "./pages/test/Test2";

// Admin dashboard.
import { AdminDashboard } from "./pages/adminDashboard/index";

// Admin settings
import {
  CompanyLocation,
  Department,
  Designation,
  WorkPrimise,
  EmployeeType,
  Reward,
  LeaveType,
  HolidayCalender,
  CompanyPolicy,
  RolesNdPermissions,
  Assets,
} from "./pages/adminSettings/index";
// Employee .
import {
  EmployeeDashboard,
  EmployeeSettings,
  EmployeeProfileView,
  EmployeeRewards,
  AssignRewards,
  ProcessRewards,
} from "./pages/employee/index";
// Projects
import { ListProjects, ViewProject } from "./pages/projects/index";
// Tasks
import { TaskManagment } from "./pages/tasks/index";

// payroll.
import {
  EmployeeSalary,
  PayRollItems,
  SalaryProcess,
  SalaryReport,
  PLReport,
} from "./pages/payroll/index";

// const Designation = React.lazy(() =>
//   import("./pages/adminSettings/designation/Designation")
// );

import Test3 from "./pages/test/Test3";

const ViewPreviousProject = React.lazy(() =>
  import("./components/employee/previousProjects/ViewPreviousProject.js")
);

function App() {
  return (
    <Router history={history}>
      {/* <GAListener> */}
      <Switch>
        <MainLayout>
          <React.Suspense fallback={<PageSpinner />}>
            {/* home routes */}

            <Route exact path="/" component={AdminDashboard}></Route>
            {/* ----------Admin Settings Routes----------------- */}
            <Route exact path="/department" component={Department}></Route>
            <Route exact path="/designation" component={Designation}></Route>
            <Route exact path="/workprimise" component={WorkPrimise}></Route>
            <Route exact path="/reward" component={Reward}></Route>
            <Route exact path="/leavetype" component={LeaveType}></Route>
            <Route exact path="/assets" component={Assets}></Route>
            <Route
              exact
              path="/companylocation"
              component={CompanyLocation}
            ></Route>
            <Route exact path="/employeetype" component={EmployeeType}></Route>
            <Route
              exact
              path="/holidaycalender"
              component={HolidayCalender}
            ></Route>
            <Route
              exact
              path="/companypolicy"
              component={CompanyPolicy}
            ></Route>
            <Route
              exact
              path="/rolesndpermission"
              component={RolesNdPermissions}
            ></Route>
            {/* ----------Employee Settings Routes----------------- */}
            <Route
              exact
              path="/employeeDashboard"
              component={EmployeeDashboard}
            ></Route>
            <Route exact path="/emplist" component={EmployeeSettings} />
            <Route
              exact
              path="/empProfile/:empId"
              component={EmployeeProfileView}
            />
            <Route
              exact
              path="/empRewards/:empId"
              component={EmployeeRewards}
            />
            <Route
              exact
              path="/assignRewards"
              component={AssignRewards}
            ></Route>
            <Route
              exact
              path="/processRewards"
              component={ProcessRewards}
            ></Route>
            <Route exact path="/listProjects" component={ListProjects} />
            <Route
              exact
              path="/viewProject/:projectId"
              component={ViewProject}
            />
            <Route exact path="/taskManagment" component={TaskManagment} />
            <Route
              exact
              path="/viewPreviousProject/:workExperienceId/:employeeId"
              component={ViewPreviousProject}
            ></Route>
            {/* payroll -----------------------------------------------  */}
            <Route exact path="/employeeSalary" component={EmployeeSalary} />
            <Route exact path="/payRollItems" component={PayRollItems} />
            <Route exact path="/processSalary" component={SalaryProcess} />
            <Route exact path="/salaryReport" component={SalaryReport} />
            <Route exact path="/plReport" component={PLReport} />
            <Route exact path="/test3" component={Test3} />
          </React.Suspense>
        </MainLayout>
      </Switch>
      {/* </GAListener> */}
    </Router>
  );
}

export default App;
