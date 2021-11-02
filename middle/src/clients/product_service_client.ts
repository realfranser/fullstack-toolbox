import { AxiosResponse } from 'axios';

import { Product, ProductByIdParams } from '../models/product';

import { BaseClient } from './base_client';

export class ProductServiceClient extends BaseClient {
  public static readonly SERVICE_URL = 'http://localhost:18002';

  /**
   * @param {ProductBySidParams} params
   * @return {Promise<Product>}
   */
  public async getProductById(params: ProductByIdParams): Promise<Product> {
    return this.get('/v1/product', params).then(
      (response: AxiosResponse): Product => {
        return new Product(response.data);
      }
    );
  }
}
