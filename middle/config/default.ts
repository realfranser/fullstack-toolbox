import { IConfig } from './interfaces';

const host = process.env.HOST || 'localhost';
const PORT = 18000;
const SERVICE_NAME = 'middle-toolbox';
const UPSTREAM_HOST = 'http://localhost';

export const config: IConfig = {
  serviceName: SERVICE_NAME,
  host,
  port: PORT,
  clients: {
    accountService: {
      name: 'account-service',
      serviceUrl: `${UPSTREAM_HOST}:18001`,
    },
    productService: {
      name: 'inventory-product-service',
      serviceUrl: `${UPSTREAM_HOST}:18002`,
    },
  },
};
