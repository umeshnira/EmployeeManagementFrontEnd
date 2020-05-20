import React, { useState, Fragment } from "react";
import {
  Card,
  CardTitle,
  Row,
  Col,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// style for the edit/update forms.
const fontSize = {
  fontSize: "12px",
};
const inputHeight = { height: "30px" };

export const TabProfile = React.memo((props) => {
  // console.log(props);
  const [isClickEdit, setIsClickEdit] = useState("");

  const handleClickEdit = React.useCallback(
    (whichCard) => {
      setIsClickEdit(whichCard);
    },
    [setIsClickEdit]
  );
  // ------------------------------form personalInfo
  const personalInfoFrom = (
    <Fragment>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport No.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport Exp Date.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Tel
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Nationality
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport No.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Religion
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport No.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Martial Status
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>

        <FormGroup check row className="text-center">
          <Button
            color=""
            className="btn-admin-settings"
            // onClick={handleAddForm}
          >
            Update
          </Button>
          &nbsp;
          <Button
            color=""
            className="btn-cancel"
            onClick={() => handleClickEdit("")}
          >
            cancel
          </Button>
        </FormGroup>
      </Form>
    </Fragment>
  );
  // -------------------------------form bank information.

  const bankInfoForm = (
    <Fragment>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport No.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport Exp.
          </Label>
          <Col sm={8}>
            <Input type="text" style={inputHeight} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={4} style={fontSize}>
            Passport No.
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              style={inputHeight}
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </Col>
        </FormGroup>

        <FormGroup check row className="text-center">
          <Button
            color=""
            className="btn-admin-settings"
            // onClick={handleAddForm}
          >
            Update
          </Button>
          &nbsp;
          <Button
            color=""
            className="btn-cancel"
            onClick={() => handleClickEdit("")}
          >
            cancel
          </Button>
        </FormGroup>
      </Form>
    </Fragment>
  );
  return (
    <div className="profile-box ">
      {console.log("tab profile")}

      <Row>
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>
                  Personal Information
                  <span
                    href="#"
                    className="edit-icon"
                    data-toggle="modal"
                    data-target="#emergency_contact_modal"
                    onClick={() => handleClickEdit("personalInfo")}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </h3>
              </CardTitle>
              {isClickEdit === "personalInfo" ? (
                personalInfoFrom
              ) : (
                <ul className="personal-info">
                  <li>
                    <div className="title">Passport No.</div>
                    <div className="text">9876543210</div>
                  </li>
                  <li>
                    <div className="title">Passport Exp Date.</div>
                    <div className="text">9876543210</div>
                  </li>
                  <li>
                    <div className="title">Tel</div>
                    <div className="text">
                      <div className="text">9876543210</div>
                    </div>
                  </li>
                  <li>
                    <div className="title">Nationality</div>
                    <div className="text">Indian</div>
                  </li>
                  <li>
                    <div className="title">Religion</div>
                    <div className="text">Christian</div>
                  </li>
                  <li>
                    <div className="title">Marital status</div>
                    <div className="text">Married</div>
                  </li>
                  <li>
                    <div className="title">Employment of spouse</div>
                    <div className="text">No</div>
                  </li>
                  <li>
                    <div className="title">No. of children</div>
                    <div className="text">2</div>
                  </li>
                </ul>
              )}
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>
                  Bank Information
                  <span
                    href="#"
                    className="edit-icon"
                    onClick={() => handleClickEdit("bankInfo")}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </h3>
              </CardTitle>
              {isClickEdit === "bankInfo" ? (
                bankInfoForm
              ) : (
                <Fragment>
                  <ul className="personal-info">
                    <li>
                      <div className="title">Bank name</div>
                      <div className="text">ICICI Bank</div>
                    </li>
                    <li>
                      <div className="title">Bank account No.</div>
                      <div className="text">159843014641</div>
                    </li>
                    <li>
                      <div className="title">IFSC Code</div>
                      <div className="text">ICI24504</div>
                    </li>
                    <li>
                      <div className="title">PAN No</div>
                      <div className="text">TC000Y56</div>
                    </li>
                  </ul>
                  <CardTitle>
                    <h3>Aadhar {"&"} Pan </h3>
                    <ul className="personal-info">
                      <li>
                        <div className="title">Bank name</div>
                        <div className="text">ICICI Bank</div>
                      </li>
                      <li>
                        <div className="title">Bank account No.</div>
                        <div className="text">159843014641</div>
                      </li>
                    </ul>
                  </CardTitle>
                </Fragment>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>
                  Education Information
                  <span
                    href="#"
                    className="edit-icon"
                    data-toggle="modal"
                    data-target="#emergency_contact_modal"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </h3>
              </CardTitle>
              <div className="experience-box">
                <ul className="experience-list">
                  <li>
                    <div className="experience-user">
                      <div className="before-circle"></div>
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="#/" className="name">
                          International College of Arts and Science (UG)
                        </a>
                        <div>Bsc Computer Science</div>
                        <span className="time">2000 - 2003</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div className="before-circle"></div>
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="#/" className="name">
                          International College of Arts and Science (PG)
                        </a>
                        <div>Msc Computer Science</div>
                        <span className="time">2000 - 2003</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>
                  Experience
                  <span
                    href="#"
                    className="edit-icon"
                    data-toggle="modal"
                    data-target="#emergency_contact_modal"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </h3>
              </CardTitle>
              <div className="experience-box">
                <ul className="experience-list">
                  <li>
                    <div className="experience-user">
                      <div className="before-circle"></div>
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="#/" className="name">
                          Team Lead at Wipro
                        </a>
                        {/* <div>Bsc Computer Science</div> */}
                        <span className="time">Jan 2019</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div className="before-circle"></div>
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="#/" className="name">
                          Web Designer at Infosys
                        </a>
                        {/* <div>Bsc Computer Science</div> */}
                        <span className="time">
                          Jan 2013 (5 years 2 months)
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div className="before-circle"></div>
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="#/" className="name">
                          Inter at Apple
                        </a>
                        {/* <div>Bsc Computer Science</div> */}
                        <span className="time">Jan 2012</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
});
