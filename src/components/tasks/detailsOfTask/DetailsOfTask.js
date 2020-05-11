import React, { Fragment } from "react";
import { Button } from "reactstrap";

const DetailsOfTask = React.memo(() => {
  console.log("Details of Task");

  return (
    <Fragment>
      <div className="fixed-header">
        <div>
          <Button size="sm" outline className="secondary">
            <i className="fas fa-check"></i> Mark Completed
          </Button>
          <div className="d-inline float-right ">
            <i className="fas fa-ellipsis-v text-muted"></i>
          </div>
        </div>
      </div>
      <div className="task-details">
        <div className="chat-wrap-inner">
          <div className="chats">
            <h4>Employe Managment</h4>
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
                  <div className="due-date">Mar 26, 2019</div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="task-details ">
              <ul className="personal-info">
                <li>
                  <div className="title">Hours Spent</div>
                  <div className="text">12 hr</div>
                </li>
                <li>
                  <div className="title">Hours Billable </div>
                  <div className="text text-left">8 hr</div>
                </li>
                <li>
                  <div className="title status">Status </div>
                  <div className="text text-left">In Progress</div>
                </li>
              </ul>
              <div className="p-2 ">
                <span className="description-title">Description</span>
                <span className="description">
                  Renowned for its dynamic handling, XE’s performance has been
                  enhanced even further. With upgrades to the suspension and
                  revised JaguarDrive Control, be prepared for a thrilling ride.
                  Renowned for its dynamic handling, XE’s performance has been
                  enhanced even further. With upgrades to the suspension and
                  revised JaguarDrive Control, be prepared for a thrilling ride.
                </span>
              </div>
            </div>
            {/* <div className="task-details d-flex ">
                  <div className="hours-box bg-info">
                    <span className="title">Hours Spent</span>
                    <span className="hour">
                      <h4>12</h4>
                    </span>
                  </div>
                  <div className="hours-box bg-info ml-60">
                    <span className="title"> Hours Billable</span>
                    <span className="hour">
                      <h4> 12 </h4>
                    </span>
                  </div>
                </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default DetailsOfTask;
