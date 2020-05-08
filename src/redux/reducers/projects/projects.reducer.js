import {
  GET_PROJECT_LIST_SUCCES,
  GET_SELECT_PROJECT_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  projectList: [],
  selectProject: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_LIST_SUCCES:
      return {
        ...state,
        projectList: action.payload,
      };
    case GET_SELECT_PROJECT_SUCCESS:
      return {
        ...state,
        selectProject: action.payload[0],
      };

    default:
      return state;
  }
}
