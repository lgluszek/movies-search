import { RootState } from 'store';

export const getMovie = (state: RootState) => state.movieDetails.movie;

export const getError = (state: RootState) => state.movieDetails.error;
