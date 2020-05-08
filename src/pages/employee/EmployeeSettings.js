import React, { Fragment, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Container, Collapse } from "reactstrap";
import {
  EmployeeToRow,
  EmployeeCard,
  EmployeeAddEditForm,
  useEmpTableEle,
} from "../../components/employee/index";
import {
  getEmpList,
  addEmp,
} from "../../redux/actions/employee/employee.action";
import TableWithSortPagtn from "../../components/common/TableWithSortPagtn";
// require("bootstrap/less/bootstrap.less");

const EmployeeList = (props) => {
  const { empList } = props.empList;
  const [searchArr, setSearchArr] = useState(empList);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const [isOpenEmpListCard, setIsOpenEmpListCard] = useState(true);
  const [isOpenEmpGridView, setIsOpenEmpGridView] = useState(false);
  const [isOpenSerachBox, setIsOpenSerachBox] = useState(false);

  // customer hooks to gird view of employee,
  // if search arr is empty then map from list else map from searched arr.
  const { thead, trow } = useEmpTableEle(
    searchArr.length > 0 ? searchArr : empList
  );

  useEffect(() => {
    props.getEmpList();
  }, []);

  // -------------Functions
  // handle click in EmployeeAddForm.js 'add'.
  const handleAddEmp = React.useCallback((empData) => {
    console.log(empData);
    props.addEmp(empData);
  }, []);

  // handle click in EmployeeEditForm.js 'update'.
  const handleUpdateEmp = React.useCallback((empData) => {
    console.log(empData);
    // props.addEmp(empData);
  }, []);

  // handle click in EmployeeCard.js
  const handleEmpEdit = React.useCallback(
    (emp) => {
      setSelectedEmployee(emp);
      setIsOpenAddForm((prevState) => !prevState);
      setIsOpenEmpListCard(false);
      setIsOpenEmpGridView(false);
    },
    [setSelectedEmployee]
  );

  // open add form.

  const handleOpenAddForm = React.useCallback(() => {
    setIsOpenAddForm((prevState) => !prevState);
    setIsOpenEmpGridView(false);
    setIsOpenEmpListCard(false);
    setSelectedEmployee(null);
  }, [setIsOpenAddForm, setIsOpenEmpListCard]);

  const toogleFromEmployeeAddForm = React.useCallback(() => {
    setIsOpenAddForm((prevState) => !prevState);
    setIsOpenEmpListCard((prevState) => !prevState);
    setSelectedEmployee("");
  }, [setIsOpenAddForm, setIsOpenEmpListCard]);

  const showGridView = React.useCallback(() => {
    setIsOpenEmpListCard(false);
    setIsOpenEmpGridView(true);
  }, [setIsOpenEmpListCard]);

  const showEmpCard = React.useCallback(() => {
    setIsOpenEmpGridView(false);
    setIsOpenEmpListCard(true);
  }, [setIsOpenEmpGridView]);

  // search texh box show.
  const searchBox = React.useCallback(() => {
    setIsOpenSerachBox((prevState) => !prevState);
  }, [setIsOpenSerachBox]);
  // search filter.

  const serachEmpList = React.useCallback(
    (whatSearch, searchVal) => {
      let search = "";
      if (whatSearch === "empName") {
        search = "empName";
      } else if (whatSearch === "designation") {
        search = "designation";
      }
      let searchArr = empList.filter((ele) => {
        console.log(ele.value);

        return (
          ele.value[search].toLowerCase().indexOf(searchVal.toLowerCase()) !==
          -1
        );
      });
      setSearchArr(searchArr);
    },
    [empList]
  );

  console.log("rendering");
  return (
    <Fragment>
      <Container>
        {/* Top Row.--------------------------------- */}
        <EmployeeToRow
          serachEmpList={serachEmpList}
          isOpenSerachBox={isOpenSerachBox}
          isOpenEmpGridView={isOpenEmpGridView}
          isOpenEmpListCard={isOpenEmpListCard}
          showEmpCard={showEmpCard}
          showGridView={showGridView}
          searchBox={searchBox}
        ></EmployeeToRow>
        {/* <hr></hr> */}

        {/* Emp Card list.--------------------------- */}
        <Collapse isOpen={isOpenEmpListCard} className="mt-3">
          <EmployeeCard
            allEmpList={searchArr.length > 0 ? searchArr : empList}
            handleOpenAddForm={handleOpenAddForm}
            handleOnclickEdit={handleEmpEdit}
          />
        </Collapse>

        {/* Emp Grid View.--------------------------- */}
        <Collapse isOpen={isOpenEmpGridView}>
          <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
        </Collapse>

        {/* Add & edit employee form.------------------------ */}
        <Collapse isOpen={isOpenAddForm}>
          <EmployeeAddEditForm
            handleAddEmp={handleAddEmp}
            handleUpdateEmp={handleUpdateEmp}
            toggle={toogleFromEmployeeAddForm}
            selectedEmployee={selectedEmployee}
          ></EmployeeAddEditForm>
        </Collapse>
        {/* Edit employee form.------------------------ */}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  empList: state.empReducer,
});

export default connect(mapStateToProps, { getEmpList, addEmp })(EmployeeList);
