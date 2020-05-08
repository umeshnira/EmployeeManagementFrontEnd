// <- ListProjects.js

import React, { useRef, Fragment } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useEffect, useState } from "react";
import DropDownBtn from "../../common/DropDownBtn";
import DropDownActions from "../../common/DropDownActions";

const useProjectsTableEle = (projectList) => {
  const [trow, setTrow] = useState([]);
  const [thead] = useState([
    "Project",
    "Project id",
    "Leader",
    "Team",
    "Deadline",
    "Status",
    "Action",
  ]);

  const handleEditProject = (project) => {
    console.log(project);
  };

  useEffect(() => {
    let trow = projectList.map((project, i) => {
      console.log("in usePRoject table ele hook");

      return {
        Project: (
          <a href="#" className="project-name">
            {project.projectName}
          </a>
        ),
        "Project id": project.projectId,
        Leader: project.projectLeaders.map((leader, i) => (
          <h2 className="table-avatar">
            <img
              className="profile-img-table"
              alt=""
              src={require(`../../../img/employee/${leader.leaderImg}`)}
            />
          </h2>
        )),
        Team: (
          <div style={{ width: "150px" }}>
            {project.projectTeam.map((member, i) => (
              <h2 key={i} className="table-avatar">
                <img
                  className="profile-img-table"
                  alt=""
                  src={require(`../../../img/employee/${member.memberImg}`)}
                />
              </h2>
            ))}
            ,
          </div>
        ),
        Deadline: <div>{project.endDate} </div>,
        Status: (
          <div style={{ width: "150px" }}>
            <DropDownBtn
              selectedOpt={project.status}
              dropDownOption={[
                {
                  icon: <i className="far fa-dot-circle text-danger"></i>,
                  option: "New",
                },
                {
                  icon: <i className="far fa-dot-circle text-warning"></i>,
                  option: "In Progress",
                },
                {
                  icon: <i className="far fa-dot-circle text-success"></i>,
                  option: "Completed",
                },
              ]}
              // handleDropDownOnChange={props.handleDropDownOnChange}
            ></DropDownBtn>
          </div>
        ),
        Action: (
          <div>
            <DropDownActions
              selectedOpt={project.status}
              dropDownOption={[
                {
                  action: "Edit",
                  handleAction: () => handleEditProject(project),
                },
                {
                  action: "Delete",
                  handleAction: () => handleEditProject(project),
                },
              ]}
            ></DropDownActions>
          </div>
        ),
      };
    });

    setTrow(trow);
  }, [projectList]);

  // let trow = projectList.map((project, i) => {
  //   return {
  //     Project: (
  //       <a href="#" className="project-name">
  //         {project.projectName}
  //       </a>
  //     ),
  //     "Project id": project.projectId,
  //     Leader: project.projectLeaders.map((leader, i) => (
  //       <h2 className="table-avatar">
  //         <img
  //           className="profile-img-table"
  //           alt=""
  //           src={require(`../../../img/employee/${leader.leaderImg}`)}
  //         />
  //       </h2>
  //     )),
  //     Team: (
  //       <div style={{ width: "150px" }}>
  //         {project.projectTeam.map((member, i) => (
  //           <h2 key={i} className="table-avatar">
  //             <img
  //               className="profile-img-table"
  //               alt=""
  //               src={require(`../../../img/employee/${member.memberImg}`)}
  //             />
  //           </h2>
  //         ))}
  //         ,
  //       </div>
  //     ),
  //     Deadline: <div>{project.endDate} </div>,
  //     Status: (
  //       <div style={{ width: "150px" }}>
  //         <DropDownBtn
  //           selectedOpt={project.status}
  //           dropDownOption={[
  //             {
  //               icon: <i className="far fa-dot-circle text-danger"></i>,
  //               option: "New",
  //             },
  //             {
  //               icon: <i className="far fa-dot-circle text-warning"></i>,
  //               option: "In Progress",
  //             },
  //             {
  //               icon: <i className="far fa-dot-circle text-success"></i>,
  //               option: "Completed",
  //             },
  //           ]}
  //           // handleDropDownOnChange={props.handleDropDownOnChange}
  //         ></DropDownBtn>
  //       </div>
  //     ),
  //     Action: (
  //       <Dropdown
  //         isOpen={
  //           // true
  //           dropdownOpen
  //           // setDropdownOpt.current === i ? dropdownOpen : false
  //         }
  //         // toggle={() => toggle(i)}
  //         toggle={toggle}
  //       >
  //         <DropdownToggle color="">
  //           <i className="fas fa-ellipsis-v text-muted"></i>
  //         </DropdownToggle>
  //         <DropdownMenu
  //           right
  //           modifiers={{
  //             setMinWidth: {
  //               enabled: true,
  //               order: 890,
  //               fn: (data) => {
  //                 return {
  //                   ...data,
  //                   styles: {
  //                     ...data.styles,
  //                     minWidth: "100px",
  //                   },
  //                 };
  //               },
  //             },
  //           }}
  //         >
  //           <DropdownItem
  //           //  onClick={() => handleProjectEdit(project)}
  //           >
  //             Edit
  //           </DropdownItem>
  //           <DropdownItem>Delete</DropdownItem>
  //         </DropdownMenu>
  //       </Dropdown>
  //     ),
  //   };
  // });

  return { thead, trow };
};

export default useProjectsTableEle;
