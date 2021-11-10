export interface ISidPagingItemsList<T> {
  items: T[];
  beforeSid?: string;
  afterSid?: string;
}

export interface ISidPagingQueryParams {
  beforeSid?: string;
  afterSid?: string;
  pageSize?: number;
}
