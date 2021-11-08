import { AxiosResponse } from 'axios';

import { Product } from '../models/product';

import { BaseClient } from './base_client';

export class ProductServiceClient extends BaseClient {
  public static readonly SERVICE_URL = 'http://localhost:18002';

  /**
   * @param {string} productId
   * @return {Promise<Product>}
   */
  public async getProductById(productId: string): Promise<Product> {
    return this.get(`/v1/product/${productId}`).then(
      (response: AxiosResponse): Product => {
        return new Product(response.data);
      }
    );
  }
}
