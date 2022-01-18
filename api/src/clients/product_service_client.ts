import { AxiosResponse } from 'axios';
import { IProductListParams } from '../interfaces/product';

import { Product, ProductList } from '../models/product';

import { BaseClient } from './base_client';

export class ProductServiceClient extends BaseClient {
  public static readonly SERVICE_URL = 'http://localhost:18002';

  /**
   * @return {Promise<ProductList>}
   */
  public async getAllProducts(): Promise<ProductList> {
    return this.get('/api/v1/products').then(
      (response: AxiosResponse): ProductList => {
        return new ProductList(response.data);
      }
    );
  }

  /**
   * @param {string} category
   * @param {IProductListParams} params
   * @return {Promise<ProductList>}
   */
  public async getProductListByCategory(
    category: string,
    params: IProductListParams
  ): Promise<ProductList> {
    return this.get(`/api/v1/products/${category}`, params).then(
      (response: AxiosResponse): ProductList => {
        return new ProductList(response.data);
      }
    );
  }

  /**
   * @param {string} productId
   * @return {Promise<Product>}
   */
  public async getProductById(productId: string): Promise<Product> {
    return this.get(`/api/v1/product/${productId}`).then(
      (response: AxiosResponse): Product => {
        return new Product(response.data);
      }
    );
  }
}
