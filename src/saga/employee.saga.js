import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_EMP_LIST,
  GET_EMP_LIST_SUCCESS,
  ADD_EMP,
  ADD_EMP_SUCCESS,
  GET_SELECT_EMP,
  GET_SELECT_EMP_SUCCESS,
  DEL_EMP_CERTIFICATE,
  DEL_EMP_CERTIFICATE_SUCCESS,
  ADD_EMP_SKILL,
  ADD_EMP_SKILL_SUCCESS,
  DEL_EMP,
  DEL_EMP_SUCCESS,
  UPDATE_EMP,
  UPDATE_EMP_SUCCESS,
} from "../redux/actions/actionType";
import { empList, empCertificates, empSkills } from "../datas/employee";
import api from "../apis/api";
let empCertificate;
let profileInfo;
let empSkill;

// api functions
function* getEmpListApi() {
  let empArr = [];
  // made this structure to have seacrh in select box.
  const response = yield api.employee().getAll();
  response.data
    .filter((emp) => emp.isActive === true)
    .forEach((element) => {
      empArr.push({ value: element, label: element.employeeName });
    });
  console.log(empArr);
  return empArr;
  // return empList;
}
function addEditEmpApi(formDate) {
  api.employee().addEdit(formDate);
  return formDate;
}
function delEmpApi(delId) {
  api.employee().del(delId);
}
function* getSelectEmpApi(empId) {
  // console.log(empList);
  // profileInfo = empList.filter((emp) => String(emp.value.empId) === empId);
  // empCertificate = empCertificates.filter((emp) => String(emp.empId) === empId);
  // empSkill = empSkills.filter((emp) => String(emp.empId) === empId);

  const response = yield api.employee().getSleectedEmployee(empId);
  //  get the employee details in {value : "", lable : ""} formate.
  profileInfo = {
    value: response.data[0],
    label: response.data[0].employeeName,
  };
  return { profileInfo };
}
function delEmpCertificateApi(delId) {
  // api call.
}
function addEmpNewSkillApi(empNewSkill, skillId, empId) {
  // api call.
  let newEmpSkillList = empSkill[0].skill; //to replace, take only skill key
  newEmpSkillList.filter(
    (el) => (el.skillId === skillId ? el.skillName.push(empNewSkill) : null)
    // if (el.skillId === skillId) el.skillName.push(empNewSkill)
  );
  console.log(newEmpSkillList);
  return { newEmpSkillList };
}

// get the list of employee.
export function* handleGetEmpList() {
  try {
    const empList = yield call(getEmpListApi);
    yield put({ type: GET_EMP_LIST_SUCCESS, payload: empList }); // reducer call
  } catch (error) {
    console.log(error);
  }
}
// Add employee.
export function* handleAddEmp({ payload }) {
  try {
    let formDate = payload;
    const resAddEmp = yield call(addEditEmpApi, formDate);
    yield put({ type: ADD_EMP_SUCCESS, payload: resAddEmp });
  } catch (error) {
    console.log(error);
  }
}
// update employee
export function* handleUpdateEmp({ payload }) {
  try {
    let formData = payload;
    yield call(addEditEmpApi, formData);
    yield put({ type: UPDATE_EMP_SUCCESS, payload: formData });
  } catch (error) {
    console.log(error);
  }
}
// delete employee.
export function* handleDelEmp({ payload }) {
  try {
    let delId = payload;
    yield call(delEmpApi, delId);
    yield put({ type: DEL_EMP_SUCCESS, payload: delId });
  } catch (error) {
    console.log(error);
  }
}
// get single employee.
export function* handleGetSelectEmp({ payload }) {
  try {
    let empId = payload;
    const { profileInfo } = yield call(getSelectEmpApi, empId);
    // return includes selected emp profileInfo, certificats, skill
    yield put({
      type: GET_SELECT_EMP_SUCCESS,
      profileInfo: profileInfo,
      empCertificate: [],
      empSkill: [],
    });
  } catch (error) {
    console.log(error);
  }
}

// delete a employee certificate.
export function* handleDelEmpCertificate(delId) {
  try {
    yield call(delEmpCertificateApi, delId.payload);
    yield put({ type: DEL_EMP_CERTIFICATE_SUCCESS, delId: delId.payload });
  } catch (error) {
    console.log(error);
  }
}

// add a employee skill.
export function* handleAddEmpNeSkill({ empNewSkill, skillId, empId }) {
  try {
    const { newEmpSkillList } = yield call(
      addEmpNewSkillApi,
      empNewSkill,
      skillId,
      empId
    );
    yield put({
      type: ADD_EMP_SKILL_SUCCESS,
      newEmpSkillList: newEmpSkillList,
      // empNewSkill: empNewSkill,
      // skillId: skillId,
      // empId: empId,
    });
  } catch (error) {
    console.log(error);
  }
}

// watch function.
export function* employeeWatchFun() {
  yield takeEvery(GET_EMP_LIST, handleGetEmpList);
  yield takeLatest(ADD_EMP, handleAddEmp);
  yield takeLatest(UPDATE_EMP, handleUpdateEmp);
  yield takeLatest(DEL_EMP, handleDelEmp);
  yield takeLatest(GET_SELECT_EMP, handleGetSelectEmp);
  yield takeLatest(DEL_EMP_CERTIFICATE, handleDelEmpCertificate);
  yield takeLatest(ADD_EMP_SKILL, handleAddEmpNeSkill);
}
