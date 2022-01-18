/* eslint-disable @typescript-eslint/member-ordering */
import {
  DEFAULT_PAGINATION_REQUEST,
  DEFAULT_PAGINATION_RESPONSE,
  IPaginationRequest,
  IPaginationResponse,
} from '../interfaces/paging/pagination';
import {
  IProduct,
  IProductByIdParams,
  IProductList,
  IProductListParams,
} from '../interfaces/product';

import Model from './base_model';

export class Product extends Model implements IProduct {
  protected fields: string[] = ['id', 'name', 'category', 'price', 'stock'];

  public id: string | undefined = undefined;

  public name: string | undefined = undefined;

  public category: string | undefined = undefined;

  public price: number | undefined = undefined;

  public stock: number | undefined = undefined;

  public description: string | undefined = undefined;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}

export class ProductByIdParams extends Model implements IProductByIdParams {
  protected fields: string[] = ['productId'];

  public productId = '';

  constructor(data: object) {
    super();
    this.populate(data);
  }
}

export class ProductList extends Model implements IProductList {
  protected fields: string[] = ['items'];

  public items: Product[] = [];

  public pagination: IPaginationResponse = DEFAULT_PAGINATION_RESPONSE;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}

export class ProductListParams extends Model implements IProductListParams {
  protected fields: string[] = ['pagination'];

  public pagination: IPaginationRequest = DEFAULT_PAGINATION_REQUEST;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
