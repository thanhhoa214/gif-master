import { GIFObject, MultiResponse } from 'giphy-api';

export const STATE_NAME = 'GifMaster_GifViews';
export const INITIAL_STATE: StateModel = {};

export interface StateModel {
  gifs?: MultiResponse;
  selectedGif?: GIFObject;
}
