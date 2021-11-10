import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Product, ProductList } from '../models/product';

export type IProductServiceControllerClients = Pick<
  IServiceClients,
  'productServiceClient'
>;

export interface IProductServiceController {
  getAllProducts: (req: Request) => Promise<ProductList>;
  getProductById: (req: Request) => Promise<Product>;
}

export const createProductServiceController = ({
  productServiceClient,
}: IProductServiceControllerClients): IProductServiceController => ({
  getAllProducts: async (req: Request) => productServiceClient.getAllProducts(),
  getProductById: async (req: Request) =>
    productServiceClient.getProductById(req.params.productId),
});
