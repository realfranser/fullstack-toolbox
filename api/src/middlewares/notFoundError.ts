import * as boom from '@hapi/boom';
import { RequestHandler } from 'express';

export const notFoundError: RequestHandler = (req, res, next) => {
  const routeNotFoundError = boom.notFound('Specified route does not exist.');
  next(routeNotFoundError);
};

/*
import { RequestHandler } from 'express';

export const notFoundError: RequestHandler = (req, res, next) => {
  console.log('This are the request params: ', req.query);
};
*/
