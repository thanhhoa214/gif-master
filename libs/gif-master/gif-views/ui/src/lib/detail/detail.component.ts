import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { GIFObject } from 'giphy-api';

@Component({
  selector: 'gif-master-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  @Input() gif: GIFObject | undefined | null;
  @Output() copyLink = new EventEmitter<string>();
}
