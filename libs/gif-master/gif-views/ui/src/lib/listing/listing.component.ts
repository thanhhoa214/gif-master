import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GIFObject } from 'giphy-api';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from './i18n/transloco.loader';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'gif-master-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: { scope: 'listing', loader } }]
})
export class ListingComponent {
  searchControl = new FormControl();

  @Input() gifs: GIFObject[] = [];
  @Input() set searchValue(value: string) {
    if (value) this.searchControl.setValue(value);
  }
  @Output() search = this.searchControl.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(350)
  );
  @Output() selectGif = new EventEmitter<string>();
  @Output() loadMore = new EventEmitter<string>();
}
