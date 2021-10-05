interface IServiceConfig {
  serviceUrl: string;
  name: string;
}

export interface IConfig {
  serviceName: string;
  host: string;
  port: number;
  clients: {
    [serviceName: string]: IServiceConfig;
  };
}
