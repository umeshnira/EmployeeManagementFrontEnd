import React, { useState, Fragment } from "react";
import { Button, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEditTask = React.memo(() => {
  console.log("Add Edit Task");

  const [startDate, setStartDate] = useState(new Date());

  // Functions.
  // handle change date in DOJ
  const handleChangeStartDate = (date) => {
    setStartDate(date);
  };
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
            <Input type="text" placeholder="Task Title" />
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
                  <div className="due-date">
                    <DatePicker
                      selected={startDate}
                      onChange={handleChangeStartDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="task-details ">
              <ul className="personal-info">
                <li>
                  <div className="title">Hours Spent</div>
                  <div className="text">
                    <Input type="text" />
                  </div>
                </li>
                <li>
                  <div className="title">Hours Billable </div>
                  <div className="text text-left">
                    {" "}
                    <Input type="text" />
                  </div>
                </li>
                <li>
                  <div className="title status">Status </div>
                  <div className="text text-left">
                    {" "}
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="new">New</option>
                      <option value="inProgress">In progress</option>
                      <option value="completed">Completed</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </div>
                </li>
              </ul>
              <div className="p-2 ">
                <span className="description-title">Description</span>
                <span className="description w-100">
                  <Input type="textarea" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default AddEditTask;
