import { fork } from 'redux-saga/effects';

import addTaskAsync from '../../containers/organisms/Tasks/Tasks.saga';

export default function* rootSaga() {
  yield fork(addTaskAsync);
}
