import { IPaginationRequest, IPaginationResponse } from './paging/pagination';

export interface IProduct {
  id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  price: number | undefined;
  stock: number | undefined;
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
