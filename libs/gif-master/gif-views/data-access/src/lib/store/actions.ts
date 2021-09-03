import { STATE_NAME } from './state.model';
import { BaseOptions, SearchOptions } from './giphy.model';

export const ActionTypes = {
  LOAD_TRENDING_GIFS: `[${STATE_NAME}] Load trending gifs`,
  LOAD_GIF_BY_ID: `[${STATE_NAME}] Load gif by ID`,
  SEARCH_GIFS_BY_NAME: `[${STATE_NAME}] Search gifs by name`,
  CLEAR_SELECTED_GIF: `[${STATE_NAME}] Clear selected gif`
};

export class LoadTrendingGifs {
  static readonly type = ActionTypes.LOAD_TRENDING_GIFS;
  constructor(public readonly params?: BaseOptions, public readonly loadMore?: boolean) {}
}

export class LoadGifById {
  static readonly type = ActionTypes.LOAD_GIF_BY_ID;
  constructor(public readonly id: string) {}
}

export class SearchGifsByName {
  static readonly type = ActionTypes.SEARCH_GIFS_BY_NAME;
  constructor(public readonly params: SearchOptions, public readonly loadMore?: boolean) {}
}

export class ClearSelectedGif {
  static readonly type = ActionTypes.CLEAR_SELECTED_GIF;
}
