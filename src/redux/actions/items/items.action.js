import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DEL_ITEM } from "../actionType";

export const getItemsList = () => {
  return {
    type: GET_ITEMS,
  };
};

export const addItem = (fomrData) => {
  return {
    type: ADD_ITEM,
    payload: FormData,
  };
};

export const updateItems = (formData) => {
  return {
    type: UPDATE_ITEM,
    payload: formData,
  };
};

export const delItem = (delId) => {
  return {
    type: DEL_ITEM,
    payload: delId,
  };
};
