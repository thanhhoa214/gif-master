import { DetailComponent } from './../detail/detail.component';
import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GifViewsState,
  LoadTrendingGifs,
  SearchGifsByName
} from '@gif-master/gif-views/data-access';
import { Store } from '@ngxs/store';
import { map, filter } from 'rxjs/operators';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
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
    private dialogService: TuiDialogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.searchValue$
      .pipe(filter((value) => !value))
      .subscribe(() => this.store.dispatch(new LoadTrendingGifs({ limit: 22, rating: 'y' })));
  }

  searchGifs(value: string): void {
    if (value) this.store.dispatch(new SearchGifsByName({ limit: 22, rating: 'y', q: value }));
    else this.store.dispatch(new LoadTrendingGifs({ limit: 22, rating: 'y' }));
    const params = new HttpParams().append('q', value);
    this.location.replaceState(location.pathname, params.toString());
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
