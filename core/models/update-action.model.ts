/** === IMPORT EXTERNAL MODEL === */
import { UpdateSuccessProps, UpdateProcessProps } from './update.model';
import { ErrorProps } from './error.model';
/** === PROCESS === */
export interface UpdateProcessAction<T> {
  type: string;
  payload: UpdateProcessProps<T>;
  contextDispatch: (action: any) => any;
}
/** === SUCCESS === */
export interface UpdateSuccessAction {
  type: string;
  payload: UpdateSuccessProps;
}
/** === FAILED === */
export interface UpdateFailedAction {
  type: string;
  payload: ErrorProps;
}
