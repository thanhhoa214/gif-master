import { Mode, STATE_NAME } from './dark-mode-state.model';

const ACTIONS = {
  SET_MODE: `[${STATE_NAME}] Set mode`
};

export class SetMode {
  static readonly type = ACTIONS.SET_MODE;
  constructor(public readonly mode: Mode) {}
}
