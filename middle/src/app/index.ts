import express from 'express';

import config from 'config';
import log from '../helpers/logger';
import { createClients } from './createClients';
import { createRoutes } from './createRoutes';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

const clients = createClients();

app.use(createRoutes({ clients }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
});

export default app;
