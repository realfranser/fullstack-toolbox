export interface IProduct {
  id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  price: number | undefined;
  stock: number | undefined;
  description: string | undefined;
}

/* TODO: product pagination */
export interface IProductList {
  products: IProduct[] | undefined;
}
