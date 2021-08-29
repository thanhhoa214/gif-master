import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { GIFObject } from 'giphy-api';

@Component({
  selector: 'gif-master-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent {
  @Input() gifs: GIFObject[] = [];
  @Output() selectGif = new EventEmitter<string>();
}
