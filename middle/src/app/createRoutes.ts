import { Router } from 'express';

import { Paths } from '../constants/resources';
import { IServiceClients } from '../interfaces/clients';
import { createAccountServiceRoutes } from '../routes/account_service_routes';
import { notFoundError } from '../middlewares/notFoundError';

export interface IRouteConfig {
  clients: IServiceClients;
}

export function createRoutes({ clients }: IRouteConfig): Router {
  // eslint-disable-next-line new-cap
  const router = Router();

  // Routes
  router.use(
    createAccountServiceRoutes({
      routeUrl: Paths.API_ROUTE_V1_ACCOUNTS,
      clients,
    })
  );

  // return 404 if defined routes aren't matched
  router.use(notFoundError);

  return router;
}
