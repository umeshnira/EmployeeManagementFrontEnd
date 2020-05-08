import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
let dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FormAddHolidayCalender = (props) => {
  const { inputFields } = props;
  const [calenderDate, setCalenderDate] = useState(new Date());
  const [date, setDate] = useState();
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const onChange = (date) => {
    // setDate(date);
    setDate(date.getDate());
    setDay(dayArr[date.getDay()]);
    setYear(date.getFullYear());
    props.handleOnchangeDate(date);
  };

  useEffect(() => {
    if (props.formData !== undefined) {
      let incomingDate = new Date(props.formData.val.type2);
      console.log(props.formData.val.type2);

      console.log(incomingDate.getDate());
      setDate(incomingDate.getDate());
      setDay(dayArr[incomingDate.getDay()]);
      setYear(incomingDate.getFullYear());
    }
  }, [props.formData]);

  return (
    <Fragment>
      <Form>
        <Row form>
          <Col md={4}>
            <Calendar onChange={onChange} value={calenderDate} />
          </Col>
          <Col md={8}>
            {inputFields !== undefined
              ? inputFields.map((inputField, i) => {
                  return (
                    <FormGroup key={i}>
                      <Label>{inputField.label}</Label>
                      <Input
                        type={inputField.type}
                        placeholder={inputField.placeholder}
                        onChange={(e) => {
                          inputField.handleOnChange(e.target.value);
                        }}
                        value={props.formData.val[inputField.name]}
                      />
                    </FormGroup>
                  );
                })
              : null}
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Date</Label>
                  <Input
                    type="text"
                    placeholder="Select Date"
                    value={date}
                    disabled
                    // value={props.formData ? props.formData.val[val.name] : null}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Day</Label>
                  <Input
                    type="text"
                    placeholder="Select Date"
                    value={day}
                    disabled
                    // value={props.formData ? props.formData.val[val.name] : null}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Year</Label>
                  <Input
                    type="text"
                    placeholder="Select Date"
                    value={year}
                    disabled
                    // value={props.formData ? props.formData.val[val.name] : null}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              color=""
              className="btn-admin-settings"
              onClick={props.handleSubmit}
            >
              {props.button}
            </Button>{" "}
            &nbsp;
            <Button color="" className="btn-cancel" onClick={props.toggle}>
              cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default FormAddHolidayCalender;
