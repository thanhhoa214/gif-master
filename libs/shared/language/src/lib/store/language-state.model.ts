export type LanguageCode = 'en' | 'vi';

export interface LanguageStateModel {
  language: LanguageCode;
  supportedLanguages: Array<LanguageCode>;
}
export const LANGUAGE_STATE_NAME = 'Shared_Language';

export const INITIAL_STATE: LanguageStateModel = {
  language: 'en',
  supportedLanguages: ['en', 'vi']
};
