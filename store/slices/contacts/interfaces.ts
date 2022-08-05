
// declaring the types for our state
export interface ContactState  {
  pagination?: Pagination;
  totalPages?: number;
  currentPage?: number;
  results?: [];
  isLoading?: boolean;
};

export interface Pagination  {
  page?: number;
  totalCount?: number;
  totalPages?: number;
}