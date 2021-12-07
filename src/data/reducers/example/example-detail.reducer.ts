/** === IMPORT HERE === */
import * as types from '@types';
import * as models from '@models';
import simplifyReducer from '@core/redux/simplifyReducer';
/** === TYPE HERE === */
type ExampleDetailInitialProps = models.DetailItemProps<models.Example>;
/** === INITIAL STATE HERE === */
export const exampleDetailInitialState: ExampleDetailInitialProps = {
  data: null,
  error: null,
  loading: false,
};
/** === FUNCTION HERE === */
export const exampleDetailReducer = simplifyReducer(exampleDetailInitialState, {
  /** => process */
  [types.EXAMPLE_DETAIL_PROCESS](state = exampleDetailInitialState) {
    return {
      ...state,
      loading: true,
    };
  },
  /** => success */
  [types.EXAMPLE_DETAIL_SUCCESS](
    state = exampleDetailInitialState,
    action: models.DetailSuccessAction<models.Example>,
  ) {
    return {
      ...state,
      data: action.payload.data,
      loading: false,
    };
  },
  /** => failed */
  [types.EXAMPLE_LIST_FAILED](
    state = exampleDetailInitialState,
    action: models.DetailFailedAction,
  ) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  /** => reset */
  [types.EXAMPLE_DETAIL_RESET]() {
    return exampleDetailInitialState;
  },
});
