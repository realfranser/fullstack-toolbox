/* eslint-disable @typescript-eslint/member-ordering */
import { ITokenPagingItemsList } from '../../interfaces/paging/token_paging';
import Model from '../base_model';

export default class TokenPagingItemsList<T>
  extends Model
  implements ITokenPagingItemsList<T>
{
  protected fields: string[] = ['items', 'nextToken', 'prevToken'];

  public items: T[] = [];

  public nextToken?: string = undefined;

  public prevToken?: string = undefined;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
