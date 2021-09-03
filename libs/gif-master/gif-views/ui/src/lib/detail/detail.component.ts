import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { GIFObject } from 'giphy-api';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from './i18n/transloco.loader';

@Component({
  selector: 'gif-master-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'gif_views_ui_detail', loader, alias: 'gif_views_ui_detail' }
    }
  ]
})
export class DetailComponent {
  @Input() gif: GIFObject | undefined | null;
  @Output() copyLink = new EventEmitter<string>();
  @Output() share = new EventEmitter<string>();

  currentLocation = location.href;
}
