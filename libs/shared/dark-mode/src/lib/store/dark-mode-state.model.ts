export type Mode = 'light' | 'dark';

export interface StateModel {
  mode: Mode;
}
export const STATE_NAME = 'Shared_DarkMode';

export const INITIAL_STATE: StateModel = {
  mode: 'light'
};
