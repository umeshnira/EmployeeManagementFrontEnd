import React, { Fragment, useState } from "react";
import { Row, Col, Container, Card, Collapse } from "reactstrap";
import Form from "./Form";

export default function Department() {
  const [dept, setDept] = useState(null);
  // const [formData, setFormData] = useState(null);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenDeparmentTiles, setIsOpenDeparmentTiles] = useState(true);

  const [selectedDept, setSelectedDept] = useState("");
  const [departmentArray, setDepartmentArray] = useState([
    {
      department: "Developing",
    },
    {
      department: "Testing",
    },
    {
      department: "Sales",
    },
    {
      department: "HR & Adminsgtration",
    },
    {
      department: "Finance",
    },
  ]);

  // Functions ===============

  // toggle between th eform a tiles.
  const toggle = () => {
    setIsOpenDeparmentTiles(!isOpenDeparmentTiles);
    setIsOpenForm(!isOpenForm);
    console.log("isOpenDeparmentTiles", isOpenDeparmentTiles);
    console.log("isOpenform", isOpenForm);
  };

  // on edit the clicked department info should move to form.
  // const handleEditDepartment = (department, id) => {
  //   let formData = (
  //     <Form
  //       department=""
  //       handleOnchangeDepartment={(val) => setDept(val)}
  //       handleSubmit={handlAddDepartment}
  //       handleToggleForm={toggle}
  //       button={"Update"}
  //     />
  //   );

  //   setFormData(formData);
  // };

  // add department.
  const handlAddDepartment = (e) => {
    e.preventDefault();
    console.log(dept);

    setDepartmentArray((prevState) => prevState.concat({ department: dept }));
    // console.log("Add department");
    setIsOpenForm(!isOpenForm);
    setIsOpenDeparmentTiles(!isOpenDeparmentTiles);
  };

  // Update department.
  const handleUpdateDepartment = (e) => {
    console.log("Update department");
  };

  return (
    <Fragment>
      <Container>
        <Row className="">
          <Col>
            <h3>Department</h3>
          </Col>
        </Row>

        <hr></hr>
        <Row className="admin-settings py-3">
          {!isOpenForm ? (
            <Col sm={12} className="">
              <Collapse isOpen={isOpenDeparmentTiles}>
                <Row>
                  <Col lg={3} md={6} sm={6} xs={12} className="mb-3 ">
                    <Card
                      body
                      inverse
                      className="card-tile"
                      onClick={() => {
                        setSelectedDept("");
                        toggle();
                      }}
                    >
                      <i className="fas fa-plus  text-center "></i>
                    </Card>
                  </Col>
                  {departmentArray.map((val, i) => {
                    return (
                      <Col
                        lg={3}
                        md={6}
                        sm={6}
                        xs={12}
                        className="mb-3"
                        key={i}
                      >
                        <Card
                          body
                          inverse
                          className="card-tile text-center"
                          onClick={() => {
                            toggle();
                            setSelectedDept(val);
                            // handleEditDepartment(val.department, i);
                          }}
                        >
                          <span className="text-left">{val.department}</span>
                          <i
                            className="fas fa-times "
                            // onClick={() => handleEditLocation(val)}
                            style={{
                              position: "absolute",
                              left: "78%",
                              right: 0,
                              top: 22,
                              bottom: 0,
                              cursor: "pointer",
                            }}
                          ></i>{" "}
                        </Card>
                      </Col>
                    );
                  })}
                  {/* </Col> */}
                </Row>
              </Collapse>
            </Col>
          ) : null}

          <Collapse isOpen={isOpenForm}>
            {selectedDept ? (
              <Form
                department={selectedDept}
                handleOnchangeDepartment={(val) => setDept(val)}
                handleSubmit={handleUpdateDepartment}
                handleToggleForm={toggle}
                button={"Update"}
              ></Form>
            ) : (
              <Form
                department=""
                handleOnchangeDepartment={(val) => setDept(val)}
                handleSubmit={handlAddDepartment}
                handleToggleForm={toggle}
                button={"Add"}
              ></Form>
            )}
          </Collapse>
        </Row>
      </Container>
    </Fragment>
  );
}
