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
}

export interface IProductListParams {
  from?: string;
  to?: string;
}
