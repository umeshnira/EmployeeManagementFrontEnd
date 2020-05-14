// <- TaskManagment.js
import React, { useState, Fragment } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const active = {
  background: "rgba(114, 111, 111, 0.048)",
};
const ListTask = React.memo(
  ({
    handleAddEditTaskForm,
    handleSelectedTask,
    handleDelTask,
    handleOpenCalendar,
    empTask,
    taskProjectInfo,
  }) => {
    console.log("List Task");
    const [activeTask, setActiveTask] = useState(0);

    const handleOnclickSelectedTask = React.useCallback((task, i) => {
      setActiveTask(i);
      handleSelectedTask(task);
    }, []);

    return (
      <Fragment>
        <div className="fixed-header">
          <div>
            <Button
              size="sm"
              outline
              className="secondary"
              onClick={() => handleAddEditTaskForm("add")}
            >
              Add Task
            </Button>
            <div className="d-inline float-right ">
              <Button color="" onClick={handleOpenCalendar}>
                <i className="fas fa-calendar-alt text-muted"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <ListGroup className="task-list ">
            {empTask
              .filter(
                (el) => el.projectId === taskProjectInfo.projectId
                //  &&
                // new Date(el.createdDate).getDate() -
                //   new Date(el.createdDate).getMonth() -
                //   new Date(el.createdDate).getFullYear() ===
                //   new Date().getDate() -
                //     new Date().getMonth() -
                //     new Date().getFullYear()
              )
              .map((tasks, i) => (
                <ListGroupItem
                  key={i}
                  onClick={() => handleOnclickSelectedTask(tasks, i)}
                  style={i === activeTask ? active : null}
                >
                  <div className="task-container ">
                    <span className="task-check">
                      <i className="fas fa-check  project-task-icon"></i>
                    </span>
                    <span className="task-label">{tasks.taskTitle}</span>
                    <span className="task-action-btn task-btn-right">
                      <span
                        className="action-circle large task-assign"
                        title="Assign"
                      >
                        <i className="fas fa-user  project-task-icon"></i>
                      </span>
                      <span
                        className="action-circle large delete-btn"
                        title="Delete Task"
                        onClick={() => handleDelTask(tasks.taskId)}
                      >
                        <i className="fas fa-trash project-task-icon"></i>
                      </span>
                    </span>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </div>
      </Fragment>
    );
  }
);

export default ListTask;
