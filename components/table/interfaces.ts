import { ReactElement } from "react";

export interface TableProps {
  columns: Array<Columns>;
  title?: string;
  data?: Array<any>;
  changePage?: (e: number) => void;
  actions?: Array<Actions> | any;
  pagination?: Pagination;
};

export interface Columns {
  title?: string;
  field?: string; 
};

export interface Pagination {
  page?: number;
  totalCount?: number;
  totalPages?: number;
};

export interface Actions {
  icon: string | ReactElement | any;
  tooltip?: string;
  onClick?: () => void;
};
