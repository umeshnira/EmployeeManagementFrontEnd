import React, { useState, useEffect, Fragment, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import Calendar from "../../components/common/Calendar";
import {
  DetailsOfTask,
  ListTask,
  AddEditTask,
} from "../../components/tasks/index";
import {
  addTask,
  updateTask,
  delTask,
  onchangeTaskDate,
} from "../../redux/actions/task/task.action";
import { Row, Col, Collapse, Button } from "reactstrap";

const TaskManagment = (props) => {
  const { onchangeTaskDate } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 604px)" });
  //   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const { empTask, taskProjectInfo } = props.empTask;
  const [isOpenDetailsOfTask, setIsOpenDetailsOfTask] = useState(
    isTabletOrMobile ? false : true
  );
  const [isOpenAddEditForm, setIsOpenAddEditForm] = useState(false);
  const [isOpenListTask, setIsOpenListTask] = useState(true);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");
  const addOrEdit = useRef("");

  useEffect(() => {
    let selectedTask = empTask.filter(
      (el) => el.projectId === taskProjectInfo.projectId
    );
    setSelectedTask(selectedTask[0]);
  }, [taskProjectInfo, empTask]);

  // handle selection of a task from ListTask.js
  const handleSelectedTask = React.useCallback(
    (taskData) => {
      // set the task id
      setSelectedTask(taskData);
      // if in mobile browser.
      return isTabletOrMobile
        ? (setIsOpenDetailsOfTask((prevstate) => !prevstate),
          setIsOpenListTask((prevstate) => !prevstate))
        : null;
    },
    [setSelectedTask, isTabletOrMobile]
  );

  // open add form.
  const handleAddEditTaskForm = React.useCallback(
    (whichAction) => {
      addOrEdit.current = whichAction;
      setIsOpenAddEditForm((prevstate) => !prevstate);
      setIsOpenDetailsOfTask((prevstate) =>
        isTabletOrMobile ? false : !prevstate
      );
    },
    [setIsOpenAddEditForm, isTabletOrMobile]
  );

  // handle close form and open list from viewer in mobil.
  const handleClsAddEditTaskForm = React.useCallback(() => {
    handleAddEditTaskForm();
    isTabletOrMobile && setIsOpenListTask(true);
  }, [handleAddEditTaskForm, isTabletOrMobile]);

  // handle submite form ADD UPDATE.
  const handleAddUpdateTask = React.useCallback((formData) => {
    if (addOrEdit.current === "add") {
      props.addTask(formData);
    } else {
      console.log(selectedTask);
      props.updateTask(formData, formData.taskId);
    }
  }, []);

  // handle task delete from ListTask.js
  const handleDelTask = React.useCallback((delId) => {
    props.delTask(delId);
  }, []);

  // onchange the date in calendar , take the date and pass to reducer.
  const handleOnChangeTaskDate = React.useCallback(
    (date) => {
      console.log(date);
      onchangeTaskDate(date);
      handleClsCalendar();
    },
    [onchangeTaskDate]
  );

  // handle click calender icon. ie: open calender, close detailsOfTask.
  const handleOpenCalendar = React.useCallback(() => {
    setIsOpenDetailsOfTask(false);
    setIsOpenAddEditForm(false);
    setIsOpenCalendar(true);
  }, []);

  const handleClsCalendar = React.useCallback(() => {
    setIsOpenCalendar(false);
    setIsOpenDetailsOfTask(true);
  }, []);

  return (
    <Row style={{ marginTop: "-20px" }}>
      <Col xs={12} sm={7} md={7} lg={7} className="pr-0 ">
        <Collapse isOpen={isOpenListTask}>
          <ListTask
            handleAddEditTaskForm={handleAddEditTaskForm}
            handleSelectedTask={handleSelectedTask}
            handleDelTask={handleDelTask}
            handleOpenCalendar={handleOpenCalendar}
            empTask={empTask}
            taskProjectInfo={taskProjectInfo}
          ></ListTask>
        </Collapse>
      </Col>

      <Col xs={12} sm={5} md={5} lg={5} className="pl-0 task-chat-view ">
        <Fragment>
          <Collapse isOpen={isOpenDetailsOfTask}>
            <DetailsOfTask
              handleAddEditTaskForm={handleAddEditTaskForm}
              selectedTask={selectedTask}
            ></DetailsOfTask>
          </Collapse>

          <Collapse isOpen={isOpenAddEditForm}>
            <AddEditTask
              handleEditTaskForm={handleAddEditTaskForm}
              handleAddUpdateTask={handleAddUpdateTask}
              handleClsAddEditTaskForm={handleClsAddEditTaskForm}
              selectedTask={selectedTask}
              taskProjectInfo={taskProjectInfo}
              addOrEdit={addOrEdit.current}
            ></AddEditTask>
          </Collapse>

          <Collapse isOpen={isOpenCalendar}>
            <div className="fixed-header ">
              <div>
                <Button size="sm" color="" className="text-muted">
                  Calender
                </Button>
                <div className="d-inline float-right ">
                  <Button color="" onClick={handleClsCalendar}>
                    <i className="fas fa-times text-muted"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="task-details ">
              <Calendar handleDateSelection={handleOnChangeTaskDate}></Calendar>
            </div>
          </Collapse>
        </Fragment>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  empTask: state.taskReducer,
});

export default connect(mapStateToProps, {
  addTask,
  updateTask,
  delTask,
  onchangeTaskDate,
})(TaskManagment);
