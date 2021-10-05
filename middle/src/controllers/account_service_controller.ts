import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Account, AccountBySidParams } from '../models/account';

export type IAccountServiceControllerClients = Pick<
  IServiceClients,
  'accountServiceClient'
>;

export interface IAccountServiceController {
  getAccountBySid: (req: Request) => Promise<Account | string>;
}

export const createAccountServiceController = ({
  accountServiceClient,
}: IAccountServiceControllerClients): IAccountServiceController => ({
  getAccountBySid: async (req: Request) =>
    accountServiceClient.getAccountBySid(new AccountBySidParams(req.query)),
});
