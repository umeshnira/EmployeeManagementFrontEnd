import React, { Fragment, useState } from "react";
import {
  Row,
  Col,
  Alert,
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Table,
} from "reactstrap";
import Form from "./Form";

const location = [
  {
    address: "Trivandrum",
    phoneNo: "+9128282828",
    pin: "655431",
    landMark: "opp to lulu",
  },
  {
    address: "kocki",
    phoneNo: "+9168282828",
    pin: "655431",
    landMark: "opp to lulu",
  },
  {
    address: "kozhikode",
    phoneNo: "+9168282828",
    pin: "655431",
    landMark: "opp to lulu",
  },
];

export default function CompanyLocation() {
  const [isopenAddEditForm, setIsOpenAddEditForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleEditLocation = React.useCallback(
    (companyLocation) => {
      console.log(companyLocation);
      setSelectedCompany(companyLocation);
      setIsOpenAddEditForm((prevState) => !prevState);
    },
    [setIsOpenAddEditForm]
  );

  // add click func.
  const handleAddClick = React.useCallback(() => {
    setIsOpenAddEditForm((prevState) => !prevState);
  }, [setIsOpenAddEditForm]);

  // toogle form and card view from add/edit form.
  const toogleFromAddEdit = React.useCallback(() => {
    setIsOpenAddEditForm((prevState) => !prevState);
    setSelectedCompany("");
  }, [setIsOpenAddEditForm]);

  // add location.
  const handleAddCompanyLocation = (fromData) => {
    console.log("add location", fromData);
  };
  // update location.
  const handleUpdateCompanyLocation = (e) => {
    console.log("update location");
  };

  return (
    <Fragment>
      <Container>
        <Row className="companyLocation">
          <Col>
            <h3>Company Location</h3>
          </Col>
          <Col>
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={handleAddClick}
            >
              {isopenAddEditForm ? (
                <i className="fas fa-times "></i>
              ) : (
                <i className="fas fa-plus "></i>
              )}
            </Button>
          </Col>
        </Row>

        <hr></hr>
        <Row className="admin-settings py-3">
          {isopenAddEditForm ? (
            <Form
              selectedCompany={selectedCompany}
              handleAddCompanyLocation={handleAddCompanyLocation}
              handleUpdateCompanyLocation={handleUpdateCompanyLocation}
              toogleFromAddEdit={toogleFromAddEdit}
            />
          ) : (
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Pin</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {location.map((val, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                        {val.address}, LandMark : {val.landMark}
                      </td>
                      <td>{val.phoneNo}</td>
                      <td>{val.pin}</td>
                      <td>
                        <i
                          className="fas fa-edit "
                          onClick={() => handleEditLocation(val)}
                        ></i>
                        &nbsp;
                        <i className="fas fa-trash "></i>
                      </td>
                    </tr>
                  );
                })}
                {/* <Card
                      body
                      inverse
                      className="admin-settings-card"
                      style={{ position: "relative" }}
                    >
                      <i
                        className="fas fa-edit "
                        onClick={() => handleEditLocation(val)}
                        style={{
                          position: "absolute",
                          left: "78%",
                          right: 0,
                          top: 52,
                          bottom: 0,
                          cursor: "pointer",
                        }}
                      ></i>
                      <i
                        className="fas fa-trash "
                        style={{
                          position: "absolute",
                          left: "90%",
                          right: 0,
                          top: 52,
                          bottom: 0,
                          cursor: "pointer",
                        }}
                      ></i>
                      <CardTitle>{val.country}</CardTitle>
                    </Card> */}
              </tbody>
            </Table>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}
