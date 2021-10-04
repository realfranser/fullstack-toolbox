/* eslint-disable @typescript-eslint/member-ordering */
import { IAccountModel } from '../interfaces/account';

import Model from './base_model';

export default class Account extends Model implements IAccountModel {
  protected fields: string[] = ['sid', 'authToken', 'friendlyName'];

  public sid: string | undefined = undefined;

  public authToken: string | undefined = undefined;

  public friendlyName: string | undefined = undefined;

  public startDate: string | undefined = undefined;

  constructor(data: object) {
    super();
    this.populate(data);
  }
}
