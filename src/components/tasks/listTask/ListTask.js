import React, { Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const ListTask = React.memo(({ toggle, handleOpenAddEditForm }) => {
  console.log("List Task");
  return (
    <Fragment>
      <div className="fixed-header">
        <div>
          <Button
            size="sm"
            outline
            className="secondary"
            onClick={handleOpenAddEditForm}
          >
            Add Task
          </Button>
          <div className="d-inline float-right ">
            <i className="fas fa-chevron-circle-down text-muted"></i>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <ListGroup className="task-list">
          {["1", "2", "3", "4"].map((tasks, i) => (
            <ListGroupItem key={i}>
              <div className="task-container">
                <span className="task-check">
                  <i className="fas fa-check  project-task-icon"></i>
                </span>
                <span className="task-label">
                  Appointment booking with payment gateway
                </span>
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
                  >
                    <i className="fas fa-trash  project-task-icon"></i>
                  </span>
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </Fragment>
  );
});

export default ListTask;
