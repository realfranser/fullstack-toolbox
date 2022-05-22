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
  protected fields: string[] = [
    'id',
    'name',
    'category',
    'price',
    'stock',
    'colorList',
    'sizeList',
    'description',
  ];

  public id: number | undefined = undefined;

  public name: string | undefined = undefined;

  public category: string | undefined = undefined;

  public price: number | undefined = undefined;

  public stock: number | undefined = undefined;

  public colorList?:
    | ('Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow')[]
    | undefined;

  public sizeList?: ('XS' | 'S' | 'M' | 'L' | 'XL')[] | undefined;

  public imageUrl: string | undefined = undefined;

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
  protected fields: string[] = ['sort', 'color', 'size', 'pagination'];

  public sort: 'Newest' | 'Price (asc)' | 'Price (desc)' | undefined;

  public color?:
    | ('Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow')
    | undefined;

  public size?: ('XS' | 'S' | 'M' | 'L' | 'XL') | undefined;

  public pagination: IPaginationRequest = DEFAULT_PAGINATION_REQUEST;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
