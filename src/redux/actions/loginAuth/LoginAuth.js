import { LOGIN_USER } from "../actionType";

export const getLoginUser = (userName, password) => {
  return {
    type: LOGIN_USER,
    payload: { userName, password },
  };
};
