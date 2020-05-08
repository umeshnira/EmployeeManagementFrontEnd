import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SelectBoxSearch from "../../common/SelectBoxSearch";

const Example = (props) => {
  return (
    <Form>
      {console.log(props.formData)}
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
              name="itemNo"
              placeholder="Enter Item No"
              value={props.formData.itemNo}
              defaultValue={props.itemNo + 1}
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
              value={props.formData.itemDescription}
              onChange={(e) => props.setItemDescription(e.target.value)}
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
              value={props.formData.itemUniqueId}
              onChange={(e) => props.setItemUniqueId(e.target.value)}
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
              value={props.formData.itemModelNo}
              onChange={(e) => props.setItemModelNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">User</Label>
            {console.log(props.formData.itemUser)}
            <SelectBoxSearch
              selectedUser={props.formData.itemUser}
              options={props.userList}
              onChange={props.setItemUser}
            ></SelectBoxSearch>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            color=""
            className="btn-admin-settings"
            onClick={props.handleSubmit}
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
