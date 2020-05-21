import { ADD_DESIGINATION, GET_DESGNATION } from "../actionType";

export const getDesignation = () => {
  return {
    type: GET_DESGNATION,
  };
};

export const addDesignation = (designationData) => {
  return {
    type: ADD_DESIGINATION,
    payload: designationData,
  };
};
