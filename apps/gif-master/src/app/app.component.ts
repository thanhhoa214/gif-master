import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutoTitleService } from '@shared/util';

@Component({
  selector: 'gif-master-root',
  template: '<tui-root><router-outlet></router-outlet></tui-root>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(autoTitle: AutoTitleService) {
    autoTitle.setupAutoTitleListener();
  }
}
