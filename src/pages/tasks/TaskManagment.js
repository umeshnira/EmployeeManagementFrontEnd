import React, { useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import {
  DetailsOfTask,
  ListTask,
  AddEditTask,
} from "../../components/tasks/index";
import { Row, Col, Collapse } from "reactstrap";

const TaskManagment = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 604px)" });

  //   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [isOpenDetailsOfTask, setIsOpenDetailsOfTask] = useState(
    isTabletOrMobile ? false : true
  );
  const [isOpenAddEditForm, setIsOpenAddEditForm] = useState(false);
  const [isOpenListTask, setIsOpenListTask] = useState(true);
  //   Function
  // open add edit form.
  const handleOpenAddEditForm = React.useCallback(() => {
    setIsOpenAddEditForm((prevstate) => !prevstate);
    setIsOpenListTask((prevstate) => (isTabletOrMobile ? !prevstate : true));
    setIsOpenDetailsOfTask((prevstate) =>
      isTabletOrMobile ? false : !prevstate
    );
  }, [setIsOpenAddEditForm, isTabletOrMobile]);

  console.log(isTabletOrMobile, isOpenDetailsOfTask);
  return (
    <Row style={{ marginTop: "-20px" }}>
      <Col xs={12} sm={7} md={7} lg={7} className="pr-0 ">
        <Collapse isOpen={isOpenListTask}>
          <ListTask handleOpenAddEditForm={handleOpenAddEditForm}></ListTask>
        </Collapse>
      </Col>
      <Col xs={12} sm={5} md={5} lg={5} className="pl-0 task-chat-view">
        <Fragment>
          <Collapse isOpen={isOpenDetailsOfTask}>
            <DetailsOfTask></DetailsOfTask>
          </Collapse>
          <Collapse isOpen={isOpenAddEditForm}>
            <AddEditTask></AddEditTask>
          </Collapse>
        </Fragment>
      </Col>
    </Row>
  );
};

export default TaskManagment;
