import { IPaginationRequest, IPaginationResponse } from './paging/pagination';

type color = 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
type size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IProduct {
  name: string | undefined;
  category: string | undefined;
  price: number | undefined;
  stock: number | undefined;
  colorList: color[];
  sizeList: size[];
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
  pagination: IPaginationRequest;
}
