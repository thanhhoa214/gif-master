import { SetMode } from '@shared/dark-mode';
import { LanguageState, LoadLanguage } from '@shared/language';
import { Store } from '@ngxs/store';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LanguageCode } from '@shared/language';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from './i18n/transloco.loader';
import { FormControl } from '@angular/forms';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'gif-master-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: { scope: 'navbar', loader } },
    TuiDestroyService
  ]
})
export class NavbarComponent implements OnInit {
  language$ = this.store.select(LanguageState.language);

  darkModeControl = new FormControl();

  constructor(private store: Store, private tuiDestroyService: TuiDestroyService) {}

  ngOnInit() {
    this.darkModeControl.valueChanges
      .pipe(takeUntil(this.tuiDestroyService))
      .subscribe((value) => this.store.dispatch(new SetMode(value ? 'dark' : 'light')));
  }

  changeLanguage(language: LanguageCode) {
    this.store.dispatch(new LoadLanguage(language));
  }
}
