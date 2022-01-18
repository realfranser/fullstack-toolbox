/* eslint-disable @typescript-eslint/member-ordering */
import {
  IProduct,
  IProductByIdParams,
  IProductList,
  IProductListParams,
} from '../interfaces/product';

import Model from './base_model';
import { SidPagingQueryParams } from './paging/sid_paging_query_params';

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

  constructor(data: object) {
    super();
    this.populate(data);
  }
}

export class ProductListParams
  extends SidPagingQueryParams
  implements IProductListParams
{
  protected fields: string[] = [
    'pageSize',
    'afterSid',
    'beforeSid',
    'to',
    'from',
  ];

  public to?: string;

  public from?: string;

  constructor(data: object) {
    super(data);
    this.populate(data);
  }
}
