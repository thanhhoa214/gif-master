import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { getAppConfigProvider } from '@shared/app-config';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './root.routes';
import { StateManagementModulesWithConfig } from '@shared/state-management';
import { LanguageModuleWithConfig } from '@shared/language';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StateManagementModulesWithConfig(environment),
    LanguageModuleWithConfig({ prodMode: environment.production }),
    RouterModule.forRoot(rootRoutes),
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    getAppConfigProvider(environment),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
  ]
})
export class AppModule {}
