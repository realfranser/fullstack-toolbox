export interface IPagination {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  canNextPage: boolean;
  canPrevPage: boolean;
  offset?: number;
}

export interface IPaginationRequest {
  pageIndex: number;
  pageSize: number;
  offset?: number;
}

export interface IPaginationResponse {
  pageCount: number;
}

export const defaultPaginationState = (pageCount: number): IPagination => ({
  pageIndex: 1,
  pageSize: 12,
  pageCount,
  canNextPage: pageCount > 1,
  canPrevPage: false,
});
