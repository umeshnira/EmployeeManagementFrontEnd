import React from "react";
import { Table } from "reactstrap";
import DropDownBtn from "../../components/common/DropDownBtn";

const ListView = (props) => {
  const { listData } = props;
  return (
    <Table hover>
      {console.log("LV assest")}
      <thead>
        <tr>
          <th>#</th>
          {props.thead.map((th, i) => {
            return (
              <th
                key={i}
                style={{
                  fontSize: "14px",
                }}
              >
                {th}
              </th>
            );
          })}
          {props.dropDownThead ? (
            <th
              style={{
                fontSize: "14px",
              }}
            >
              {props.dropDownThead}
            </th>
          ) : null}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* get the length of row from the length of the listData */}
        {listData.map((row, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              {/* get the length of col from the length of the thead */}

              {props.thead.map((th, k) => {
                return (
                  // display data from listData with row index and key name eg: type1, type2, type3...
                  <td key={k}> {props.listData[i]["type".concat(k + 1)]}</td>
                );
              })}
              {props.dropDownOption ? (
                <td>
                  <DropDownBtn
                    selectedOpt={props.listData[i]["type5"]}
                    dropDownOption={props.dropDownOption}
                    handleDropDownOnChange={props.handleDropDownOnChange}
                  ></DropDownBtn>
                </td>
              ) : null}
              <td>
                <i className="fas fa-trash"></i>
                &nbsp;
                <i
                  className="fas fa-edit"
                  onClick={() => {
                    props.handleSelectedDesg(props.listData[i], i);
                    props.toggle();
                  }}
                ></i>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default React.memo(ListView);
