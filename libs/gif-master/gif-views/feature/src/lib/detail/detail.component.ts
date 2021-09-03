import { ClearSelectedGif, GifViewsState, LoadGifById } from '@gif-master/gif-views/data-access';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { Store } from '@ngxs/store';
import { ClipboardService } from 'ngx-clipboard';
import { TuiDialog } from '@taiga-ui/cdk';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {
  TuiNotification,
  TuiNotificationContentContext,
  TuiNotificationsService
} from '@taiga-ui/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from './i18n/transloco.loader';
import { FacebookService, UIParams } from 'ngx-facebook';
import { from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'gif_views_feature_detail', alias: 'gif_views_feature_detail', loader }
    }
  ]
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild('copied') templateRef!: TemplateRef<TuiNotificationContentContext>;
  gif$ = this.store.select(GifViewsState.selectedGif);

  constructor(
    private store: Store,
    @Inject(POLYMORPHEUS_CONTEXT)
    private context: TuiDialog<{ data: { id: string } }, void>,
    private clipboardService: ClipboardService,
    private notificationService: TuiNotificationsService,
    private fbService: FacebookService
  ) {}

  ngOnInit(): void {
    if (!this.context.data.id) this.context.completeWith();
    this.store.dispatch(new LoadGifById(this.context.data.id));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedGif());
  }

  copyLink(link: string) {
    this.clipboardService.copy(link);
    this.notificationService
      .show(this.templateRef, {
        hasIcon: false,
        status: TuiNotification.Success,
        hasCloseButton: true,
        autoClose: 1500,
        data: 'copy'
      })
      .subscribe();
  }

  shareFB(url: string) {
    const params: UIParams = {
      href: url,
      method: 'share'
    };

    from(this.fbService.ui(params))
      .pipe(
        switchMap(() =>
          this.notificationService.show(this.templateRef, {
            hasIcon: false,
            status: TuiNotification.Success,
            hasCloseButton: true,
            autoClose: 1500,
            data: 'fbShare'
          })
        ),
        catchError(() =>
          this.notificationService.show(this.templateRef, {
            hasIcon: false,
            status: TuiNotification.Error,
            hasCloseButton: true,
            autoClose: 1500,
            data: 'fbShareError'
          })
        )
      )
      .subscribe();
  }
}
