import { IPaginationRequest, IPaginationResponse } from './paging/pagination';

type color = 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
type size = 'XS' | 'S' | 'M' | 'L' | 'XL';
type sort = 'Newest' | 'Price (asc)' | 'Price (desc)';

export interface IProduct {
  id: number | undefined;
  name: string | undefined;
  category: string | undefined;
  price: number | undefined;
  stock?: number;
  colorList?: color[];
  sizeList?: size[];
  description: string | undefined;
}

export interface IProductByIdParams {
  productId: string;
}

/* TODO: product pagination */
export interface IProductList {
  items: IProduct[];
  pagination: IPaginationResponse;
}

export interface IProductListParams {
  sort: sort | undefined;
  color?: color;
  size?: size;
  pagination: IPaginationRequest;
}
