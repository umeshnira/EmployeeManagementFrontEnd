import { LOGIN_USER_SUCCESS } from "../../actions/actionType";

const initialState = {
  login: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: true,
      };

    default:
      return state;
  }
}
