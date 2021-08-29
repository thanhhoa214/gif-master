import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GIFObject } from 'giphy-api';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'gif-master-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent {
  searchControl = new FormControl();

  @Input() gifs: GIFObject[] = [];
  @Input() set searchValue(value: string) {
    this.searchControl.setValue(value);
  }
  @Output() search = this.searchControl.valueChanges.pipe(
    distinctUntilChanged(),
    throttleTime(350)
  );
  @Output() selectGif = new EventEmitter<string>();
}
