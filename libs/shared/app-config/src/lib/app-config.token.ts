import { InjectionToken, Provider } from '@angular/core';
export interface AppConfig {
  production: boolean;
  GIPHY_API_KEY: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('Shared App Config');

export const getAppConfigProvider = (appConfig: AppConfig): Provider => ({
  provide: APP_CONFIG,
  useValue: appConfig
});
