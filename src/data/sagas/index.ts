import { all, fork } from 'redux-saga/effects';
import AuthSaga from '@core/data/sagas/auth/auth.saga';
import ExampleSaga from './example/example.saga';

function* rootSaga() {
  yield all([fork(AuthSaga)]);
  yield all([fork(ExampleSaga)]);
}

export default rootSaga;
