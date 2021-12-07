import * as types from '@types';
import * as models from '@models';
/** === LIST === */
/** => process */
export const exampleListProcess = (
  contextDispatch: (action: any) => any,
  data: models.ListProcessProps<models.ExampleListParams>,
): models.ListProcessAction => {
  contextDispatch({ type: types.EXAMPLE_LIST_PROCESS, payload: data });
  return { type: types.EXAMPLE_LIST_PROCESS, payload: data, contextDispatch };
};
/** => success */
export const exampleListSuccess = (
  data: models.ListSuccessProps<models.Example[]>,
): models.ListSuccessAction<models.Example[]> => {
  return { type: types.EXAMPLE_LIST_SUCCESS, payload: data };
};
/** => failed */
export const exampleListFailed = (
  data: models.ErrorProps,
): models.ListFailedAction => {
  return { type: types.EXAMPLE_LIST_FAILED, payload: data };
};
/** => refresh */
export const exampleListRefresh = () => {
  return { type: types.EXAMPLE_LIST_REFRESH };
};
/** => reset */
export const exampleListReset = () => {
  return { type: types.EXAMPLE_LIST_RESET };
};
/** => load more */
export const exampleListLoadMore = () => {
  return { type: types.EXAMPLE_LIST_LOADMORE };
};
/** === DETAIL === */
/** => process */
export const exampleDetailProcess = (
  contextDispatch: (action: any) => any,
  data: models.DetailProcessProps,
): models.DetailProcessAction => {
  contextDispatch({ type: types.EXAMPLE_DETAIL_PROCESS, payload: data });
  return { type: types.EXAMPLE_DETAIL_PROCESS, payload: data, contextDispatch };
};
/** => success */
export const exampleDetailSuccess = (
  data: models.DetailSuccessProps<models.Example>,
): models.DetailSuccessAction<models.Example> => {
  return { type: types.EXAMPLE_DETAIL_SUCCESS, payload: data };
};
/** => failed */
export const exampleDetailFailed = (
  data: models.ErrorProps,
): models.DetailFailedAction => {
  return { type: types.EXAMPLE_DETAIL_FAILED, payload: data };
};
/** => reset */
export const exampleDetailReset = () => {
  return { type: types.EXAMPLE_DETAIL_RESET };
};
/** === CREATE === */
/** => process */
export const exampleCreateProcess = (
  contextDispatch: (action: any) => any,
  data: models.CreateProcessProps<models.ExampleCreate>,
): models.CreateProcessAction<models.ExampleCreate> => {
  contextDispatch({ type: types.EXAMPLE_CREATE_PROCESS, payload: data });
  return {
    type: types.EXAMPLE_CREATE_PROCESS,
    payload: data,
    contextDispatch,
  };
};
/** => success */
export const exampleCreateSuccess = (
  data: models.CreateSuccessProps,
): models.CreateSuccessAction => {
  return { type: types.EXAMPLE_CREATE_SUCCESS, payload: data };
};
/** => failed */
export const exampleCreateFailed = (
  data: models.ErrorProps,
): models.CreateFailedAction => {
  return { type: types.EXAMPLE_CREATE_FAILED, payload: data };
};
/** => reset */
export const exampleCreateReset = () => {
  return { type: types.EXAMPLE_CREATE_RESET };
};
/** === UPDATE === */
/** => process */
export const exampleUpdateProcess = (
  contextDispatch: (action: any) => any,
  data: models.UpdateProcessProps<models.ExampleUpdate>,
): models.UpdateProcessAction<models.ExampleUpdate> => {
  contextDispatch({ type: types.EXAMPLE_UPDATE_PROCESS, payload: data });
  return {
    type: types.EXAMPLE_UPDATE_PROCESS,
    payload: data,
    contextDispatch,
  };
};
/** => success */
export const exampleUpdateSuccess = (
  data: models.UpdateSuccessProps,
): models.UpdateSuccessAction => {
  return { type: types.EXAMPLE_UPDATE_SUCCESS, payload: data };
};
/** => failed */
export const exampleUpdateFailed = (
  data: models.ErrorProps,
): models.UpdateFailedAction => {
  return { type: types.EXAMPLE_UPDATE_FAILED, payload: data };
};
/** => reset */
export const exampleUpdateReset = () => {
  return { type: types.EXAMPLE_UPDATE_RESET };
};
/** === DELETE === */
/** => process */
export const exampleDeleteProcess = (
  contextDispatch: (action: any) => any,
  data: models.DeleteProcessProps,
): models.DeleteProcessAction => {
  contextDispatch({ type: types.EXAMPLE_UPDATE_PROCESS, payload: data });
  return {
    type: types.EXAMPLE_DELETE_PROCESS,
    payload: data,
    contextDispatch,
  };
};
/** => success */
export const exampleDeleteSuccess = (
  data: models.DeleteSuccessProps,
): models.DeleteSuccessAction => {
  return { type: types.EXAMPLE_DELETE_SUCCESS, payload: data };
};
/** => failed */
export const exampleDeleteFailed = (
  data: models.ErrorProps,
): models.DeleteFailedAction => {
  return { type: types.EXAMPLE_DELETE_FAILED, payload: data };
};
/** => reset */
export const exampleDeleteReset = () => {
  return { type: types.EXAMPLE_DELETE_RESET };
};
