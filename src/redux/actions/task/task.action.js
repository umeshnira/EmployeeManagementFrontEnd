import {
  GET_EMP_TASK,
  GET_PROJECT_ID_TASK,
  ADD_TASK,
  UPDATE_TASK,
  DEL_TASK,
  ON_CHANGE_TASK_DATE,
  ADD_PROJECT_FROM_TASK,
} from "../actionType";

// saga call.
export const getEmpTask = (empId) => {
  return {
    type: GET_EMP_TASK,
    payload: empId,
  };
};
export const addTask = (formData) => {
  return {
    type: ADD_TASK,
    payload: { formData },
  };
};
export const updateTask = (formData, taskId) => {
  return {
    type: UPDATE_TASK,
    payload: { formData, taskId },
  };
};
export const delTask = (delId) => {
  return {
    type: DEL_TASK,
    payload: delId,
  };
};

// reducer call. to keep the id of the project selected in TaskSideBar.
export const addProjectFromTask = (projectInfo) => {
  return {
    type: ADD_PROJECT_FROM_TASK,
    payload: projectInfo,
  };
};
export const getTaskProjectId = (projectId, projectName) => {
  return {
    type: GET_PROJECT_ID_TASK,
    payload: { projectId, projectName },
  };
};
export const onchangeTaskDate = (date) => {
  return {
    type: ON_CHANGE_TASK_DATE,
    payload: date,
  };
};
