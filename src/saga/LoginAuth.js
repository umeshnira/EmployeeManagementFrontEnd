import { takeLatest, call, put } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "../redux/actions/actionType";
import api from "../apis/api";

// API call function.

function* loginUserApi(userName, password) {
  // api here.

  const selectedEmplyee = yield api.employee().getSelectedEmployee(userName);
  const token = yield api.account().login(userName, password);

  var decodedHeader = jwt_decode(token.data.token);

  const user = JSON.stringify(decodedHeader);

  // const user = JSON.stringify(selectedEmplyee.data[0]);
  localStorage.setItem("user", user);

  return { decodedHeader };
}

// handle login user.
export function* handleLoginUser({ payload }) {
  try {
    let { userName, password } = payload;
    const { decodedHeader } = yield call(loginUserApi, userName, password);
    yield put({ type: LOGIN_USER_SUCCESS, payload: decodedHeader });
  } catch (error) {
    console.log(error);
  }
}

// LoginAuth Watche function.
export function* loginAuthWatchFunc() {
  yield takeLatest(LOGIN_USER, handleLoginUser);
}
