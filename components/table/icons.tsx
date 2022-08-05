/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@mui/icons-material';
import { Icons } from 'material-table';

export const tableIcons: Icons = {
  Add: forwardRef((props: any, ref: any) => <AddBox { ...props } ref = { ref } />),
  Check: forwardRef((props: any, ref: any) => <Check { ...props } ref = { ref } />),
  Clear: forwardRef((props: any, ref: any) => <Clear { ...props } ref = { ref } />),
  Delete: forwardRef((props: any, ref: any) => <DeleteOutline { ...props } ref = { ref } />),
  DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight { ...props } ref = { ref } />),
  Edit: forwardRef((props: any, ref: any) => <Edit { ...props } ref = { ref } />),
  Export: forwardRef((props: any, ref: any) => <SaveAlt { ...props } ref = { ref } />),
  Filter: forwardRef((props: any, ref: any) => <FilterList { ...props } ref = { ref } />),
  FirstPage: forwardRef((props: any, ref: any) => <FirstPage { ...props } ref = { ref } />),
  LastPage: forwardRef((props: any, ref: any) => <LastPage { ...props } ref = { ref } />),
  NextPage: forwardRef((props: any, ref: any) => <ChevronRight { ...props } ref = { ref } />),
  PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft { ...props } ref = { ref } />),
  ResetSearch: forwardRef((props: any, ref: any) => <Clear { ...props } ref = { ref } />),
  Search: forwardRef((props: any, ref: any) => <Search { ...props } ref = { ref } />),
  SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward { ...props } ref = { ref } />),
  ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove { ...props } ref = { ref } />),
  ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn { ...props } ref = { ref } />)
};