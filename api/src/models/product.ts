/* eslint-disable @typescript-eslint/member-ordering */
import { IProduct, IProductList } from '../interfaces/product';

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

export class ProductList extends Model implements IProductList {
  protected fields: string[] = ['products'];

  public products: IProduct[] | undefined = undefined;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}

export interface IProductByIdParams {
  productId: string;
}

export class ProductByIdParams extends Model implements IProductByIdParams {
  protected fields: string[] = ['productId'];

  public productId = '';

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
