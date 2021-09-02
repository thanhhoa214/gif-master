import { TestBed } from '@angular/core/testing';
import { Actions, NgxsModule, ofActionSuccessful, Store } from '@ngxs/store';
import { DarkModeState } from './dark-mode.state';
import { SetMode } from './dark-mode.actions';
import { Mode, StateModel } from './dark-mode-state.model';
import { Subscription } from 'rxjs';
describe('Language store', () => {
  let store: Store;
  let actions: Actions;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DarkModeState])]
    }).compileComponents();
    store = TestBed.inject(Store);
    actions = TestBed.inject(Actions);
    subscription = new Subscription();
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  it(`should set default mode to 'auto'`, () => {
    const expected: StateModel = { mode: 'auto' };
    const actual = store.selectSnapshot(DarkModeState);
    expect(actual).toEqual(expected);
  });

  it('should change language to Vietnamese [vi]', () => {
    const expectedMode: Mode = 'auto';

    subscription = actions.pipe(ofActionSuccessful(SetMode)).subscribe(() => {
      const actualState = store.selectSnapshot(DarkModeState.mode);
      expect(actualState).toEqual(expectedMode);
    });
    store.dispatch(new SetMode('auto'));
  });
});
