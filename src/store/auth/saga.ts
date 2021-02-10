import { call, cancel, cancelled, fork, put, take } from "redux-saga/effects";
import delay from "../../utils/delay";

const storeItem = (key: string, value: string) => localStorage.setItem(key, value);
const clearItem = (key: string) => localStorage.removeItem(key);

function* authorize(user, password) {
  try {
    console.log(user, password);

    // call authorize api
    yield delay(1000);
    const token = 's089dsojhfewse0879ewqrhoi9807';

    yield put({ type: 'LOGIN_SUCCESS ', token });
    yield call(storeItem, 'token', token);
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  } finally {
    if (yield cancelled()) {
      // task is aborted
      // reset pending state?
    }
  }
}

function* loginFlow() {
  while (true) {
    const { user, password } = yield take('LOGIN_REQUEST');
    const task = yield fork(authorize, user, password);
    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
    if (action.type === 'LOGOUT') {
      yield cancel(task);
    }
    yield call(clearItem, 'token');
  }
}
