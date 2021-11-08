import express from 'express';

import { config } from '../../config/default';
import log from '../helpers/logger';
import { createClients } from './createClients';
import { createRoutes } from './createRoutes';

const PORT = config.port as number;
const HOST = config.host as string;

const app = express();

const clients = createClients();

app.use(createRoutes({ clients }));

app.listen(PORT, HOST, () => {
  log.info(`Server listening at http://${HOST}:${PORT}`);
});

export default app;
