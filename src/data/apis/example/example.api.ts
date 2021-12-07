/** === IMPORT EXTERNAL FUNCTION === */
import apiMapping from '@core/services/apiMapping';
import * as models from '@models';
/** === FUNCTION === */
/** => example list */
const exampleList = (data: models.ListProcessProps) => {
  const path = `orders?page=${data.page}`;
  return apiMapping<models.Example[]>(
    'auth',
    path,
    'boilerplate',
    'v1',
    'LIST',
  );
};
/** => example detail */
const exampleDetail = (data: models.DetailProcessProps) => {
  const path = `orders/${data.id}`;
  return apiMapping<models.Example>(
    'auth',
    path,
    'boilerplate',
    'v1',
    'DETAIL',
  );
};
/** => example create */
const exampleCreate = (
  data: models.CreateProcessProps<models.ExampleCreate>,
) => {
  const path = 'orders';
  return apiMapping('auth', path, 'boilerplate', 'v1', 'CREATE', data.data);
};
/** => example update */
const exampleUpdate = (
  data: models.UpdateProcessProps<models.ExampleUpdate>,
) => {
  const path = `orders/${data.id}`;
  return apiMapping('auth', path, 'boilerplate', 'v1', 'UPDATE', data.data);
};
/** => example delete */
const exampleDelete = (data: models.DeleteProcessProps) => {
  const path = `orders/${data.id}`;
  return apiMapping('auth', path, 'boilerplate', 'v1', 'DELETE');
};
/** === EXPORT FUNCTIONS === */
export const ExampleApi = {
  exampleList,
  exampleDetail,
  exampleCreate,
  exampleUpdate,
  exampleDelete,
};
