import { UserServiceClient, ProductServiceClient } from '../clients';

import createAsyncClient from '../helpers/async_client';
import { IServiceClients } from '../interfaces/clients';

import { config } from '../../config/default';

export function createClients(): IServiceClients {
  // Clients
  const userServiceClient = new UserServiceClient(
    createAsyncClient(config.clients.accountService.serviceUrl),
    config.clients.accountService.name
  );
  const productServiceClient = new ProductServiceClient(
    createAsyncClient(config.clients.productService.serviceUrl),
    config.clients.productService.name
  );

  // Orchestrators

  return {
    userServiceClient,
    productServiceClient,
  };
}
