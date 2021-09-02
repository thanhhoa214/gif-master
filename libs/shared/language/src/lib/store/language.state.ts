import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { State, Action, Selector, StateContext, NgxsOnInit } from '@ngxs/store';
import { INITIAL_STATE, LanguageStateModel, LANGUAGE_STATE_NAME } from './language-state.model';
import { LoadLanguage } from './language.actions';

@State<LanguageStateModel>({
  name: LANGUAGE_STATE_NAME,
  defaults: INITIAL_STATE
})
@Injectable()
export class LanguageState implements NgxsOnInit {
  @Selector()
  static language({ language }: LanguageStateModel) {
    return language;
  }

  constructor(private transloco: TranslocoService) {}

  ngxsOnInit({ dispatch }: StateContext<LanguageStateModel>) {
    dispatch(new LoadLanguage('en'));
  }

  @Action(LoadLanguage)
  loadLanguage(
    { patchState, getState }: StateContext<LanguageStateModel>,
    { language }: LoadLanguage
  ) {
    if (getState().language === language) return;
    this.transloco.setActiveLang(language);

    patchState({ language });
  }
}
