import { LOGIN_USER } from "../actionType";

export const getLoginUser = (userName) => {
  return {
    type: LOGIN_USER,
    payload: userName,
  };
};
