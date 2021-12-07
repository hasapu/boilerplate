/** === IMPORT HERE === */
import * as types from '@types';
import * as models from '@models';
import simplifyReducer from '@core/redux/simplifyReducer';
/** === TYPE HERE === */
type ExampleCreateInitialProps = models.CreateItemProps;
/** === INITIAL STATE HERE === */
export const exampleCreateInitialState: ExampleCreateInitialProps = {
  data: null,
  error: null,
  loading: false,
};
/** === FUNCTION HERE === */
export const exampleCreateReducer = simplifyReducer(exampleCreateInitialState, {
  /** => process */
  [types.EXAMPLE_CREATE_PROCESS](state = exampleCreateInitialState) {
    return {
      ...state,
      loading: true,
    };
  },
  /** => success */
  [types.EXAMPLE_CREATE_SUCCESS](
    state = exampleCreateInitialState,
    action: models.CreateSuccessAction,
  ) {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  },
  /** => failed */
  [types.EXAMPLE_CREATE_FAILED](
    state = exampleCreateInitialState,
    action: models.CreateFailedAction,
  ) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  /** => reset */
  [types.EXAMPLE_CREATE_RESET]() {
    return exampleCreateInitialState;
  },
});
