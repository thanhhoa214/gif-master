import { TuiDialogService } from '@taiga-ui/core';
import { DarkModeState, Mode, SetMode } from '@shared/dark-mode';
import { LanguageState, LoadLanguage } from '@shared/language';
import { Store } from '@ngxs/store';
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { LanguageCode } from '@shared/language';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from './i18n/transloco.loader';

@Component({
  selector: 'gif-master-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: { scope: 'navbar', loader } }]
})
export class NavbarComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('pdfViewer', { static: true }) pdfViewerTemplate!: TemplateRef<any>;

  language$ = this.store.select(LanguageState.language);
  mode$ = this.store.select(DarkModeState.mode);

  constructor(private store: Store, private dialogService: TuiDialogService) {}

  changeLanguage(language: LanguageCode) {
    this.store.dispatch(new LoadLanguage(language));
  }
  toggleMode(currentMode: Mode) {
    this.store.dispatch(new SetMode(currentMode === 'dark' ? 'light' : 'dark'));
  }

  openCV() {
    const cvUrl = `assets/myCV.pdf`;
    this.dialogService.open(this.pdfViewerTemplate, { data: cvUrl, size: 'page' }).subscribe();
  }
}
