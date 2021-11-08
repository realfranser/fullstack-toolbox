import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import logger from '../helpers/logger';

export class BaseClient {
  protected asyncClient: AxiosInstance;

  protected serviceName: string;

  protected headers: object;

  constructor(
    asyncClient: AxiosInstance,
    serviceName = 'service',
    baseHeaders: { [k: string]: string } | null = null
  ) {
    this.headers = {};
    this.asyncClient = asyncClient;
    this.serviceName = serviceName;
    this.addInterceptors();
  }

  static downstreamLogCensor: (params: any) => any = (props: any) => props;

  public static getResponseError(error: AxiosError): string {
    const { url } = error.config;
    const method =
      error.request && error.request.method
        ? error.request.method
        : 'unknown_method';
    const errorCode = error.response ? error.response.status : 500;
    const logData = error.response
      ? JSON.stringify(BaseClient.downstreamLogCensor(error.response.data))
      : 'unknown_data';
    return `[downstream] :: ${method.toUpperCase()} ${url} ${errorCode} ${logData}`;
  }

  private static onResponseSuccess(response: AxiosResponse): AxiosResponse {
    const { url } = response.config;
    const method = response.config.method
      ? response.config.method.toUpperCase()
      : '';
    const logData = Boolean(response.config.data)
      ? JSON.stringify(BaseClient.downstreamLogCensor(response.config.data))
      : '';
    logger.info(
      `[downstream] :: ${method} ${url} ${response.status} ${logData}`
    );
    return response;
  }

  private static async onResponseError(error: AxiosError) {
    logger.warn(BaseClient.getResponseError(error));
    return Promise.reject(error);
  }

  protected async get(
    url: string,
    params: object = {},
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    return this.asyncClient.get(url, {
      params,
      ...options,
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected async put(url: string, data?: any): Promise<AxiosResponse> {
    return this.asyncClient.put(url, data);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected async post(
    url: string,
    data?: any,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const headers = { ...this.headers, ...options.headers };
    const config = { ...options, headers };
    return this.asyncClient.post(url, data, config);
  }

  protected async delete(url: string): Promise<AxiosResponse> {
    return this.asyncClient.delete(url);
  }

  private addInterceptors() {
    this.asyncClient.interceptors.response.use(
      BaseClient.onResponseSuccess,
      BaseClient.onResponseError
    );
  }
}
