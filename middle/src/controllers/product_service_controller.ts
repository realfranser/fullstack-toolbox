import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Product } from '../models/product';

export type IProductServiceControllerClients = Pick<
  IServiceClients,
  'productServiceClient'
>;

export interface IProductServiceController {
  getProductById: (req: Request) => Promise<Product>;
}

export const createProductServiceController = ({
  productServiceClient,
}: IProductServiceControllerClients): IProductServiceController => ({
  getProductById: async (req: Request) =>
    productServiceClient.getProductById(req.params.productId),
});
