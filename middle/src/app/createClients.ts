import { AccountServiceClient } from '../clients/account_service_client';

import createAsyncClient from '../helpers/async_client';
import { IServiceClients } from '../interfaces/clients';

import { config } from '../../config/default';

export function createClients(): IServiceClients {
  // Clients
  const accountServiceClient = new AccountServiceClient(
    createAsyncClient(config.clients.accountService.serviceUrl),
    config.clients.accountService.name
  );

  // Orchestrators

  return {
    accountServiceClient,
  };
}
