/* eslint-disable @typescript-eslint/member-ordering */
import { IProductModel } from '../interfaces/product';

import Model from './base_model';

export class Product extends Model implements IProductModel {
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
