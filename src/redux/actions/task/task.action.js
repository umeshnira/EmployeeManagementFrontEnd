import {
  GET_EMP_TASK,
  GET_PROJECT_ID_TASK,
  ADD_TASK,
  UPDATE_TASK,
  DEL_TASK,
} from "../actionType";

// saga call.
export const getEmpTask = (empId) => {
  return {
    type: GET_EMP_TASK,
    payload: empId,
  };
};
export const addTask = (formData, taskProjectId) => {
  return {
    type: ADD_TASK,
    payload: { formData, taskProjectId },
  };
};
export const updateTask = (formData, taskProjectId) => {
  return {
    type: UPDATE_TASK,
    payload: { formData, taskProjectId },
  };
};
export const delTask = (delId) => {
  return {
    type: DEL_TASK,
    payload: delId,
  };
};

// reducer call. to keep the id of the project selected in TaskSideBar.
export const getTaskProjectId = (projectId) => {
  return {
    type: GET_PROJECT_ID_TASK,
    payload: projectId,
  };
};
