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
  searchValue$ = this.activatedRoute.queryParams.pipe(map(({ q = '' }) => q));
  id$ = this.activatedRoute.queryParams.pipe(map(({ id = '' }) => id));

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
      .subscribe(() => this.store.dispatch(new LoadTrendingGifs({ limit: 22 })));
    this.id$.pipe(filter((id) => !!id)).subscribe((id) => this.openDetailById(id));
  }

  searchGifs(value: string): void {
    if (value) this.store.dispatch(new SearchGifsByName({ limit: 22, q: value }));
    else this.store.dispatch(new LoadTrendingGifs({ limit: 22 }));
    this.appendQueryParams({ q: value });
  }

  loadMore(currentSearchValue: string) {
    if (currentSearchValue)
      this.store.dispatch(new SearchGifsByName({ limit: 22, q: currentSearchValue }, true));
    else this.store.dispatch(new LoadTrendingGifs({ limit: 22 }, true));
  }

  openDetailById(id: string): void {
    this.appendQueryParams({ id });
    this.dialogService
      .open<void>(new PolymorpheusComponent(DetailComponent, this.injector), {
        data: { id },
        size: 'l'
      })
      .subscribe({ complete: () => this.removeQueryParams('id') });
  }

  private appendQueryParams(params: { id?: string; q?: string }): void {
    const currentQueryParams = this.activatedRoute.snapshot.queryParams;
    const nextParams = new HttpParams().appendAll({ ...currentQueryParams, ...params });
    this.location.replaceState(location.pathname, nextParams.toString());
  }
  private removeQueryParams(field: 'id' | 'q'): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [field]: _, ...rest } = this.activatedRoute.snapshot.queryParams;
    const params = new HttpParams().appendAll(rest);
    this.location.replaceState(location.pathname, params.toString());
  }
}
