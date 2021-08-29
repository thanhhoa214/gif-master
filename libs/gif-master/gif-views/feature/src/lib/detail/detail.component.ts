import { GifViewsState, LoadGifById } from '@gif-master/gif-views/data-access';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { TuiDialog } from '@taiga-ui/cdk';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  gif$ = this.store.select(GifViewsState.selectedGif);

  constructor(
    private store: Store,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialog<{ data: { id: string } }, void>
  ) {}

  ngOnInit(): void {
    if (!this.context.data.id) this.context.completeWith();
    this.store.dispatch(new LoadGifById(this.context.data.id));
  }
}
