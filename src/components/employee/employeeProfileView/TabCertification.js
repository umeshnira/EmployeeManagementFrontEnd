import React, { Fragment, useState, useRef } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TabCertification = React.memo((props) => {
  let messagesEnd = "";
  const { empCertificate, delCertificate } = props;
  const [certificateDate, setCertificateDate] = useState("");
  const [certificateDescp, setCertificateDescp] = useState("");
  const [addFormCertificate, setAddFormCertificate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setDropdownOpt = useRef(0); // to know which card dropdown.by array index.
  const showUpdateForm = useRef(null);

  // Function -----------------------------------
  // dropdown function
  const toggle = React.useCallback(
    (whichCertificate) => {
      // whichProject is the index of array to know which card clicked.
      // when from api, make unique drowpDown with ceritifate id,
      // and set selected setDropdownOpt to ceritifate id
      setDropdownOpen((prevState) => !prevState);
      setDropdownOpt.current = whichCertificate;
    },
    [setDropdownOpen]
  );

  const handleOnClickAdd = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
    setAddFormCertificate(true);
  };

  //   handle change date in DOJ
  const handleChangeCertificateDate = (date) => {
    setCertificateDate(date);
  };

  const handleOnclickEdit = (certificateData) => {
    // onClick edit then, showUpdateFrom only to which click.
    // ie: to get unique name concat with array index
    // ie: set in setDropdownOpt.
    showUpdateForm.current = "showUpdateForm" + setDropdownOpt.current;
    setCertificateDescp(certificateData.certificateName);
    setCertificateDate(new Date(certificateData.date));
  };

  //  -----------------Add From
  const handleAddCertificate = () => {
    console.log(certificateDescp, <br></br>, certificateDate);
  };

  // close add certificate card.
  const handleCloseAddCertificate = () => {
    setAddFormCertificate(false);
  };

  //  -----------------Update Form.
  const handleUpdateCertificate = () => {
    console.log(certificateDescp, <br></br>, certificateDate);
  };

  // close Update certificate card.
  const handleCloseUpdateCertificate = () => {
    showUpdateForm.current = null;
    setCertificateDescp("");
    setCertificateDate("");
  };
  // --------------------Delete Certificate.
  // const handleDelCertificate = (delId) => {
  //   props.delCertificate(delId);
  // };

  return (
    <Fragment>
      {console.log("tab certificate")}
      <Row className="certication-box mt-2">
        <Col sm={4}>
          <Card
            className="flex-fill mb-3"
            onClick={handleOnClickAdd}
            //    style={{ borderRadius: "160px" }}
          >
            <CardBody>
              <Row>
                <Col sm={10} xs={10} md={10} className="text-center">
                  <Button color="">
                    <i className="fas fa-2x fa-plus"></i>
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {empCertificate !== null
          ? empCertificate.map((ele, i) => (
              <Col sm={4} key={i}>
                {showUpdateForm.current === "showUpdateForm" + i ? (
                  // upadte form..........
                  <AddUpdateForm
                    setCertificateDescp={(val) => setCertificateDescp(val)}
                    handleChangeCertificateDate={handleChangeCertificateDate}
                    handleAddCertificate={handleUpdateCertificate}
                    handleCloseAddCertificate={handleCloseUpdateCertificate}
                    certificateDate={certificateDate}
                    certificateDescp={certificateDescp}
                    certificateId={i} //array index
                  ></AddUpdateForm>
                ) : (
                  <Card className="flex-fill mb-3">
                    <CardBody>
                      <Row>
                        <Col sm={2} xs={2} md={2}>
                          {/* <i class="fas fa-3x fa-ribbon"></i> */}
                          <i class="fas fa-3x fa-certificate"></i>
                        </Col>

                        <Col sm={10} xs={10} md={10}>
                          <h5>
                            <div className="dropDown-action">
                              <Dropdown
                                isOpen={
                                  setDropdownOpt.current === i
                                    ? dropdownOpen
                                    : false
                                }
                                //when data from api, pass cirtificate Id not i( array index).
                                onClick={() => toggle(i)}
                              >
                                <DropdownToggle color="">
                                  <i className="fas fa-ellipsis-v text-muted"></i>
                                </DropdownToggle>
                                <DropdownMenu
                                  right
                                  modifiers={{
                                    setMinWidth: {
                                      enabled: true,
                                      order: 890,
                                      fn: (data) => {
                                        return {
                                          ...data,
                                          styles: {
                                            ...data.styles,
                                            minWidth: "100px",
                                          },
                                        };
                                      },
                                    },
                                  }}
                                >
                                  <DropdownItem
                                    onClick={() => handleOnclickEdit(ele)}
                                  >
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={() =>
                                      delCertificate(ele.certificateName)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                            {ele.certificateName}
                          </h5>
                          <small className="text-muted">
                            Date : {ele.date}
                          </small>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                )}
              </Col>
            ))
          : null}

        {/* Add From........... */}
        <Col sm={4}>
          <div
            // style={{ float: "left", clear: "both" }}
            ref={(el) => {
              messagesEnd = el;
            }}
          >
            {addFormCertificate ? (
              <AddUpdateForm
                setCertificateDescp={(val) => setCertificateDescp(val)}
                handleChangeCertificateDate={handleChangeCertificateDate}
                handleAddCertificate={handleAddCertificate}
                handleCloseAddCertificate={handleCloseAddCertificate}
                certificateDate={certificateDate}
              ></AddUpdateForm>
            ) : null}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
});

const AddUpdateForm = (props) => (
  <Card className="flex-fill mb-3">
    <CardBody style={{ marginTop: "-10px" }}>
      <Row>
        <Col sm={2} xs={2} md={2}>
          {/* <i class="fas fa-3x fa-ribbon"></i> */}
          <i class="fas fa-3x fa-certificate"></i>
        </Col>
        <Col sm={10} xs={10} md={10} className="update-fields">
          <Input
            type="text"
            placeholder="Add Certification Here"
            style={{ height: "30px" }}
            onChange={(e) => props.setCertificateDescp(e.target.value)}
            value={props.certificateDescp}
          />
          <Row>
            <Col sm={8} md={8}>
              <DatePicker
                className="mt-1"
                selected={props.certificateDate}
                onChange={props.handleChangeCertificateDate}
              />
            </Col>
            <Col sm={4} md={4} className="mt-2">
              <i
                className="fas fa-check "
                onClick={props.handleAddCertificate}
              ></i>
              <i
                className="fas fa-times ml-3"
                onClick={props.handleCloseAddCertificate}
              ></i>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  </Card>
);
