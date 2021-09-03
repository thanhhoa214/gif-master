import { Inject, Injectable } from '@angular/core';
import { STATE_NAME, INITIAL_STATE, StateModel } from './state.model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { LoadTrendingGifs, SearchGifsByName, LoadGifById, ClearSelectedGif } from './actions';
import { AppConfig, APP_CONFIG } from '@shared/app-config';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MultiResponse, SingleResponse } from 'giphy-api';

const API_URL = 'https://api.giphy.com/v1/gifs';
function concatMultipleResponse(response1: MultiResponse | undefined, response2: MultiResponse) {
  if (!response1) return response2;
  return {
    data: (response1?.data || []).concat(response2.data),
    meta: response2.meta,
    pagination: {
      ...response2.pagination,
      count: (response1?.pagination.count || 0) + response2.pagination.count
    }
  };
}

@State<StateModel>({
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

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  @Action(LoadTrendingGifs)
  LoadTrendingGifs(
    { getState, patchState }: StateContext<StateModel>,
    { params = {}, loadMore = false }: LoadTrendingGifs
  ) {
    const currentGifs = getState().gifs;
    return this.http
      .get<MultiResponse>(`${API_URL}/trending`, {
        params: {
          api_key: this.appConfig.GIPHY_API_KEY,
          ...params,
          offset: loadMore ? currentGifs?.pagination.count ?? 0 : 0
        }
      })
      .pipe(
        tap((gifs) => {
          if (loadMore) patchState({ gifs: concatMultipleResponse(currentGifs, gifs) });
          else patchState({ gifs });
        })
      );
  }

  @Action(LoadGifById)
  LoadGifById({ patchState }: StateContext<StateModel>, { id }: LoadGifById) {
    return this.http
      .get<SingleResponse>(`${API_URL}/${id}`, {
        params: { api_key: this.appConfig.GIPHY_API_KEY }
      })
      .pipe(tap((gif) => patchState({ selectedGif: gif.data })));
  }

  @Action(SearchGifsByName)
  SearchGifsByName(
    { getState, patchState }: StateContext<StateModel>,
    { params, loadMore }: SearchGifsByName
  ) {
    const currentGifs = getState().gifs;
    return this.http
      .get<MultiResponse>(`${API_URL}/search`, {
        params: {
          ...params,
          api_key: this.appConfig.GIPHY_API_KEY,
          offset: loadMore ? currentGifs?.pagination.count ?? 0 : 0
        }
      })
      .pipe(
        tap((gifs) => {
          if (loadMore) patchState({ gifs: concatMultipleResponse(currentGifs, gifs) });
          else patchState({ gifs });
        })
      );
  }

  @Action(ClearSelectedGif)
  ClearSelectedGif({ patchState }: StateContext<StateModel>) {
    patchState({ selectedGif: undefined });
  }
}
