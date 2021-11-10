export interface ITokenPagingItemsList<T> {
  items: T[];
  nextToken?: string;
  prevToken?: string;
}
