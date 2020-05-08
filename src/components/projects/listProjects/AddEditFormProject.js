import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Progress,
} from "reactstrap";

const AddEditFormProject = React.memo((props) => {
  const [startDate, setStartDate] = useState("");
  const [ednDate, setEndDate] = useState("");

  // Functions.
  //   handle change date in DOJ
  const handleChangeStartDate = (date) => {
    setStartDate(date);
  };
  //   handle change date inDOB
  const handleChangeEndDate = (date) => {
    setEndDate(date);
  };
  return (
    <Form>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label for="exampleEmail">Project Name</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Client </Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleEmail">Technology</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Type of Project</Label>
            <Input type="select">
              <option>Select Type of Project</option>
              <option>Time and Material</option>
              <option>Fixed Budget</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={2} className="float-center">
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker selected={startDate} onChange={handleChangeStartDate} />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleEmail">End Date</Label>
            <DatePicker selected={ednDate} onChange={handleChangeEndDate} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label>Project Name</Label>
            <Input type="textarea" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Client </Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Upload usefull links, and docs about the Project.
            </FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Estimated Resource Cost</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Project Budget </Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Management Cost </Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Estimated Hour/Man-days </Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Domain</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Source Code</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Status</Label>
            <Input type="select">
              <option value="">Select Status</option>
              <option value="new">New</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Progreess</Label>
            <span className="float-right">0%</span>
            <Progress
              color="danger"
              value="1"
              style={{ height: "6px" }}
            ></Progress>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
});

export default AddEditFormProject;
