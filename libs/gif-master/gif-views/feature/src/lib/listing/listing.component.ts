import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GifViewsState, LoadTrendingGifs } from '@gif-master/gif-views/data-access';
import { Store } from '@ngxs/store';

@Component({
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
  gifs$ = this.store.select(GifViewsState.gifs);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadTrendingGifs({ limit: 20, rating: 'y' }));
  }
}
