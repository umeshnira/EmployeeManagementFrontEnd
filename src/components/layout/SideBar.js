import React, { Fragment, useState, useEffect } from "react";
import //  Collapse
"reactstrap";
import classnames from "classnames";

// admin sidebar to show on click of admin settings.
import AdminSideBar from "./AdminSideBar";
// task sidebar to show on click of tasks.
import TaskSideBar from "./TaskSideBar";

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
const projectsPaths = ["/listProjects", "/viewProject"];
const taskPaths = ["/taskManagment"];

export default function SideBar(props) {
  const [activeSideBar, setActiveSideBar] = useState(window.location.pathname); // take the path name then make that as then tab name.
  const [sideBar, setSideBar] = useState();
  const [isOpenEmpDropDown, setIsOpenEmpDropDown] = useState(false);
  const [isOpenProjectsDropDown, setIsOpenProjectsDropDown] = useState(false);
  // Function ---------------------------
  const toggle = React.useCallback(
    (tab, newTab) => {
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
    }
    if (projectsPaths.includes(window.location.pathname)) {
      setIsOpenProjectsDropDown(true);
    }

    adminSettingPaths.includes(window.location.pathname) &&
      (sideBar = (
        <AdminSideBar
          toggle={(toggleTab) => toggle(toggleTab)}
          activeTab={activeSideBar}
        />
      ));
    taskPaths.includes(window.location.pathname) &&
      (sideBar = <TaskSideBar></TaskSideBar>);
    setSideBar(sideBar);
  }, [activeSideBar, toggle]);

  const handleAdminSettingClick = () => {
    props.history.push("/adminsettings");
  };
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
        {sideBar ? (
          sideBar
        ) : (
          <ul className="list-unstyled components">
            <li className="">
              <a href="/">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/companylocation"
                onClick={() => {
                  // setAdminSettings(true);
                  handleAdminSettingClick();
                }}
              >
                <i className="fas fa-briefcase"></i>
                <span> Admin Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#null"
                onClick={() => setIsOpenEmpDropDown(!isOpenEmpDropDown)}
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-user-tie"></i>
                <span> Employee Settings</span>
              </a>
              {/* <Collapse isOpen={isOpenEmpDropDown} className="pl-4"> */}
              {isOpenEmpDropDown && (
                <ul className="list-unstyled components">
                  <li
                    className={classnames({
                      active: activeSideBar === "/emplist",
                    })}
                  >
                    <a
                      href="/emplist"
                      onClick={() => {
                        toggle("/emplist");
                      }}
                    >
                      <i className="fas fa-briefcase"></i>
                      <span> All Employee</span>
                    </a>
                  </li>
                  <li
                    className={classnames({
                      active: activeSideBar === "/assignRewards",
                    })}
                  >
                    <a
                      href="/assignRewards"
                      onClick={() => {
                        toggle("/assignRewards");
                      }}
                    >
                      <i className="fas fa-briefcase"></i>
                      <span> Assign Rewards</span>
                    </a>
                  </li>
                  <li
                    className={classnames({
                      active: activeSideBar === "/processRewards",
                    })}
                  >
                    <a
                      href="/processRewards"
                      onClick={() => {
                        toggle("/processRewards");
                      }}
                    >
                      <i className="fas fa-briefcase"></i>
                      <span> Process Rewards</span>
                    </a>
                  </li>
                </ul>
              )}

              {/* </Collapse> */}
            </li>
            <li>
              <a
                href="#null"
                onClick={() =>
                  setIsOpenProjectsDropDown(!isOpenProjectsDropDown)
                }
                data-toggle="collapse"
                className="dropdown-toggle"
              >
                <i className="fab fa-product-hunt"></i>
                <span>Projects</span>
              </a>
              {/* <Collapse isOpen={isOpenProjectsDropDown} className="pl-4"> */}
              {isOpenProjectsDropDown && (
                <ul className="list-unstyled components">
                  <li
                    className={classnames({
                      active: activeSideBar === "/listProjects",
                    })}
                  >
                    <a
                      href="/listProjects"
                      onClick={() => {
                        toggle("/listProjects");
                      }}
                    >
                      <i className="fas fa-project-diagram"></i>
                      <span> Projects</span>
                    </a>
                  </li>
                  <li
                    className={classnames({
                      active: activeSideBar === "/taskManagment",
                    })}
                  >
                    <a
                      href="/taskManagment"
                      onClick={() => {
                        toggle("/taskManagment");
                      }}
                    >
                      <i className="fas fa-comment-alt"></i>
                      <span> Task</span>
                    </a>
                  </li>
                </ul>
              )}

              {/* </Collapse> */}
            </li>
          </ul>
        )}
      </nav>
    </Fragment>
  );
}
