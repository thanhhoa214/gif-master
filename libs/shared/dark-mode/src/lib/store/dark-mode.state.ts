import { Injectable, Inject } from '@angular/core';
import { State, Action, Selector, StateContext, NgxsOnInit } from '@ngxs/store';
import { INITIAL_STATE, StateModel, STATE_NAME } from './dark-mode-state.model';
import { SetMode } from './dark-mode.actions';
import { DOCUMENT } from '@angular/common';

@State<StateModel>({
  name: STATE_NAME,
  defaults: INITIAL_STATE
})
@Injectable()
export class DarkModeState implements NgxsOnInit {
  @Selector()
  static mode({ mode }: StateModel) {
    return mode;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngxsOnInit({ getState, dispatch }: StateContext<StateModel>) {
    const darkModePrefer = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    dispatch(new SetMode(getState().mode ?? darkModePrefer));
  }

  @Action(SetMode)
  SetMode({ patchState }: StateContext<StateModel>, { mode }: SetMode) {
    if (mode === 'dark') this.document.body.classList.add('dark');
    else this.document.body.classList.remove('dark');
    patchState({ mode });
  }
}
