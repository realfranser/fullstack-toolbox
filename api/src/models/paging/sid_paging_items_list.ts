/* eslint-disable @typescript-eslint/member-ordering */
import { ISidPagingItemsList } from '../../interfaces/paging/sid_paging';
import Model from '../base_model';

export default class SidPagingItemsList<T>
  extends Model
  implements ISidPagingItemsList<T>
{
  protected fields: string[] = ['items', 'beforeSid', 'afterSid'];

  public items: T[] = [];

  public beforeSid?: string = undefined;

  public afterSid?: string = undefined;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
