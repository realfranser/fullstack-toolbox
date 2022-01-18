import { Request } from 'express';

import { IServiceClients } from '../interfaces/clients';
import { Account, AccountBySidParams } from '../models/account';

export type IUserServiceControllerClients = Pick<
  IServiceClients,
  'userServiceClient'
>;

export interface IAccountServiceController {
  getAccountBySid: (req: Request) => Promise<Account | string>;
}

export const createUserServiceController = ({
  userServiceClient,
}: IUserServiceControllerClients): IUserServiceController => ({
  getAccountBySid: async (req: Request) =>
    userServiceClient.getAccountBySid(new AccountBySidParams(req.query)),
});
