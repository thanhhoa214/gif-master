import { TestBed } from '@angular/core/testing';
import { Actions, NgxsModule, ofActionSuccessful, Store } from '@ngxs/store';
import { DarkModeState } from './dark-mode.state';
import { SetMode } from './dark-mode.actions';
import { Mode, StateModel } from './dark-mode-state.model';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
describe('Dark Mode Store', () => {
  let store: Store;
  let actions: Actions;
  let subscription: Subscription;
  let documentObject: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DarkModeState])]
    }).compileComponents();
    store = TestBed.inject(Store);
    actions = TestBed.inject(Actions);
    subscription = new Subscription();
    documentObject = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  it(`should set default mode to 'auto'`, () => {
    const expected: StateModel = { mode: 'auto' };
    const actual = store.selectSnapshot(DarkModeState);
    expect(actual).toEqual(expected);
  });

  it(`should change DarkModeState.mode to 'dark'`, () => {
    const expectedMode: Mode = 'dark';
    subscription = actions.pipe(ofActionSuccessful(SetMode)).subscribe(() => {
      const actualState = store.selectSnapshot(DarkModeState.mode);
      expect(actualState).toEqual(expectedMode);
    });
    store.dispatch(new SetMode('dark'));
  });
  it(`should append 'dark' class to body`, () => {
    const expected = false;
    subscription = actions.pipe(ofActionSuccessful(SetMode)).subscribe(() => {
      expect(documentObject.body.classList.contains('dark')).toEqual(expected);
    });
    store.dispatch(new SetMode('dark'));
  });
});
