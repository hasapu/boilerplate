import { all, fork } from 'redux-saga/effects';
import AuthSaga from '@core/data/sagas/auth/auth.saga';

function* rootSaga() {
  yield all([fork(AuthSaga)]);
}

export default rootSaga;
