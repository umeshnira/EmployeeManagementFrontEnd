import React, { useState, useEffect, Fragment, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import {
  DetailsOfTask,
  ListTask,
  AddEditTask,
} from "../../components/tasks/index";
import {
  addTask,
  updateTask,
  delTask,
} from "../../redux/actions/task/task.action";
import { Row, Col, Collapse } from "reactstrap";

const TaskManagment = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 604px)" });
  //   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const { empTask, taskList, taskProjectId } = props.empTask;
  const [isOpenDetailsOfTask, setIsOpenDetailsOfTask] = useState(
    isTabletOrMobile ? false : true
  );
  const [isOpenAddEditForm, setIsOpenAddEditForm] = useState(false);
  const [isOpenListTask, setIsOpenListTask] = useState(true);
  const [selectedTask, setSelectedTask] = useState("");
  const addOrEdit = useRef("");

  useEffect(() => {
    let selectedTask = empTask.filter((el) => el.projectId === taskProjectId)[0]
      .tasks[0];
    setSelectedTask(selectedTask);
  }, [taskProjectId, empTask]);

  //   Function

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
  }, []);

  // handle submite form ADD UPDATE.
  const handleAddUpdateTask = React.useCallback(
    (formData) => {
      if (addOrEdit.current === "add") {
        // let taskArr = empTask.filter((el) => el.projectId === taskProjectId)[0]
        //   .tasks;
        // taskArr.push(formData); // this wil insert into reducer variable but will not rerender.
        props.addTask(formData, taskProjectId);
      } else {
        props.updateTask(formData, taskProjectId);
      }
    },
    [taskProjectId]
  );

  // handle task delete from ListTask.js
  const handleDelTask = React.useCallback((delId) => {
    props.delTask(delId);
  }, []);

  return (
    <Row style={{ marginTop: "-20px" }}>
      <Col xs={12} sm={7} md={7} lg={7} className="pr-0 ">
        <Collapse isOpen={isOpenListTask}>
          <ListTask
            handleAddEditTaskForm={handleAddEditTaskForm}
            handleSelectedTask={handleSelectedTask}
            handleDelTask={handleDelTask}
            taskList={taskList}
            empTask={empTask}
            taskProjectId={taskProjectId}
          ></ListTask>
        </Collapse>
      </Col>
      <Col xs={12} sm={5} md={5} lg={5} className="pl-0 task-chat-view">
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
              addOrEdit={addOrEdit.current}
            ></AddEditTask>
          </Collapse>
        </Fragment>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  empTask: state.taskReducer,
});

export default connect(mapStateToProps, { addTask, updateTask, delTask })(
  TaskManagment
);
