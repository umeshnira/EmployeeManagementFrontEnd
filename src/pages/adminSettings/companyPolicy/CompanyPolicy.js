import React, { useState, useEffect } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

const companypolicyArr = [
  {
    type1: "Company Licence", // Policy name
    type2: "File about the company licence", // DEscription
    type3: "All Company file", // Department
    type4: "File", // file
  },
  {
    type1: "offer letter Business Development", // Policy name
    type2: "File about offer letter Business Development", // DEscription
    type3: "Business Development", // Department
    type4: "File",
  }, // file
  {
    type1: "offer letter Software Developer", // Policy name
    type2: "File about offer letter Software Developer", // DEscription
    type3: "Software Developer", // Department
    type4: "File", // file
  },
];

// Data for  list view.
const thead = ["Policy Name", "Description", "Department", "File"];

export default function CompanyPolicy() {
  const [dataArr, setDataArr] = useState([]);
  const [policyName, setPolicyName] = useState("");
  const [policyDescription, setPolicyDescription] = useState("");
  const [policyDepartment, setPolicyDepartment] = useState("");
  const [policyFile, setPolicyFile] = useState(null);

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [workPrimiseInpuFields] = useState([
    {
      label: "Policy Name",
      type: "text",
      placeholder: "Enter Policy Name",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setPolicyName(val);
      },
    },
    {
      label: "Description",
      type: "text",
      placeholder: "Enter Description",
      name: "type2", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setPolicyDescription(val);
      },
    },
    {
      label: "Department",
      type: "text",
      placeholder: "Enter Department",
      name: "type3", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setPolicyDepartment(val);
      },
    },
    {
      label: "File",
      type: "file",
      placeholder: "upload File",
      name: "file", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setPolicyFile(val);
      },
    },
  ]);

  useEffect(() => {
    setDataArr(companypolicyArr);
  }, []);

  // Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    selectedData.val[field] = val; // change a particular key in the selected designation.
    // setSelectedDesg(selectedDesg);
  };

  //  on click the tile ,open the from with data filed.
  const handleEditClick = (val, id) => {
    setSelectedData({ id: id, val: val });
    // toggle();
  };

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(policyName);
    console.log(policyDescription);
    console.log(policyDepartment);
    console.log(policyFile);
    setIsOpenGridView(!isOpenGridView);
    setIsOpenForm(!isOpenForm);
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(policyName);
    console.log(policyDescription);
    console.log(policyDepartment);
    console.log(policyFile);
    setSelectedData({ id: "", val: "" });
    setIsOpenGridView(!isOpenGridView);
    setIsOpenForm(!isOpenForm);
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Company Policies</h3>
        </Col>
        <Col>
          {isOpenGridView ? (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(false);
                setIsOpenListView(true);
                setIsOpenForm(false);
              }}
            >
              <i className="fas fa-list"></i>
            </Button>
          ) : (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(true);
                setIsOpenListView(false);
                setIsOpenForm(false);
              }}
            >
              <i className="fas fa-th-large float-right "></i>
            </Button>
          )}
        </Col>
      </Row>
      <hr></hr>
      <Collapse isOpen={isOpenForm}>
        {selectedData.id !== "" ? (
          <FromEditFields
            inputFields={workPrimiseInpuFields}
            handleOnchangeToSelectedData={(val, field) =>
              handleOnchangeToSelectedData(val, field)
            }
            handleSubmit={handleDataUpdate}
            formData={selectedData}
            button={"Update"}
            toggle={() => {
              setIsOpenForm(!isOpenForm);
              setIsOpenGridView(!isOpenGridView);
            }}
          ></FromEditFields>
        ) : (
          <FromFields
            inputFields={workPrimiseInpuFields}
            handleSubmit={handleDataAdd}
            button={"Add"}
            toggle={() => {
              setIsOpenForm(!isOpenForm);
              setIsOpenGridView(!isOpenGridView);
            }}
          ></FromFields>
        )}
      </Collapse>
      <Collapse isOpen={isOpenGridView}>
        <GridView
          pagaData={dataArr}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedData({ id: "", val: "" })}
          toggle={() => {
            setIsOpenGridView(!isOpenGridView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
        ></GridView>
      </Collapse>
      <Collapse isOpen={isOpenListView}>
        <ListView
          thead={thead}
          listData={dataArr}
          toggle={() => {
            setIsOpenListView(!isOpenListView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
        ></ListView>
      </Collapse>
    </div>
  );
}
