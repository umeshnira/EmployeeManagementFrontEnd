import React, { Fragment, useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormFields = React.memo((props) => {
  const { inputFields } = props;
  const [inputFieldsArr, setInputFieldsArr] = useState(null);

  return (
    <Form>
      {inputFields !== undefined
        ? inputFields.map((val, i) => {
            return (
              <FormGroup key={i}>
                {console.log(val.value)}
                {/* {console.log(props.formData.val[val.name])} */}
                <Label>{val.label}</Label>
                {/* if input field is a file then */}
                {val.type === "text" || val.type === "number" ? (
                  <Input
                    type={val.type}
                    placeholder={val.placeholder}
                    onChange={(e) => {
                      val.handleOnChange(e.target.value);
                    }}
                  />
                ) : null}
                {inputFieldsArr}
                {val.type === "file" ? (
                  <Input
                    type={val.type}
                    placeholder={val.placeholder}
                    onChange={(e) => {
                      console.log();
                      val.handleOnChange(e.target.files[0]);
                    }}
                    // value={props.formData ? props.formData.val[val.name] : null}
                  />
                ) : null}
                {val.type === "select" ? (
                  <Fragment>
                    <Input
                      type={val.type}
                      placeholder={val.placeholder}
                      onChange={(e) => {
                        val.handleOnChange(e.target.value);
                      }}
                    >
                      <option value="">----Select----</option>
                      {val.option.map((el, i) => (
                        <option key={i} value={el[val.displayData["id"]]}>{el[val.displayData["selectedData"]]}</option>
                      ))}
                    </Input>
                  </Fragment>
                ) : null}
              </FormGroup>
            );
          })
        : null}
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
    </Form>
  );
});

export default FormFields;
