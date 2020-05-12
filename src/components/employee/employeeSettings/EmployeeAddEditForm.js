import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const EmployeeEditForm = React.memo((props) => {
  const { selectedEmployee } = props;
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empType, setEmpType] = useState("");
  const [niraMailId, setNiraMailId] = useState("");
  const [altMailId, setAltMailId] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [guardainName, setGuardainName] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [mobileNo, setModileNo] = useState("");
  const [alternativeNo, setAlternativeNo] = useState("");
  const [doj, setDoj] = useState("");
  const [dob, setDob] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [address, setAddress] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [esiNo, setEsiNo] = useState("");
  const [epfUan, setEpfUan] = useState("");
  const [accNo, setAccNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [department, setDepartment] = useState("");
  const [skill, setSkill] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [workPrimise, setWorkPrimise] = useState("");

  //   handle change date in DOJ
  const handleChangeDoj = (date) => {
    setDoj(date);
  };
  //   handle change date inDOB
  const handleChangeDob = (date) => {
    setDob(date);
  };

  const handleAddForm = () => {
    let empFormData = {
      empName,
      empId,
      empType,
      niraMailId,
      altMailId,
      qualification,
      designation,
      guardainName,
      bloodGrp,
      mobileNo,
      alternativeNo,
      doj: `${doj.getDate()}-${doj.getMonth() + 1}-${doj.getFullYear()}`,
      dob: `${dob.getDate()}-${dob.getMonth()}-${dob.getFullYear()}`,
      profileImg: profileImg === "" ? "avatar-06.png" : profileImg.name,
      address,
      aadharNo,
      panNo,
      esiNo,
      epfUan,
      accNo,
      ifscCode,
      department,
      skill,
      officeLocation,
      workPrimise,
    };

    if (selectedEmployee) {
      props.handleUpdateEmp(empFormData);
    } else {
      props.handleAddEmp(empFormData);
    }
    props.toggle();
  };

  useEffect(() => {
    console.log(selectedEmployee);
    if (selectedEmployee) {
      //if an employeee is clicked for edit , the assigns its value to state.
      setEmpName(selectedEmployee.empName);
      setEmpId(selectedEmployee.empId);
      setEmpType(selectedEmployee.empType);
      setNiraMailId(selectedEmployee.niraMailId);
      setDoj(new Date(selectedEmployee.doj));
      setDob(new Date(selectedEmployee.dob));
    } else {
      //if add btn click then keep the state to null,
      //cuz when editClick and then addClicked then last value remains in state.
      setEmpName("");
      setEmpId("");
      setEmpType("");
      setNiraMailId("");
      setDoj("");
      setDob("");
    }
  }, [selectedEmployee]);

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Employee Name</Label>
            <Input
              type="Text"
              name="EmployeeName"
              onChange={(e) => setEmpName(e.target.value)}
              value={empName}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Employee ID</Label>
            <Input
              type="Text"
              name="EmployeeId"
              onChange={(e) => setEmpId(e.target.value)}
              value={empId}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Employee Type</Label>
            <Input
              type="Text"
              name="EmployeeType"
              onChange={(e) => setEmpType(e.target.value)}
              value={empType}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label> Nira Mail Id</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setNiraMailId(e.target.value)}
              value={niraMailId}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label> Alternative Mail Id</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setAltMailId(e.target.value)}
              value={altMailId}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label> Qualification</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setQualification(e.target.value)}
              value={qualification}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Designation</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Guardain Name</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setGuardainName(e.target.value)}
              value={guardainName}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Boold Group</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setBloodGrp(e.target.value)}
              value={bloodGrp}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label>Modile Number</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setModileNo(e.target.value)}
              value={mobileNo}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Alternative Number</Label>
            <Input
              type="Text"
              name="dob"
              onChange={(e) => setAlternativeNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Date of Joining</Label>
            <DatePicker selected={doj} onChange={handleChangeDoj} />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Date of Birth</Label>
            <DatePicker selected={dob} onChange={handleChangeDob} />

            {/* <Input
              type="Text"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
            /> */}
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label>Profile Photo</Label>
            <Input
              type="file"
              name="file"
              onChange={(e) => setProfileImg(e.target.files[0])}
            />
          </FormGroup>
        </Col>
        <Col md={9}>
          <FormGroup>
            <Label>Address</Label>
            <Input
              type="textarea"
              name="doj"
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      {/* </div> */}
      <hr></hr>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Aadhar Number</Label>
            <Input
              type="Text"
              name="AadharNumber "
              onChange={(e) => setAadharNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>PAN Number </Label>
            <Input
              type="Text"
              name="panNo"
              onChange={(e) => setPanNo(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>ESI No</Label>
            <Input
              type="Text"
              name="esiNo"
              onChange={(e) => setEsiNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>EPF UAN </Label>
            <Input
              type="Text"
              name="epfUan"
              onChange={(e) => setEpfUan(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <hr></hr>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Account Number </Label>
            <Input
              type="Text"
              name="qualification "
              onChange={(e) => setAccNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>IFSC Code </Label>
            <Input
              type="Text"
              name="ifcs "
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <hr></hr>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label>Department </Label>
            <Input
              type="select"
              name="qualification "
              onChange={(e) => setDepartment(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Skill </Label>
            <Input
              type="text"
              name="qualification "
              onChange={(e) => setSkill(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Office Location </Label>
            <Input
              type="text"
              name="qualification "
              onChange={(e) => setOfficeLocation(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Work Primise </Label>
            <Input
              type="text"
              name="qualification "
              onChange={(e) => setWorkPrimise(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            color=""
            className="btn-admin-settings"
            onClick={handleAddForm}
          >
            {selectedEmployee ? "Update" : "Add"}
          </Button>
          &nbsp;
          <Button color="" className="btn-cancel" onClick={props.toggle}>
            cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
});

export default EmployeeEditForm;
