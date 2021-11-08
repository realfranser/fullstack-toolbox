import { Router } from 'express';

import { Paths } from '../constants/resources';
import { IServiceClients } from '../interfaces/clients';
import { notFoundError } from '../middlewares/notFoundError';
import {
  createAccountServiceRoutes,
  createProductServiceRoutes,
} from '../routes';

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
  router.use(
    createProductServiceRoutes({
      routeUrl: Paths.API_ROUTE_V1_PRODUCTS,
      clients,
    })
  );

  // return 404 if defined routes aren't matched
  router.use(notFoundError);

  return router;
}
