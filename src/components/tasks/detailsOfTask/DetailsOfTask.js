// <- TaskManagment.js
import React, { Fragment } from "react";
import { Button } from "reactstrap";

const DetailsOfTask = React.memo(({ selectedTask, handleAddEditTaskForm }) => {
  console.log("Details of Task");

  return (
    <Fragment>
      <div className="fixed-header">
        <div>
          <Button size="sm" outline className="secondary">
            <i className="fas fa-check"></i> Mark Completed
          </Button>
          <div className="d-inline float-right ">
            <Button color="" onClick={() => handleAddEditTaskForm("edit")}>
              <i className="fas fa-edit text-muted"></i>
            </Button>
          </div>
        </div>
      </div>
      {selectedTask ? (
        <div className="task-details ">
          <div className="chat-wrap-inner">
            <div className="chats ">
              <h4>{selectedTask.taskTitle}</h4>
              <div className="task-header">
                <div className="assignee-info">
                  <div className="avatar">
                    <img
                      alt=""
                      src={require("../../../img/employee/avatar-01.jpg")}
                    />
                  </div>
                  <div className="assigned-info">
                    <div className="task-head-title">Assigned To</div>
                    <div className="task-assignee">John Doe</div>
                  </div>
                </div>
                <div className="task-due-date">
                  <div className="due-icon">
                    <span>
                      <i className="fas fa-calendar-alt text-muted"></i>
                    </span>
                  </div>
                  <div className="due-info">
                    <div className="task-head-title">Created</div>
                    <div className="due-date">{selectedTask.createdDate}</div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="task-data ">
                <ul className="personal-info">
                  <li>
                    <div className="title">Hours Spent</div>
                    <div className="text">{selectedTask.hourSpent} hr</div>
                  </li>
                  <li>
                    <div className="title">Hours Billable </div>
                    <div className="text ">{selectedTask.hourBillable} hr</div>
                  </li>
                  <li>
                    <div className="title status">Status </div>
                    <div className="text">{selectedTask.status}</div>
                  </li>
                </ul>
                <div className="p-2 ">
                  <span className="description-title">Description</span>
                  <span className="description">
                    {selectedTask.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No Task"
      )}
    </Fragment>
  );
});

export default DetailsOfTask;
