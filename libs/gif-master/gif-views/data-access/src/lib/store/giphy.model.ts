export type Rating = 'y' | 'g' | 'pg' | 'pg-13' | 'r';
export type Format = 'html' | 'json';

export interface BaseOptions {
  limit?: number;
  offset?: number;
  rating?: Rating;
}

export interface SearchOptions extends BaseOptions {
  q: string;
}
