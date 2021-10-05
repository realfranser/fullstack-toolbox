import * as querystring from 'querystring';

import Axios, { AxiosInstance } from 'axios';

import Model from '../models/base_model';

const createAsyncClient = (uri: string, timeout?: number): AxiosInstance => {
  return Axios.create({
    baseURL: uri,
    responseType: 'json',
    timeout: timeout || 10000,
    paramsSerializer: (params: object) => {
      let paramsToSerialize: object = params;
      if (params instanceof Model) {
        /*
         * if this object is still a Model then we should convert
         * to a plain object before sending to the server
         */
        paramsToSerialize = params.toJSON();
      }
      // support for multiple query parameters with the same key
      return querystring.stringify(
        paramsToSerialize as querystring.ParsedUrlQueryInput
      );
    },
  });
};

export default createAsyncClient;
