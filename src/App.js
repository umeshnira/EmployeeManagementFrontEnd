import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style/index.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import GAListener from "./components/GAListener";
import { MainLayout } from "./components/layout";
import PageSpinner from "./components/common/PageSpinner";
import { Test } from "./pages/test/Test";
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
  EmployeeSettings,
  EmployeeProfileView,
  EmployeeRewards,
} from "./pages/employee/index";
import { ListProjects, ViewProject } from "./pages/projects/index";

// const Designation = React.lazy(() =>
//   import("./pages/adminSettings/designation/Designation")
// );

function App() {
  return (
    <Router history={history}>
      <GAListener>
        <Switch>
          <MainLayout>
            <React.Suspense fallback={<PageSpinner />}>
              {/* home routes */}
              <Route exact path="/" component={""}></Route>
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
              <Route
                exact
                path="/employeetype"
                component={EmployeeType}
              ></Route>
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
              <Route exact path="/test" component={Test} />
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
              <Route exact path="/listProjects" component={ListProjects} />
              <Route
                exact
                path="/viewProject/:projectId"
                component={ViewProject}
              />
            </React.Suspense>
          </MainLayout>
        </Switch>
      </GAListener>
    </Router>
  );
}

export default App;
