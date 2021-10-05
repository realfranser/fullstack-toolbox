import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Account, AccountBySidParams } from '../models/account';

export type IAccountServiceControllerClients = Pick<
  IServiceClients,
  'accountServiceClient'
>;

export interface IAccountServiceController {
  getAccountById: (req: Request) => Promise<Account>;
}

export const createAccountServiceController = ({
  accountServiceClient,
}: IAccountServiceControllerClients): IAccountServiceController => ({
  getAccountById: async (req: Request) =>
    accountServiceClient.getAccountBySid(new AccountBySidParams(req.query)),
});
