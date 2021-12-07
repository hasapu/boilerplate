/** === IMPORT HERE === */
import * as types from '@types';
import * as models from '@models';
import simplifyReducer from '@core/redux/simplifyReducer';
/** === TYPE HERE === */
type ExampleListInitialProps = models.ListItemProps<models.Example[]>;
/** === INITIAL STATE HERE === */
export const exampleListInitialState: ExampleListInitialProps = {
  data: [],
  error: null,
  loading: false,
  loadMore: false,
  refresh: false,
  page: 0,
};
/** === FUNCTION HERE === */
export const exampleListReducer = simplifyReducer(exampleListInitialState, {
  /** => process */
  [types.EXAMPLE_LIST_PROCESS](
    state = exampleListInitialState,
    action: models.ListProcessAction,
  ) {
    return {
      ...state,
      loading: action.payload.loading,
      error: null,
    };
  },
  /** => success */
  [types.EXAMPLE_LIST_SUCCESS](
    state = exampleListInitialState,
    action: models.ListSuccessAction<models.Example[]>,
  ) {
    return {
      ...state,
      data: [...state.data, ...action.payload.data],
      loading: false,
      loadMore: false,
      refresh: false,
      page: action.payload.data.length !== 0 ? action.payload.meta.page + 1 : 0,
    };
  },
  /** => failed */
  [types.EXAMPLE_LIST_FAILED](
    state = exampleListInitialState,
    action: models.ListFailedAction,
  ) {
    return {
      ...state,
      loading: false,
      loadMore: false,
      refresh: false,
      error: action.payload,
    };
  },
  /** => load more */
  [types.EXAMPLE_LIST_LOADMORE](state = exampleListInitialState) {
    return {
      ...state,
      loadMore: true,
    };
  },
  /** => refresh */
  [types.EXAMPLE_LIST_REFRESH]() {
    return {
      ...exampleListInitialState,
      refresh: true,
    };
  },
  /** => reset */
  [types.EXAMPLE_LIST_RESET]() {
    return exampleListInitialState;
  },
});
