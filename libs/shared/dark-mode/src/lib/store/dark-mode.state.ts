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

  ngxsOnInit({ dispatch }: StateContext<StateModel>) {
    dispatch(new SetMode('auto'));
  }

  @Action(SetMode)
  SetMode({ patchState, getState }: StateContext<StateModel>, { mode }: SetMode) {
    if (getState().mode === mode) return;
    this.document.body.classList.toggle('dark');
    patchState({ mode });
  }
}
