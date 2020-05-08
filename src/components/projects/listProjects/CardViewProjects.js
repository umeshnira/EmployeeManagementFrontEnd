import React, { Fragment, useState, useRef } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DropDownActions from "../../common/DropDownActions";

const CardViewProjects = React.memo((props) => {
  const { projectList, handleProjectEdit } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setDropdownOpt = useRef(0); // to not to open othe dropdown opt, when 3dots clicked

  const toggle = React.useCallback((whichProject) => {
    setDropdownOpen((prevState) => !prevState);
    setDropdownOpt.current = whichProject;
  }, []);
  return (
    <Fragment>
      {console.log("card projects")}

      {projectList.map((project, i) => (
        <Col key={i} md={4} sm={6} xl={3}>
          <Card className="project-crad mb-4">
            <CardBody>
              <CardTitle>
                <h4 className="project-title">
                  <a href={`/viewProject/${project.projectId}`}>
                    {project.projectName}
                  </a>
                  <div className="dropDown-action">
                    <DropDownActions
                      selectedOpt={project.status}
                      dropDownOption={[
                        {
                          action: "Edit",
                          handleAction: () => handleProjectEdit(project),
                        },
                        {
                          action: "Delete",
                          // handleAction: () => handleEditProject(project),
                        },
                      ]}
                    ></DropDownActions>
                    {/* <Dropdown
                      isOpen={
                        // true
                        setDropdownOpt.current === i ? dropdownOpen : false
                      }
                      toggle={() => toggle(i)}
                      // onClick={() => toggle(i)}
                    >
                      <DropdownToggle color="">
                        <i className="fas fa-ellipsis-v text-muted"></i>
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        modifiers={{
                          setMinWidth: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  minWidth: "100px",
                                },
                              };
                            },
                          },
                        }}
                      >
                        <DropdownItem
                          onClick={() => handleProjectEdit(project)}
                        >
                          Edit
                        </DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown> */}
                  </div>
                </h4>
              </CardTitle>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">1</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">9</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <span className="text-muted mt-3 project-description">
                {project.projectDescp.substring(0, 180) + "..."}
              </span>
              <div className="mt-3">
                <h4 className="project-title mb-1">Deadline :</h4>
                <div className="text-muted"> {project.endDate}</div>
              </div>
              <div className="mt-3">
                <h4 className="project-title">Project Leader :</h4>
                <ul className="team-members">
                  {project.projectLeaders.map((leader, i) => (
                    <li key={i}>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img
                          alt=""
                          src={require(`../../../img/employee/${leader.leaderImg}`)}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <h4 className="project-title">Team Members :</h4>
                <ul className="team-members">
                  {project.projectTeam.map((member, i) => (
                    <li key={i}>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img
                          alt=""
                          src={require(`../../../img/employee/${member.memberImg}`)}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 mb-1">
                Progress
                <span className="text-success float-right">40%</span>
              </div>
              <Progress value="40" style={{ height: "6px" }}></Progress>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
});

export default CardViewProjects;
