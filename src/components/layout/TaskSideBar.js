import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  getEmpTask,
  getTaskProjectId,
} from "../../redux/actions/task/task.action";

const TaskSideBar = (props) => {
  const { empTask } = props.empTask;
  const [activeProject, setActiveProject] = useState(0);
  useEffect(() => {
    let empId = 29;
    props.getEmpTask(empId);
  }, []);

  //   Function .
  // click projects.
  const handleSelectProject = React.useCallback((projectId, i) => {
    props.getTaskProjectId(projectId); // keep the selected project id in reducer to filter the task.
    setActiveProject(i);
  }, []);
  return (
    <Fragment>
      <ul className="list-unstyled components">
        <li className="">
          <a href="/">
            <i className="fas fa-home"></i>
            <span>Back Home</span>
          </a>
        </li>
        <hr></hr>
        {empTask
          ? empTask.map((projects, i) => (
              <li
                style={{ padding: "-10px" }}
                onClick={() => handleSelectProject(projects.projectId, i)}
                className={classnames({ active: activeProject === i })}
              >
                <a href="#">
                  <span>- {projects.projectName}</span>
                </a>
              </li>
            ))
          : null}
      </ul>
    </Fragment>
  );
};

TaskSideBar.propTypes = {
  empTask: PropTypes.array,
};

const mapStateToProps = (state) => ({
  empTask: state.taskReducer,
});

export default connect(mapStateToProps, { getEmpTask, getTaskProjectId })(
  TaskSideBar
);
