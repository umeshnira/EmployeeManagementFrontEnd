import { LOGIN_USER_SUCCESS, CHECK_LOGIN } from "../../actions/actionType";

const initialState = {
  login: false,
  loginUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: true,
        loginUser: action.payload,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        login: true,
        loginUser: action.payload,
      };

    default:
      return state;
  }
}
