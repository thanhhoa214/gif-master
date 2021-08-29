import { DetailComponent } from './../detail/detail.component';
import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GifViewsState,
  LoadGifById,
  LoadTrendingGifs,
  SearchGifsByName
} from '@gif-master/gif-views/data-access';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Component({
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
  gifs$ = this.store.select(GifViewsState.gifs);
  searchValue$ = this.activatedRoute.queryParams.pipe(map((queryParams) => queryParams.q || ''));

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private injector: Injector,
    private dialogService: TuiDialogService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadTrendingGifs({ limit: 20, rating: 'y' }));
  }

  searchGifs(value: string): void {
    this.store.dispatch(new SearchGifsByName({ limit: 20, rating: 'y', q: value }));
  }

  openDetailById(id: string): void {
    this.dialogService
      .open<void>(new PolymorpheusComponent(DetailComponent, this.injector), {
        data: { id },
        size: 'l'
      })
      .subscribe();
  }
}
