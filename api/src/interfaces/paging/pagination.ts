export const DEFAULT_PAGINATION_REQUEST: IPaginationRequest = {
  pageIndex: 1,
  pageSize: 10,
};

export interface IPaginationRequest {
  pageIndex: number;
  pageSize: number;
  offset?: number;
}

export const DEFAULT_PAGINATION_RESPONSE: IPaginationResponse = {
  pageCount: 1,
};

export interface IPaginationResponse {
  pageCount: number;
}
