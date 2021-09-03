import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetMode } from './store/dark-mode.actions';

@Injectable({ providedIn: 'root' })
export class DarkModeWatchService {
  constructor(@Inject(DOCUMENT) private document: Document, private store: Store) {}

  registerWatchMediaListener() {
    this.document.defaultView
      ?.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        this.store.dispatch(new SetMode(newColorScheme));
      });
  }
}
