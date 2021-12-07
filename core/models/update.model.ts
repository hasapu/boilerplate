import { ErrorProps } from './error.model';
/** === THIS FOR DATA SUCCESS UPDATE === */
export interface DataSuccessUpdateProps {
  id: string;
  createdAt: string;
  updatedAt: string;
}
/** === THIS FOR SUCCESS UPDATE DATA === */
export interface UpdateSuccessProps {
  data: DataSuccessUpdateProps;
  message: string;
  code: number;
}
/** === THIS FOR CREATE PROCESS === */
export interface UpdateItemProps {
  loading: boolean;
  data: DataSuccessUpdateProps | null;
  error: ErrorProps | null;
}
export interface UpdateProps {
  update: UpdateItemProps;
}
/** === THIS FOR PROCESS CREATE DATA === */
export interface UpdateProcessProps<T> {
  id: string;
  data: T;
}
