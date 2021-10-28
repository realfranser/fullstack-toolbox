import { Router } from 'express';

import { createProductServiceController } from '../controllers/inventory_product_service_controller';
import BaseResponse from '../helpers/base_response';
import { IServiceClients } from '../interfaces/clients';

export interface IProductServiceRoutesConfig {
  routeUrl: string;
  clients: Pick<IServiceClients, 'productServiceClient'>;
}

export function createProductServiceRoutes({
  routeUrl,
  clients,
}: IProductServiceRoutesConfig): Router {
  // eslint-disable-next-line new-cap
  const router = Router();
  const controller = createProductServiceController(clients);

  router.get(`${routeUrl}`, BaseResponse.json(controller.getProductById));

  return router;
}
