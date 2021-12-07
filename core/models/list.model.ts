import { ErrorProps } from './error.model';
/** === FETCH ITEM === */
export interface ListItemProps<T> {
  loading: boolean;
  loadMore: boolean;
  refresh: boolean;
  page: number;
  perPage: number;
  data: T;
  error: ErrorProps | null;
}
/** === FETCH DATA === */
export interface ListProps<T> {
  list: ListItemProps<T>;
}
/** === THIS FOR PROCESS FETCH DATA === */
export interface ListProcessDefaultProps {
  loading: boolean;
  page: number;
  sort?: 'asc' | 'desc';
  sortBy?: string;
  keyword?: string;
}
export type ListProcessProps<T = object> = ListProcessDefaultProps & T;
/** === THIS FOR PAGINATION === */
export interface Pagination {
  page: number;
  perPage: number;
}
/** === THIS FOR SUCCESS FETCH DATA === */
export interface ListSuccessProps<T> {
  meta: Pagination;
  data: T;
}
