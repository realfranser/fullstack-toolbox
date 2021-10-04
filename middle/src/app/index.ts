import express from 'express';

import { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export default app;
