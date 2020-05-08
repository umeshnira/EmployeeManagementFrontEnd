import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormEditFields = (props) => {
  const { inputFields } = props;
  return (
    <Form>
      {inputFields !== undefined
        ? inputFields.map((val, i) => {
            return (
              <FormGroup key={i}>
                {/* {console.log(props.formData.val[val.name])} */}
                <Label>{val.label}</Label>
                <Input
                  type={val.type}
                  placeholder={val.placeholder}
                  onChange={(e) => {
                    val.handleOnChange(e.target.value);

                    props.handleOnchangeToSelectedData(
                      e.target.value,
                      val.name
                    );
                  }}
                  value={props.formData ? props.formData.val[val.name] : null}
                />
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
};

export default FormEditFields;
