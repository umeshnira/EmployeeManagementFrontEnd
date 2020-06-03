import { GET_ITEMS_SUCCESS } from "../../actions/actionType";

const initialState = {
  itemList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        itemList: action.payload,
      };
    default:
      return state;
  }
}
