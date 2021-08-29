import { Inject, Injectable } from '@angular/core';
import { STATE_NAME, INITIAL_STATE, StateModel } from './state.model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { LoadTrendingGifs, SearchGifsByName, LoadGifById } from './actions';
import { AppConfig, APP_CONFIG } from '@shared/app-config';
import * as giphyApi from 'giphy-api';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

export class storeStateModel {}

@State<storeStateModel>({
  name: STATE_NAME,
  defaults: INITIAL_STATE
})
@Injectable()
export class GifViewsState {
  @Selector()
  static gifs({ gifs }: StateModel) {
    return gifs;
  }

  @Selector()
  static selectedGif({ selectedGif }: StateModel) {
    return selectedGif;
  }

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  @Action(LoadTrendingGifs)
  LoadTrendingGifs({ patchState }: StateContext<StateModel>, { params }: LoadTrendingGifs) {
    return from(
      giphyApi({ apiKey: this.appConfig.GIPHY_API_KEY, https: true }).trending(params)
    ).pipe(tap((gifs) => patchState({ gifs })));
  }

  @Action(LoadGifById)
  LoadGifById({ patchState }: StateContext<StateModel>, { id }: LoadGifById) {
    return from(giphyApi({ apiKey: this.appConfig.GIPHY_API_KEY, https: true }).id(id)).pipe(
      tap((gifs) => patchState({ selectedGif: gifs.data?.[0] }))
    );
  }

  @Action(SearchGifsByName)
  SearchGifsByName({ patchState }: StateContext<StateModel>, { params }: SearchGifsByName) {
    return from(
      giphyApi({ apiKey: this.appConfig.GIPHY_API_KEY, https: true }).search(params)
    ).pipe(tap((gifs) => patchState({ gifs })));
  }
}
