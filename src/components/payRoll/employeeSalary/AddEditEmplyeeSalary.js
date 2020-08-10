import React, { Fragment, useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import SelectBoxSearch from "../../common/SelectBoxSearch";

const AddEditEmployeeSalary = React.memo(({ empList, toggleAddEditForm }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    //   gets full props of parent companent, so take only what we want.
    setEmployees(empList.empList);
  }, [empList]);
  return (
    <Fragment>
      <Card className="pr-4 pl-4 mt-2">
        <CardBody>
          <Form>
            <Row>
              <Col className="pr-4 " xs={12} sm={6} md={6} lg={6}>
                <FormGroup>
                  <Label for="exampletext">Selected Staff</Label>
                  <SelectBoxSearch
                    options={employees}
                    onChange={(val) => setSelectedEmployee(val)}
                  ></SelectBoxSearch>
                </FormGroup>
                <h5>Earning</h5>
                <FormGroup>
                  <Label for="exampletext">Basic</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">DA (40%)</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">HRA (15%)</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Conveyance</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Allowance</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Medical Allowance</Label>
                  <Input type="text" name="text" />
                </FormGroup>
              </Col>
              <Col className="pl-4 " xs={12} sm={6} md={6} lg={6}>
                <FormGroup>
                  <Label for="exampletext">Net Salary</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <h5>Deduction</h5>

                <FormGroup>
                  <Label for="exampletext">TDS</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">ESI</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">PF</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Leave</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Prof. Tax</Label>
                  <Input type="text" name="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampletext">Labour Welfare</Label>
                  <Input type="text" name="text" />
                </FormGroup>
              </Col>
              <div className="w-100 text-center">
                {" "}
                <Button outline color="primary" onClick={toggleAddEditForm}>
                  Add
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
});

export default AddEditEmployeeSalary;
