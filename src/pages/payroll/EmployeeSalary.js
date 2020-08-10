import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getEmpList } from "../../redux/actions/employee/employee.action";
import {
  TopRow,
  TableEmplyeeSalary,
  AddEditEmplyeeSalary,
} from "../../components/payRoll/index";

const EmployeeSalary = (props) => {
  const { getEmpList } = props;
  const { empList } = props.empList;
  const [
    isOpenAddEditEmployeeSalary,
    setIsOpenAddEditEmployeeSalary,
  ] = useState(false);

  useEffect(() => {
    getEmpList();
  }, [getEmpList]);

  //   toggle funtion with AddEdit & Grid.
  const toggleAddEditForm = React.useCallback(() => {
    setIsOpenAddEditEmployeeSalary((prevState) => !prevState);
  }, []);
  return (
    <Fragment>
      <TopRow {...props} toggleAddEditForm={toggleAddEditForm}></TopRow>
      {isOpenAddEditEmployeeSalary && (
        <AddEditEmplyeeSalary
          {...props}
          toggleAddEditForm={toggleAddEditForm}
        ></AddEditEmplyeeSalary>
      )}
      {!isOpenAddEditEmployeeSalary && (
        <TableEmplyeeSalary {...props}></TableEmplyeeSalary>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  empList: state.empReducer,
});

export default connect(mapStateToProps, { getEmpList })(EmployeeSalary);
