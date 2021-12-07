/** === IMPORT HERE === */
import * as types from '@types';
import * as models from '@models';
import simplifyReducer from '@core/redux/simplifyReducer';
/** === TYPE HERE === */
type ExampleUpdateInitialProps = models.UpdateItemProps;
/** === INITIAL STATE HERE === */
export const exampleUpdateInitialState: ExampleUpdateInitialProps = {
  data: null,
  error: null,
  loading: false,
};
/** === FUNCTION HERE === */
export const exampleUpdateReducer = simplifyReducer(exampleUpdateInitialState, {
  /** => process */
  [types.EXAMPLE_UPDATE_PROCESS](state = exampleUpdateInitialState) {
    return {
      ...state,
      loading: true,
    };
  },
  /** => success */
  [types.EXAMPLE_UPDATE_SUCCESS](
    state = exampleUpdateInitialState,
    action: models.UpdateSuccessAction,
  ) {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  },
  /** => failed */
  [types.EXAMPLE_UPDATE_FAILED](
    state = exampleUpdateInitialState,
    action: models.UpdateFailedAction,
  ) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  /** => reset */
  [types.EXAMPLE_UPDATE_RESET]() {
    return exampleUpdateInitialState;
  },
});
