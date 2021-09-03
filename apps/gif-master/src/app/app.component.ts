import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutoTitleService } from '@shared/util';
import { FacebookService } from 'ngx-facebook';
import { DarkModeWatchService } from '@shared/dark-mode';
@Component({
  selector: 'gif-master-root',
  template: '<tui-root><router-outlet></router-outlet></tui-root>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    autoTitle: AutoTitleService,
    darkModeWatch: DarkModeWatchService,
    facebookService: FacebookService
  ) {
    autoTitle.setupAutoTitleListener();
    darkModeWatch.registerWatchMediaListener();
    facebookService.init({
      appId: '587758219070590',
      xfbml: true,
      version: 'v2.8'
    });
  }
}
