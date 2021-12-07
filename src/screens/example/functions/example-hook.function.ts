/** === IMPORT PACKAGE HERE === */
import { useDispatch } from 'react-redux';
/** === IMPORT EXTERNAL FUNCTION HERE === */
import * as Actions from '@actions';
import * as models from '@models';
/** === FUNCTION === */
/** => get data list */
const callList = (
  contextDispatch: (action: any) => any,
  loading: boolean,
  page: number,
) => {
  return Actions.exampleListProcess(contextDispatch, {
    loading,
    page,
  });
};
/** => list action */
const useExampleListAction = () => {
  const dispatch = useDispatch();
  return {
    list: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleListReset());
      dispatch(Actions.exampleListReset());
      dispatch(callList(contextDispatch, true, 1));
    },
    loadMore: (
      contextDispatch: (action: any) => any,
      list: models.ListItemProps<models.Example[]>,
    ) => {
      if (
        list.page > 0 &&
        list.error === null &&
        list.perPage <= list.data.length
      ) {
        contextDispatch(Actions.exampleListLoadMore());
        dispatch(Actions.exampleListLoadMore());
        dispatch(callList(contextDispatch, false, list.page));
      }
    },
    refresh: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleListRefresh());
      dispatch(Actions.exampleListRefresh());
      dispatch(callList(contextDispatch, true, 1));
    },
    reset: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleListReset());
      dispatch(Actions.exampleListReset());
    },
  };
};
/** => detail action */
const useExampleDetailAction = () => {
  const dispatch = useDispatch();
  return {
    detail: (contextDispatch: (action: any) => any, id: string) => {
      contextDispatch(Actions.exampleDetailReset());
      dispatch(Actions.exampleDetailReset());
      dispatch(Actions.exampleDetailProcess(contextDispatch, { id }));
    },
    reset: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleDetailReset());
      dispatch(Actions.exampleDetailReset());
    },
  };
};
/** => create action */
const useExampleCreateAction = () => {
  const dispatch = useDispatch();
  return {
    create: (
      contextDispatch: (action: any) => any,
      data: models.ExampleCreate,
    ) => {
      contextDispatch(Actions.exampleCreateReset());
      dispatch(Actions.exampleCreateReset());
      dispatch(Actions.exampleCreateProcess(contextDispatch, { data }));
    },
    reset: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleCreateReset());
      dispatch(Actions.exampleCreateReset());
    },
  };
};
/** => update action */
const useExampleUpdateAction = () => {
  const dispatch = useDispatch();
  return {
    update: (
      contextDispatch: (action: any) => any,
      id: string,
      data: models.ExampleUpdate,
    ) => {
      contextDispatch(Actions.exampleUpdateReset());
      dispatch(Actions.exampleUpdateReset());
      dispatch(Actions.exampleUpdateProcess(contextDispatch, { id, data }));
    },
    reset: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleUpdateReset());
      dispatch(Actions.exampleUpdateReset());
    },
  };
};
/** => delete action */
const useExampleDeleteAction = () => {
  const dispatch = useDispatch();
  return {
    delete: (contextDispatch: (action: any) => any, id: string) => {
      contextDispatch(Actions.exampleDeleteReset());
      dispatch(Actions.exampleDeleteReset());
      dispatch(Actions.exampleDeleteProcess(contextDispatch, { id }));
    },
    reset: (contextDispatch: (action: any) => any) => {
      contextDispatch(Actions.exampleDeleteReset());
      dispatch(Actions.exampleDeleteReset());
    },
  };
};
/** === EXPORT === */
export {
  useExampleListAction,
  useExampleDetailAction,
  useExampleCreateAction,
  useExampleUpdateAction,
  useExampleDeleteAction,
};
/**
 * ================================================================
 * NOTES
 * ================================================================
 * createdBy: hasapu (team)
 * createDate: 01022021
 * updatedBy: -
 * updatedDate: -
 * updatedFunction/Component:
 * -> NaN (no desc)
 * -> NaN (no desc)
 */
