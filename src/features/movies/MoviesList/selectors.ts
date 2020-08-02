import { RootState } from 'store';

import { ResultsPerPage } from './consts';

export const getMovies = (state: RootState) => state.moviesList.movies;

export const getIsFetching = (state: RootState) => state.moviesList.isFetching;

export const getError = (state: RootState) => state.moviesList.error;

export const getTotalPages = (state: RootState) =>
  Math.ceil(state.moviesList.all / ResultsPerPage);
