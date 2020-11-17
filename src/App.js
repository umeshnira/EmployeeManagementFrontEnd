import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { PrivateRoute } from "./components/layout";
import { MainLayout } from "./components/layout";
import PageSpinner from "./components/common/PageSpinner";
// import Test from "./pages/test/Test";

// Admin dashboard.=========================================
import { AdminDashboard } from "./pages/adminDashboard/index";
// Admin settings.=========================================
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
// Employee.=========================================
import {
  EmployeeDashboard,
  EmployeeSettings,
  EmployeeProfileView,
  EmployeeRewards,
  AssignRewards,
  ProcessRewards,
} from "./pages/employee/index";
// Projects.=========================================
import { ListProjects, ViewProject } from "./pages/projects/index";
// Tasks.=========================================
import { TaskManagment, TaskBoard } from "./pages/tasks/index";
// payroll.=========================================
import {
  EmployeeSalary,
  PayRollItems,
  SalaryProcess,
  SalaryReport,
  PLReport,
} from "./pages/payroll/index";
// Finance.=========================================
import { PettyCash } from "./pages/finance/index";
//  Helpdesk Tickects.==============================
import {
  HelpDeskTickets,
  TicketDetails,
  ListAllTicktes,
  AdminListAllTickets,
} from "./pages/helpDeskTickets";

// Login.====================================
import { Login } from "./pages/loginRegister";
import Test from "./pages/test/Test";

const ViewPreviousProject = React.lazy(() =>
  import("./components/employee/previousProjects/ViewPreviousProject.js")
);

function App() {
  return (
    <Router history={history}>
      {/* <GAListener> */}
      <Switch>
        <Route exact path="/" component={Login} />

        <MainLayout>
          <React.Suspense fallback={<PageSpinner />}>
            {/* home routes */}

            <Route
              exact
              path="/adminDashboard"
              component={AdminDashboard}
            ></Route>
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
            <PrivateRoute
              exact
              path="/employeeDashboard"
              component={EmployeeDashboard}
            ></PrivateRoute>
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
            {/* Task ------------------------------------------------- */}
            <Route exact path="/taskManagment" component={TaskManagment} />
            <Route exact path="/taskboard/:projectId" component={TaskBoard} />

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
            {/* finance -----------------------------------------------  */}
            <Route exact path="/pettyCash" component={PettyCash} />
            {/* helpdesk tickets -----------------------------------------------  */}
            <Route exact path="/helpdesk" component={HelpDeskTickets} />
            <Route
              exact
              path="/ticketDetails/:ticketId"
              component={TicketDetails}
            />
            <Route exact path="/ListAllTicktes" component={ListAllTicktes} />

            <Route
              exact
              path="/adminListAllTickets"
              component={AdminListAllTickets}
            />

            <Route exact path="/test" component={Test} />
          </React.Suspense>
        </MainLayout>
        {/* login -----------------------------------------------  */}
      </Switch>
      {/* </GAListener> */}
    </Router>
  );
}

export default App;
