import { AxiosResponse } from 'axios';

import Account from '../models/account';

import { BaseClient } from './base_client';

export class AccountServiceClient extends BaseClient {
  public static readonly SERVICE_URL = 'http://localhost:18001';

  /**
   * @param {String} accountSid
   * @return {Promise<PermissionList>}
   */
  public async getAccountBySid(accountSid: string): Promise<Account> {
    return this.get(`/v1/accounts/${accountSid}`).then(
      (response: AxiosResponse): Account => {
        return new Account(response.data);
      }
    );
  }
}
