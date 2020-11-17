import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "../redux/actions/actionType";
import api from "../apis/api";

// API call function.

function* loginUserApi(userName) {
  // api here.
  const selectedEmplyee = yield api.employee().getSleectedEmployee(userName);
  const user = JSON.stringify(selectedEmplyee.data[0]);
  localStorage.setItem("user", user);

  return { selectedEmplyee };
}

// handle login user.
export function* handleLoginUser({ payload }) {
  try {
    let userName = payload;
    yield call(loginUserApi, userName);
    yield put({ type: LOGIN_USER_SUCCESS });
  } catch (error) {
    console.log(error);
  }
}

// LoginAuth Watche function.
export function* loginAuthWatchFunc() {
  yield takeLatest(LOGIN_USER, handleLoginUser);
}
