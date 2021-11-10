/* eslint-disable @typescript-eslint/member-ordering */
import { ISidPagingQueryParams } from '../../interfaces/paging/sid_paging';
import Model from '../base_model';

export class SidPagingQueryParams
  extends Model
  implements ISidPagingQueryParams
{
  protected fields: string[] = ['pageSize', 'afterSid', 'beforeSid'];

  public afterSid?: string;

  public beforeSid?: string;

  public pageSize?: number;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
