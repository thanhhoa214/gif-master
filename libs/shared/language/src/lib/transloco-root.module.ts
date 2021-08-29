import { HttpClient } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
  TranslocoConfig
} from '@ngneat/transloco';
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';

@Injectable()
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  imports: [TranslocoModule],
  exports: [TranslocoModule]
})
export class TranslocoRootModule {
  static forRoot(config?: Partial<TranslocoConfig>): ModuleWithProviders<TranslocoRootModule> {
    const customConfig = translocoConfig({
      availableLangs: ['en', 'vi'],
      defaultLang: 'en',
      // Remove this option if your application doesn't support changing language in runtime.
      reRenderOnLangChange: true,
      ...config
    });
    return {
      ngModule: TranslocoRootModule,
      providers: [
        { provide: TRANSLOCO_CONFIG, useValue: customConfig },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
      ]
    };
  }
}
