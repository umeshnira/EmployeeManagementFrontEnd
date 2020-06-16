import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const EmployeeEditForm = React.memo((props) => {
  const {
    selectedEmployee,
    designations,
    departments,
    officeLocationList,
    workPrimisesList,
    employeetypesList,
  } = props;
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [primaryMailId, setPrimaryMailId] = useState("");
  const [altMailId, setAltMailId] = useState("");
  const [qualification, setQualification] = useState("");
  const [designationId, setDesignationId] = useState("");
  const [guardainName, setGuardainName] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [mobileNumber, setModileNumber] = useState("");
  const [alternativeNo, setAlternativeNo] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState(new Date());
  const [dateOFBirth, setDateOfBirth] = useState(new Date());
  const [profilePicture, setProfilePicture] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [esiNo, setEsiNo] = useState("");
  const [epfUan, setEpfUan] = useState("");
  const [accNo, setAccNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [skill, setSkill] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [workPrimise, setWorkPrimise] = useState("");

  const handleAddForm = () => {
    let empFormData = new FormData();
    empFormData.append("employeeId", parseInt(employeeId));
    empFormData.append("employeeCode", 46);
    empFormData.append("employeeType", 1);
    empFormData.append("employeeName", employeeName);
    empFormData.append(" dateOfJoin", dateOfJoin);
    empFormData.append("dateOFBirth", dateOFBirth);
    empFormData.append("aadharNumber", aadharNo);
    empFormData.append("panNumber", panNo);
    empFormData.append("esiNumber", esiNo);
    empFormData.append("epfuan", epfUan);
    empFormData.append("qualificationId", 1);
    empFormData.append("departmentId", parseInt(departmentName));
    empFormData.append("designationId", parseInt(designationId));
    empFormData.append(
      "designationName",
      designations.map((desg) =>
        desg.designationId === parseInt(designationId)
          ? desg.designationName
          : ""
      )[0]
    );
    empFormData.append("guardianName", guardainName);
    empFormData.append("postalAddress", postalAddress);
    empFormData.append("mobileNumber", mobileNumber);
    empFormData.append("emergencyNumber", alternativeNo);
    empFormData.append("primaryMailId", primaryMailId);
    empFormData.append("secondaryMailId", altMailId);
    empFormData.append("ifscCode", ifscCode);
    empFormData.append("bankAccountNumber", accNo);
    empFormData.append("bloodGroup", bloodGrp);
    empFormData.append("officeLocationId", parseInt(officeLocation));
    empFormData.append("workingPremiseId", parseInt(workPrimise));

    empFormData.append(
      "profilePicture",
      profilePicture === "" ? "user.png" : profilePicture
    );
    empFormData.append("workingPremiseId", parseInt(workPrimise));
    empFormData.append("createdDate", new Date());
    empFormData.append("createdBy", 1);
    empFormData.append("modifiedDate", "2020-06-09T07:25:27.612Z");
    empFormData.append("modifiedBy", 0);
    empFormData.append("isActive", true);
    empFormData.append("password", "hellothere");
    empFormData.append("roles", "string");
    empFormData.append("fileName", "string");
    empFormData.append("contentType", "string");
    empFormData.append("file", null);
    empFormData.append("isLatest", true);
    empFormData.append("encrptedPassword", "string");
    // let empFormData = {
    //     employeeId: parseInt(employeeId),
    //     employeeCode: 46,
    //     employeeType: 1,
    //     employeeName: employeeName,
    //     dateOfJoin: dateOfJoin,

    //     dateOFBirth: dateOFBirth,
    //     aadharNumber: aadharNo,
    //     panNumber: panNo,
    //     esiNumber: esiNo,
    //     epfuan: epfUan,
    //     qualificationId: 1,
    //     // qualificationName: "string",
    //     // departmentId: 4012,
    //     // designationId: 35,

    //     departmentId: parseInt(departmentName),
    //     designationId: parseInt(designationId),
    //     designationName: designations.map((desg) =>
    //       desg.designationId === parseInt(designationId)
    //         ? desg.designationName
    //         : ""
    //     )[0],
    //     guardianName: guardainName,
    //     postalAddress: postalAddress,
    //     mobileNumber: mobileNumber,
    //     emergencyNumber: alternativeNo,
    //     primaryMailId: primaryMailId,
    //     secondaryMailId: altMailId,
    //     ifscCode: ifscCode,
    //     bankAccountNumber: accNo,
    //     bloodGroup: bloodGrp,
    //     // officeLocationId: 2,
    //     // workingPremiseId: 19,
    //     officeLocationId: parseInt(officeLocation),
    //     workingPremiseId: parseInt(workPrimise),
    //     profilePicture: profilePicture === "" ? "user.png" : profilePicture,
    //     createdDate: new Date(),
    //     createdBy: 1,
    //     modifiedDate: "2020-06-09T07:25:27.612Z",
    //     modifiedBy: 0,
    //     isActive: true,
    //     password: "hellothere",
    //     roles: "string",
    //     fileName: "string",
    //     contentType: "string",
    //     file: null,
    //     isLatest: true,
    //     encrptedPassword: "string",
    //   };
    if (selectedEmployee) {
      props.handleUpdateEmp(empFormData);
    } else {
      props.handleAddEmp(empFormData);
    }
    props.toggle();
  };

  useEffect(() => {
    if (selectedEmployee) {
      //if an employeee is clicked for edit , the assigns its value to state.
      setEmployeeName(selectedEmployee.employeeName);
      setEmployeeId(selectedEmployee.employeeId);
      setEmployeeType(selectedEmployee.employeeType);
      setPrimaryMailId(selectedEmployee.primaryMailId);
      setAltMailId(selectedEmployee.secondaryMailId);
      setGuardainName(selectedEmployee.guardianName);
      setBloodGrp(selectedEmployee.bloodGroup);
      setModileNumber(selectedEmployee.mobileNumber);
      setAlternativeNo(selectedEmployee.emergencyNumber);
      setPostalAddress(selectedEmployee.postalAddress);
      console.log(selectedEmployee.dateOfJoin);
      setDateOfJoin(selectedEmployee.dateOfJoin.substring(0, 10));
      setDateOfBirth(selectedEmployee.dateOFBirth.substring(0, 10));
      setPostalAddress(selectedEmployee.postalAddress);
      setAadharNo(selectedEmployee.aadharNumber);
      setPanNo(selectedEmployee.panNumber);
      setEsiNo(selectedEmployee.esiNumber);
      setEpfUan(selectedEmployee.epfuan);
      setAccNo(selectedEmployee.bankAccountNumber);
      setIfscCode(selectedEmployee.ifscCode);
      setProfilePicture(selectedEmployee.profilePicture);
      setDesignationId(selectedEmployee.designationId);
      setDepartmentName(selectedEmployee.departmentId);
      setOfficeLocation(selectedEmployee.officeLocationId);
      setWorkPrimise(selectedEmployee.workingPremiseId);
    } else {
      //if add btn click then keep the state to null,
      //cuz when editClick and then addClicked then last value remains in state.
      setEmployeeName("");
      setEmployeeId("");
      setEmployeeType("");
      setPrimaryMailId("");
      setDateOfJoin(new Date());
      setDateOfBirth(new Date());
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
              onChange={(e) => setEmployeeName(e.target.value)}
              value={employeeName}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Employee ID</Label>
            <Input
              type="Text"
              name="EmployeeId"
              onChange={(e) => setEmployeeId(e.target.value)}
              value={employeeId}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Employee Type</Label>

            <Input
              type="select"
              onChange={(e) => setEmployeeType(e.target.value)}
            >
              <option value="">Select Employee Type</option>
              {employeetypesList.map((employeeTypeEl, i) => (
                <option
                  value={employeeTypeEl.employeeTypeId}
                  selected={
                    employeeType === employeeTypeEl.employeeTypeId
                      ? true
                      : false
                  }
                >
                  {employeeTypeEl.employeeTypeValue}
                </option>
              ))}
            </Input>
            {/* <Input
              type="Text"
              name="EmployeeType"
              onChange={(e) => setEmployeeType(e.target.value)}
              value={employeeType}
            /> */}
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label> Primary Mail Id</Label>
            <Input
              type="Text"
              name="doj"
              onChange={(e) => setPrimaryMailId(e.target.value)}
              value={primaryMailId}
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
              type="select"
              onChange={(e) => setDesignationId(e.target.value)}
            >
              <option value="">Select Designation</option>
              {designations.map((desigination, i) => (
                <option
                  value={desigination.designationId}
                  selected={
                    designationId === desigination.designationId ? true : false
                  }
                >
                  {desigination.designationName}
                </option>
              ))}
            </Input>
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
              onChange={(e) => setModileNumber(e.target.value)}
              value={mobileNumber}
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
              value={alternativeNo}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Date of Joining</Label>
            <Input
              type="date"
              onChange={(e) => setDateOfJoin(e.target.value)}
              // value={"2013-01-08"}

              value={dateOfJoin}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

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
              onChange={(e) => setProfilePicture(e.target.files[0].name)}
            />
          </FormGroup>
        </Col>
        <Col md={9}>
          <FormGroup>
            <Label>Address</Label>
            <Input
              type="textarea"
              name="doj"
              onChange={(e) => setPostalAddress(e.target.value)}
              value={postalAddress}
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
              value={aadharNo}
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
              value={panNo}
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
              value={esiNo}
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
              value={epfUan}
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
              onChange={(e) => setAccNo(e.target.value)}
              value={accNo}
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
              value={ifscCode}
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
              onChange={(e) => setDepartmentName(e.target.value)}
            >
              <option value="">Select Department</option>
              {departments.map((department, i) => (
                <option
                  value={department.departmentId}
                  selected={
                    departmentName === department.departmentId ? true : false
                  }
                >
                  {department.departmentName}
                </option>
              ))}
            </Input>
            {/* <Input
              type="select"
              name="qualification "
              onChange={(e) => setDepartmentName(e.target.value)}
            /> */}
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
              type="select"
              onChange={(e) => setOfficeLocation(e.target.value)}
            >
              <option value="">select office location</option>
              {officeLocationList.map((officeLocationEl, i) => (
                <option
                  key={officeLocationEl.officeLocationId}
                  value={officeLocationEl.officeLocationId}
                  selected={
                    officeLocation === officeLocationEl.officeLocationId
                      ? true
                      : false
                  }
                >
                  {officeLocationEl.address}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>Work Primise </Label>
            <Input
              type="select"
              onChange={(e) => setWorkPrimise(e.target.value)}
            >
              <option value="">select work Premise</option>
              {workPrimisesList.map((workPrimisesEl, i) => (
                <option
                  key={workPrimisesEl.workingPremiseId}
                  value={workPrimisesEl.workingPremiseId}
                  selected={
                    workPrimise === workPrimisesEl.workingPremiseId
                      ? true
                      : false
                  }
                >
                  {workPrimisesEl.workingPremiseType}
                </option>
              ))}
            </Input>
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
