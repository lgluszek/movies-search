import { AxiosPromise } from 'axios';

import api from '../api';
import { Product, Result } from './types';

export type Params = {
  search: string;
  type?: Product;
  year?: number;
  page?: number;
};

export type MovieSummary = {
  Poster: string | 'N/A';
  Title: string;
  Type: Product;
  Year: string;
  imdbID: string;
};

type Response = {
  Response: Result;
  Search?: MovieSummary[];
  Error?: string;
  totalResults?: string;
};

export enum Errors {
  Unknown = 'unknown',
}

const getMovies = (params: Params): AxiosPromise<Response> =>
  api.get('', {
    params: {
      s: params.search,
      type: Product.Movie,
      y: params.year,
      page: params.page,
    },
  });
export default getMovies;
