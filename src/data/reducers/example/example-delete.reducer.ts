/** === IMPORT HERE === */
import * as types from '@types';
import * as models from '@models';
import simplifyReducer from '@core/redux/simplifyReducer';
/** === TYPE HERE === */
type ExampleDeleteInitialProps = models.DeleteItemProps;
/** === INITIAL STATE HERE === */
export const exampleDeleteInitialState: ExampleDeleteInitialProps = {
  data: null,
  error: null,
  loading: false,
};
/** === FUNCTION HERE === */
export const exampleDeleteReducer = simplifyReducer(exampleDeleteInitialState, {
  /** => process */
  [types.EXAMPLE_DELETE_PROCESS](state = exampleDeleteInitialState) {
    return {
      ...state,
      loading: true,
    };
  },
  /** => success */
  [types.EXAMPLE_DELETE_SUCCESS](
    state = exampleDeleteInitialState,
    action: models.DeleteSuccessAction,
  ) {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  },
  /** => failed */
  [types.EXAMPLE_DELETE_FAILED](
    state = exampleDeleteInitialState,
    action: models.DeleteFailedAction,
  ) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  /** => reset */
  [types.EXAMPLE_DELETE_RESET]() {
    return exampleDeleteInitialState;
  },
});
