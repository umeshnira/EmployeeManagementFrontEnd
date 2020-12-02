import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import { checkLogin } from "../../redux/actions/loginAuth/LoginAuth";

// admin sidebar to show on click of admin settings.
import AdminSettingsSideBar from "./AdminSettingsSideBar";
// task sidebar to show on click of tasks.
import TaskSideBar from "./TaskSideBar";
// From index.
import { EmployeeSideBar, AdminSideBar } from "./index";

const user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : 0;

const role = user.RoleName;
// const role = "admin";
// const role = "developer";

const adminSettingPaths = [
  "/companylocation",
  "/department",
  "/designation",
  "/workprimise",
  "/employeetype",
  "/reward",
  "/leavetype",
  "/holidaycalender",
  "/companypolicy",
  "/rolesndpermission",
  "/assets",
];
const empSettingsPaths = ["/emplist", "/assignRewards", "/processRewards"];
const projectsPaths = ["/listProjects", "/viewProject", "/taskboard"];
const taskPaths = ["/taskManagment"];
const payRoll = [
  "/employeeSalary",
  "/payRollItems",
  "/processSalary",
  "/salaryReport",
  "/plReport",
];
const finance = ["/pettyCash", "/giftVoucher", "/invoice"];
const helpdesk = [
  "/helpdesk",
  "/ticketDetails",
  "/ListAllTicktes",
  "/adminListAllTickets",
];

function SideBar(props) {
  const { checkLogin } = props;
  const { loginUser, login } = props.loginUser;
  const [activeSideBar, setActiveSideBar] = useState(window.location.pathname); // take the path name then make that as then tab name.
  const [changedSideBar, setChangedSideBar] = useState(null);
  const [isOpenEmpDropDown, setIsOpenEmpDropDown] = useState(false);
  const [isOpenProjectsDropDown, setIsOpenProjectsDropDown] = useState(false);
  const [isOpenPayRroll, setIsOpenPayRoll] = useState(false);
  const [isOpenFinance, setIsOpenFinance] = useState(false);
  const [isOpenHelpdesk, setIsOpenHelpdesk] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  // Function ---------------------------
  const toggle = React.useCallback(
    (tab) => {
      console.log(tab);
      if (activeSideBar !== tab) {
        setActiveSideBar(tab);
      }
    },
    [activeSideBar]
  );

  useEffect(() => {
    let sideBar = null;
    if (empSettingsPaths.includes(window.location.pathname)) {
      setIsOpenEmpDropDown(true);
    } else if (projectsPaths.includes(window.location.pathname)) {
      setIsOpenProjectsDropDown(true);
    } else if (payRoll.includes(window.location.pathname)) {
      setIsOpenPayRoll(true);
    } else if (finance.includes(window.location.pathname)) {
      setIsOpenFinance(true);
    } else if (helpdesk.includes(window.location.pathname)) {
      setIsOpenHelpdesk(true);
    }

    adminSettingPaths.includes(window.location.pathname) &&
      (sideBar = (
        <AdminSettingsSideBar
          toggle={(toggleTab) => toggle(toggleTab)}
          activeTab={activeSideBar}
        />
      ));

    taskPaths.includes(window.location.pathname) &&
      (sideBar = <TaskSideBar></TaskSideBar>);
    setChangedSideBar(sideBar);
  }, [activeSideBar, toggle]);

  const handleAdminSettingClick = () => {
    props.history.push("/adminsettings");
  };

  // handle open project dropdown.
  const handleOpenProject = () => {
    setIsOpenProjectsDropDown((prevState) => !prevState);
  };

  // handle open Employee settings dropdown.
  const handleOpenEmployeeSettings = () => {
    setIsOpenEmpDropDown((prevState) => !prevState);
  };

  // handle open Helpdesk dropdown.
  const handleOpenHelpDesk = () => {
    setIsOpenHelpdesk((prevState) => !prevState);
  };

  // handle open Payroll dropdown.
  const handleOpenPayRoll = () => {
    setIsOpenPayRoll((prevState) => !prevState);
  };

  // handle open Finance dropdown.
  const handleOpenFinance = () => {
    setIsOpenFinance((prevState) => !prevState);
  };
  console.log(role);
  return (
    <Fragment>
      <nav id="sidebar" className={props.sideBar ? "active" : ""}>
        <div className="sidebar-header text-center">
          <h3>
            {/* <i className="fas fa-2x fa-star-of-david"></i> */}
            <img
              src={require("../../img/sideBarLogoName1.png")}
              alt="no logo"
              style={{
                height: "auto",
                width: "85%",
                borderRadius: "8px  ",
              }}
            ></img>
          </h3>
          <strong>
            <img
              src={require("../../img/sideBarLogo.png")}
              alt="no logo"
              style={{
                height: "auto",
                width: "90%",
                borderRadius: "8px",
              }}
            ></img>
          </strong>
        </div>
        {loginUser !== null &&
          loginUser.RoleName === "Admin" &&
          changedSideBar === null && (
            <AdminSideBar
              loginUser={loginUser}
              activeSideBar={activeSideBar}
              toggle={toggle}
              handleProject={{
                func: handleOpenProject,
                state: isOpenProjectsDropDown,
              }}
              handleEmployeeSetting={{
                func: handleOpenEmployeeSettings,
                state: isOpenEmpDropDown,
              }}
              handlePayRoll={{
                func: handleOpenPayRoll,
                state: isOpenPayRroll,
              }}
              handleFinance={{
                func: handleOpenFinance,
                state: isOpenFinance,
              }}
            ></AdminSideBar>
          )}
        {loginUser !== null &&
          loginUser.RoleName !== "Admin" &&
          changedSideBar === null && (
            <EmployeeSideBar
              loginUser={loginUser}
              handleProject={{
                func: handleOpenProject,
                state: isOpenProjectsDropDown,
              }}
              handleHelpDesk={{
                func: handleOpenHelpDesk,
                state: isOpenHelpdesk,
              }}
              activeSideBar={activeSideBar}
              toggle={toggle}
            ></EmployeeSideBar>
          )}
      </nav>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  loginUser: state.loginAuthReducer,
});

export default connect(mapStateToProps, { checkLogin })(SideBar);
