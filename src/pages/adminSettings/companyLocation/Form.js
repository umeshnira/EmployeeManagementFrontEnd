import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

const FormFields = (props) => {
  // const { country, providene, pin, landMark } = props.selectedCompany;
  const [officeLocationId, setOfficeLocationId] = useState(null);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [landMark, setLandMark] = useState("");

  // Functions.
  useEffect(() => {
    if (props.selectedCompany) {
      const {
        officeLocationId,
        address,
        phoneNo,
        pin,
        landMark,
      } = props.selectedCompany;
      setOfficeLocationId(officeLocationId);
      setAddress(address);
      setPhoneNo(phoneNo);
      setPin(pin);
      setLandMark(landMark);
    } else {
      setAddress("");
      setPhoneNo("");
      setPin("");
      setLandMark("");
    }
  }, [props.selectedCompany]);

  const handleSubmitForm = () => {
    if (props.selectedCompany) {
      let formData = {
        officeLocationId,
        address,
        pin,
        phoneNo,
        landMark,
      };
      props.handleUpdateCompanyLocation(formData);
    } else {
      let formData = {
        address,
        pin,
        phoneNo,
        landMark,
      };
      props.handleAddCompanyLocation(formData);
    }
  };
  return (
    <Container>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">address</Label>
              <Input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="providence">Phone No.</Label>
              <Input
                type="text"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={[phoneNo]}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="Pin">Pin</Label>
              <Input
                type="text"
                onChange={(e) => setPin(e.target.value)}
                value={pin}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="landMark">Land Mark</Label>
              <Input
                type="text"
                onChange={(e) => setLandMark(e.target.value)}
                value={landMark}
              />
            </FormGroup>
          </Col>
          <Col md={4} className="companyLocation-submit">
            {/* <Button
              className="companyLocation-submit"
              onClick={handleSubmitForm}
            >
              {props.selectedCompany ? "Update" : "Add"}
            </Button> */}
            <Button
              color=""
              className="btn-admin-settings"
              onClick={handleSubmitForm}
            >
              {props.selectedCompany ? "Update" : "Add"}
            </Button>
            &nbsp;
            <Button
              color=""
              className="btn-cancel"
              onClick={props.toogleFromAddEdit}
            >
              cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormFields;
