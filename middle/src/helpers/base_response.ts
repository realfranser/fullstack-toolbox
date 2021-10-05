import { NextFunction, Request, RequestHandler, Response } from 'express';

import { translateData } from './translation';

export default class BaseResponse {
  public static json(
    thenable: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ): RequestHandler {
    return async (req, res, next) =>
      thenable(req, res, next)
        .then((rawData: any) => {
          const responseData = translateData(rawData);

          res.header('Content-Type', 'application/json');
          res.send(responseData);
        })
        .catch(next);
  }
}
