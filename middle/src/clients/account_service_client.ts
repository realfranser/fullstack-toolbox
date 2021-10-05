// import { AxiosResponse } from 'axios';

import { Account, AccountBySidParams } from '../models/account';

import { BaseClient } from './base_client';

export class AccountServiceClient extends BaseClient {
  public static readonly SERVICE_URL = 'http://localhost:18001';

  /**
   * @param {AccountBySidParams} params
   * @return {Promise<PermissionList>}
   */
  public async getAccountBySid(
    params: AccountBySidParams
  ): Promise<Account | string> {
    /*
    return this.get('/v1/accounts', params).then(
      (response: AxiosResponse): Account => {
        return new Account(response.data);
      }
    );*/
    return `The AccountService client has received a request from accountSid: ${params.accountSid}`;
  }
}
