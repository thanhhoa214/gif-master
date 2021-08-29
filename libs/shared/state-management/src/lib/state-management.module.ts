import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppConfig } from '@shared/app-config';
import { GifViewsState } from '@gif-master/gif-views/data-access';

export function StateManagementModulesWithConfig(config: AppConfig) {
  return [
    NgxsModule.forRoot([], { developmentMode: !config.production }),
    NgxsStoragePluginModule.forRoot({ key: [GifViewsState] }),
    config.production
      ? []
      : [
          NgxsLoggerPluginModule.forRoot({ disabled: config.production }),
          NgxsReduxDevtoolsPluginModule.forRoot({ disabled: config.production })
        ]
  ];
}
