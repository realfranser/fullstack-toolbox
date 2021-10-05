import { Router } from 'express';

import { createAccountServiceController } from '../controllers/account_service_controller';
import BaseResponse from '../helpers/base_response';
import { IServiceClients } from '../interfaces/clients';

export interface IAccountServiceRoutesConfig {
  routeUrl: string;
  clients: Pick<IServiceClients, 'accountServiceClient'>;
}

export function createAccountServiceRoutes({
  routeUrl,
  clients,
}: IAccountServiceRoutesConfig): Router {
  // eslint-disable-next-line new-cap
  const router = Router();
  const controller = createAccountServiceController(clients);

  router.get(`${routeUrl}`, BaseResponse.json(controller.getAccountById));

  return router;
}
