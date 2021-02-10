import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, put, takeEvery } from 'redux-saga/effects';
import delay from '../utils/delay';

const initialState = {
  lists: [
    {
      id: 1,
      name: 'To Do',
      bgColor: 'primary.300',
      data: [],
    },
    {
      id: 2,
      name: 'In Progress',
      bgColor: 'blue.400',
      data: [],
    },
    {
      id: 3,
      name: 'Complete',
      bgColor: 'green.400',
      data: [],
    },
  ]
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOARD/CREATE_CARD':
      return { ...state };
    case 'BOARD/MOVE_CARD':
      return { ...state };
    default:
      return state;
  }
};

// worker saga
function* createCard(action) {
  console.log('createCard', action);
  yield delay(1000);
  yield put({ type: 'BOARD/CREATE_CARD' });
}

function* moveCard(action) {
  console.log('moveCard', action);
  yield delay(1000);
  yield put({ type: 'BOARD/MOVE_CARD' })
}

// watcher saga
function* boardSaga() {
  yield takeEvery('BOARD/CREATE_CARD', createCard);
  yield takeEvery('BOARD/MOVE_CARD', moveCard);
}

// root saga
function* rootSaga() {
  yield all([
    boardSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  boardReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export { store };
