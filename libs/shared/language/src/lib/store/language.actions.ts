import { LanguageCode, LANGUAGE_STATE_NAME } from './language-state.model';

const ACTIONS = {
  LOAD_LANGUAGE: `[${LANGUAGE_STATE_NAME}] Load Language`
};

export class LoadLanguage {
  static readonly type = ACTIONS.LOAD_LANGUAGE;
  constructor(public readonly language: LanguageCode) {}
}
