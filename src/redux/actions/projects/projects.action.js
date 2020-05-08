import { GET_PROJECT_LIST, GET_SELECT_PROJECT } from "../actionType";

// Saga Call.
export const getProjectList = () => {
  return {
    type: GET_PROJECT_LIST,
  };
};

export const getSelectProject = (projectId) => {
  return {
    type: GET_SELECT_PROJECT,
    payload: projectId,
  };
};
