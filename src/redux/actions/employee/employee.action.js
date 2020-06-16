import {
  GET_EMP_LIST,
  ADD_EMP,
  GET_SELECT_EMP,
  DEL_EMP_CERTIFICATE,
  ADD_EMP_SKILL,
  DEL_EMP,
  UPDATE_EMP,
} from "../../actions/actionType";

// saga call.
export const getEmpList = () => {
  return {
    type: GET_EMP_LIST,
  };
};
export const addEmp = (empData) => {
  return {
    type: ADD_EMP,
    payload: empData,
  };
};
export const updateEmp = (empData) => {
  return {
    type: UPDATE_EMP,
    payload: empData,
  };
};
export const delEmp = (delId) => {
  return {
    type: DEL_EMP,
    payload: delId,
  };
};
export const getSelectedEmp = (empId) => {
  return {
    type: GET_SELECT_EMP,
    payload: empId,
  };
};
// -------------EMP CERTIFICATE ----------
export const delCertificateEmp = (delId) => {
  return {
    type: DEL_EMP_CERTIFICATE,
    payload: delId,
  };
};

// --------------- EMP SKILL -------------
export const addEmpSkill = (empNewSkill, skillId, empId) => {
  return {
    type: ADD_EMP_SKILL,
    empNewSkill,
    skillId,
    empId,
  };
};
