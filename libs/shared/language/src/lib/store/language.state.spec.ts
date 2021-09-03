import { TestBed } from '@angular/core/testing';
import { Actions, NgxsModule, ofActionSuccessful, Store } from '@ngxs/store';
import { LanguageState } from './language.state';
import { LoadLanguage } from './language.actions';
import { LanguageCode, LanguageStateModel } from './language-state.model';
import { Subscription } from 'rxjs';
import { TranslocoRootModule } from '../transloco-root.module';
describe('Language store', () => {
  let store: Store;
  let actions: Actions;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([LanguageState]),
        TranslocoRootModule.forRoot({ prodMode: false })
      ]
    }).compileComponents();
    store = TestBed.inject(Store);
    actions = TestBed.inject(Actions);
    subscription = new Subscription();
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  it('should set default language to English [en]', () => {
    const expected: LanguageStateModel = { language: 'en', supportedLanguages: ['en', 'vi'] };
    const actual = store.selectSnapshot(LanguageState);
    expect(actual).toEqual(expected);
  });

  it('should change language to Vietnamese [vi]', () => {
    const expectedLanguage: LanguageCode = 'vi';

    subscription = actions.pipe(ofActionSuccessful(LoadLanguage)).subscribe(() => {
      const actualState = store.selectSnapshot(LanguageState.language);
      expect(actualState).toEqual(expectedLanguage);
    });
    store.dispatch(new LoadLanguage('vi'));
  });
});
