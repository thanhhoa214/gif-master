export type Rating = 'y' | 'g' | 'pg' | 'pg-13' | 'r';
export type Format = 'html' | 'json';

export interface BaseOptions {
  rating: Rating;
  fmt?: Format | undefined;
}

export interface TrendingOptions extends BaseOptions {
  limit?: number | undefined;
}
