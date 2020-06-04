import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SelectBoxSearch from "../../common/SelectBoxSearch";

const Example = (props) => {
  const [itemNo, setItemNo] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemUniqueId, setItemUniqueId] = useState("");
  const [itemModelNo, setItemModelNo] = useState("");
  const [itemUser, setItemUser] = useState("");
  const [warentyEndDate, setWarentyEndDate] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [vendor, setVendor] = useState("");

  // function
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formData = {
      itemId: 2,
      itemModel: itemDescription,
      uniqueIdentificationNumber: itemUniqueId,
      modelNo: itemModelNo,
      vandor: vendor,
      purchaseDate: purchaseDate,
      warentyDetails: "",
      warentyEndDate: warentyEndDate,
      employeeId: itemUser.value.empId,
    };
    // console.log(formData);
    props.handleSubmit(formData);
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Asset</Label>
            <Input type="text" name="asset" value={"Mouse"} disabled />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Item No</Label>
            <Input
              type="text"
              placeholder="Enter Item No"
              disabled
              //   onChange={(e) => props.setItemNo(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Item Description</Label>
            <Input
              type="text"
              name="itemDescription"
              placeholder="Enter Item Description"
              // value={props.formData.itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Unique ID</Label>
            <Input
              type="text"
              name="uniquieId"
              placeholder="Enter Unique ID"
              // value={props.formData.itemUniqueId}
              onChange={(e) => setItemUniqueId(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Model No</Label>
            <Input
              type="text"
              name="modelNo"
              placeholder="Enter Model No"
              // value={props.formData.itemModelNo}
              onChange={(e) => setItemModelNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Vendor</Label>
            <Input
              type="text"
              // value={props.formData.itemUniqueId}
              onChange={(e) => setVendor(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>User</Label>
            <SelectBoxSearch
              // selectedUser={props.userList[0]}
              options={props.userList}
              // onChange={props.setItemUser}
              onChange={(selectedOption) => setItemUser(selectedOption)}
            ></SelectBoxSearch>
          </FormGroup>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Purchase Date</Label>
                <Input
                  type="date"
                  // value={props.formData.itemDescription}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Warenty End Date</Label>
                <Input
                  type="date"
                  // value={props.formData.itemDescription}
                  onChange={(e) => setWarentyEndDate(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            color=""
            className="btn-admin-settings"
            onClick={handleFormSubmit}
          >
            Add
          </Button>{" "}
          &nbsp;
          <Button color="" className="btn-cancel" onClick={props.handleCancel}>
            cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Example;
