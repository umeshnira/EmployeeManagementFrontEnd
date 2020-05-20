import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { projectNamesOnly } from "../../datas/projects";
import SelectBoxSearch from "../common/SelectBoxSearch";

import {
  getEmpTask,
  getTaskProjectId,
  addProjectFromTask,
} from "../../redux/actions/task/task.action";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const TaskSideBar = (props) => {
  const { getEmpTask, getTaskProjectId, addProjectFromTask } = props;
  const { projectNames } = props.empTask;
  const [activeProject, setActiveProject] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = React.useCallback(
    () => setModal((prevState) => !prevState),
    []
  );

  useEffect(() => {
    let empId = 29;
    getEmpTask(empId);
  }, [getEmpTask]);

  //   Function .
  // click projects.
  const handleSelectProject = React.useCallback(
    (projectId, projectName, i) => {
      getTaskProjectId(projectId, projectName); // keep the selected project id in reducer to filter the task.
      setActiveProject(i);
    },
    [getTaskProjectId]
  );

  // handle the project name from the selection.
  const handleGetProjectName = React.useCallback((projectName) => {
    setProjectName(projectName.value);
  }, []);

  // handle submite project name.
  const handleSubmitProjectName = React.useCallback(
    (e) => {
      e.preventDefault();
      addProjectFromTask(projectName);
      toggle();
    },
    [addProjectFromTask, projectName, toggle]
  );

  return (
    <Fragment>
      <ul className="list-unstyled components">
        <li className="">
          <a href="/">
            <i className="fas fa-home"></i>
            <span>Back Home</span>
          </a>
        </li>
        {/* <hr></hr> */}

        <li className="">
          <a href={"#project"} onClick={toggle}>
            <i className="fa fa-plus"></i>
            <span>
              Project
              {/* <i className="fas fa-plus float-right "></i> */}
            </span>
          </a>
        </li>
        {projectNames.map((projects, i) => (
          <li
            key={i}
            style={{ padding: "-10px" }}
            onClick={() =>
              handleSelectProject(projects.projectId, projects.projectName, i)
            }
            className={classnames({ active: activeProject === i })}
          >
            <a href="#projectName">
              <span>- {projects.projectName}</span>
            </a>
          </li>
        ))}
      </ul>
      <div>
        <Modal isOpen={modal} toggle={toggle} size="sm">
          <ModalHeader toggle={toggle}>Add Project</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Project Name</Label>
                <SelectBoxSearch
                  onChange={handleGetProjectName}
                  options={projectNamesOnly}
                ></SelectBoxSearch>
              </FormGroup>
              <Button color="primary" onClick={handleSubmitProjectName}>
                Add
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  empTask: state.taskReducer,
});

export default connect(mapStateToProps, {
  getEmpTask,
  getTaskProjectId,
  addProjectFromTask,
})(TaskSideBar);
