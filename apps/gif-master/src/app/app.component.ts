import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutoTitleService } from '@shared/util';
import { FacebookService } from 'ngx-facebook';
@Component({
  selector: 'gif-master-root',
  template: '<tui-root><router-outlet></router-outlet></tui-root>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(autoTitle: AutoTitleService, facebookService: FacebookService) {
    autoTitle.setupAutoTitleListener();
    facebookService.init({
      appId: '587758219070590',
      xfbml: true,
      version: 'v2.8'
    });
  }
}
