/** === IMPORT PACKAGE HERE === */
import { put, call, takeLatest } from 'redux-saga/effects';
/** === IMPORT EXTERNAL FUNCTION HERE === */
import { ExampleApi } from '../../apis/example/example.api';
import * as ActionCreators from '@actions';
import * as types from '@types';
import * as models from '@models';
/** === FUNCTION === */
/** => example list */
function* exampleList(action: models.ListProcessAction) {
  try {
    const response: models.ListSuccessProps<models.Example[]> = yield call(
      () => {
        return ExampleApi.exampleList(action.payload);
      },
    );
    yield action.contextDispatch(ActionCreators.exampleListSuccess(response));
    yield put(ActionCreators.exampleListSuccess(response));
  } catch (error: any) {
    yield action.contextDispatch(ActionCreators.exampleListFailed(error));
    yield put(ActionCreators.exampleListFailed(error));
  }
}
/** => example detail */
function* exampleDetail(action: models.DetailProcessAction) {
  try {
    const response: models.DetailSuccessProps<models.Example> = yield call(
      () => {
        return ExampleApi.exampleDetail(action.payload);
      },
    );
    yield action.contextDispatch(ActionCreators.exampleDetailSuccess(response));
    yield put(ActionCreators.exampleDetailSuccess(response));
  } catch (error: any) {
    yield action.contextDispatch(ActionCreators.exampleDetailFailed(error));
    yield put(ActionCreators.exampleDetailFailed(error));
  }
}
/** => example create */
function* exampleCreate(
  action: models.CreateProcessAction<models.ExampleCreate>,
) {
  try {
    const response: models.CreateSuccessProps = yield call(() => {
      return ExampleApi.exampleCreate(action.payload);
    });
    yield action.contextDispatch(ActionCreators.exampleCreateSuccess(response));
    yield put(ActionCreators.exampleCreateSuccess(response));
  } catch (error: any) {
    yield action.contextDispatch(ActionCreators.exampleCreateFailed(error));
    yield put(ActionCreators.exampleCreateFailed(error));
  }
}
/** => example update */
function* exampleUpdate(
  action: models.UpdateProcessAction<models.ExampleUpdate>,
) {
  try {
    const response: models.UpdateSuccessProps = yield call(() => {
      return ExampleApi.exampleUpdate(action.payload);
    });
    yield action.contextDispatch(ActionCreators.exampleUpdateSuccess(response));
    yield put(ActionCreators.exampleUpdateSuccess(response));
  } catch (error: any) {
    yield action.contextDispatch(ActionCreators.exampleUpdateFailed(error));
    yield put(ActionCreators.exampleUpdateFailed(error));
  }
}
/** => example delete */
function* exampleDelete(action: models.DeleteProcessAction) {
  try {
    const response: models.DeleteSuccessProps = yield call(() => {
      return ExampleApi.exampleDelete(action.payload);
    });
    yield action.contextDispatch(ActionCreators.exampleDeleteSuccess(response));
    yield put(ActionCreators.exampleDeleteSuccess(response));
  } catch (error: any) {
    yield action.contextDispatch(ActionCreators.exampleDeleteFailed(error));
    yield put(ActionCreators.exampleDeleteFailed(error));
  }
}
/** === LISTEN FUNCTION === */
function* ExampleSaga() {
  yield takeLatest(types.EXAMPLE_LIST_PROCESS, exampleList);
  yield takeLatest(types.EXAMPLE_DETAIL_PROCESS, exampleDetail);
  yield takeLatest(types.EXAMPLE_CREATE_PROCESS, exampleCreate);
  yield takeLatest(types.EXAMPLE_UPDATE_PROCESS, exampleUpdate);
  yield takeLatest(types.EXAMPLE_DELETE_PROCESS, exampleDelete);
}

export default ExampleSaga;
