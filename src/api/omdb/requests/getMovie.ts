import { AxiosPromise } from 'axios';

import api from '../api';
import { Plot, Product, Result } from './types';

export type Params = {
  id?: number;
  title?: string;
  year?: number;
  plot?: Plot;
};

export type MovieDetails = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string | 'N/A';
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

export enum Errors {
  Unknown = 'unknown',
}

type Response = MovieDetails | { Response: Result; Error: string };

const getMovie = (params: Params): AxiosPromise<Response> =>
  api.get('', {
    params: {
      i: params.id,
      t: params.title,
      type: Product.Movie,
      y: params.year,
      plot: params.plot,
    },
  });

export default getMovie;
