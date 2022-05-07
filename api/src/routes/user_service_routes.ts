import { Router } from 'express';

import { createUserServiceController } from '../controllers/user_service_controller';
import BaseResponse from '../helpers/base_response';
import { IServiceClients } from '../interfaces/clients';

export interface IUserServiceRoutesConfig {
  routeUrl: string;
  clients: Pick<IServiceClients, 'userServiceClient'>;
}

export function createUserServiceRoutes({
  routeUrl,
  clients,
}: IUserServiceRoutesConfig): Router {
  // eslint-disable-next-line new-cap
  const router = Router();
  const controller = createUserServiceController(clients);

  router.get(`${routeUrl}`, BaseResponse.json(controller.getAccountBySid));

  return router;
}
