import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Product, ProductList, ProductListParams } from '../models/product';

export type IProductServiceControllerClients = Pick<
  IServiceClients,
  'productServiceClient'
>;

export interface IProductServiceController {
  getAllProducts: (req: Request) => Promise<ProductList>;
  getProductListByCategory: (req: Request) => Promise<ProductList>;
  getProductById: (req: Request) => Promise<Product>;
}

export const createProductServiceController = ({
  productServiceClient,
}: IProductServiceControllerClients): IProductServiceController => ({
  getAllProducts: async (req: Request) => productServiceClient.getAllProducts(),
  getProductListByCategory: async (req: Request) =>
    productServiceClient.getProductListByCategory(
      req.params.category,
      new ProductListParams(req.body)
    ),
  getProductById: async (req: Request) =>
    productServiceClient.getProductById(req.params.productId),
});
