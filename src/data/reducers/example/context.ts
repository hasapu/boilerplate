/** === IMPORT HERE === */
import * as models from '@models';
import {
  exampleListReducer,
  exampleListInitialState,
} from './example-list.reducer';
import {
  exampleDetailReducer,
  exampleDetailInitialState,
} from './example-detail.reducer';
import {
  exampleCreateReducer,
  exampleCreateInitialState,
} from './example-create.reducer';
import {
  exampleUpdateReducer,
  exampleUpdateInitialState,
} from './example-update.reducer';
import {
  exampleDeleteReducer,
  exampleDeleteInitialState,
} from './example-delete.reducer';
/** === TYPE HERE === */
export type ExampleInitialProps = models.ListProps<models.Example[]> &
  models.DetailProps<models.Example> &
  models.CreateProps &
  models.UpdateProps &
  models.DeleteProps;
/** === INITIAL HERE === */
export const exampleInitialState = {
  list: exampleListInitialState,
  detail: exampleDetailInitialState,
  create: exampleCreateInitialState,
  update: exampleUpdateInitialState,
  delete: exampleDeleteInitialState,
};
/** === EXPORT ALL HERE === */
export const exampleReducer = (
  { list, detail, create, update, dlt }: any,
  action: any,
) => ({
  list: exampleListReducer(list, action),
  detail: exampleDetailReducer(detail, action),
  create: exampleCreateReducer(create, action),
  update: exampleUpdateReducer(update, action),
  delete: exampleDeleteReducer(dlt, action),
});
