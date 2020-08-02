import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import {
  GetMovieErrors,
  GetMovieParams,
  MovieDetails,
  requests,
} from 'api/omdb';

type Movie = {
  id: string;
  title: string;
  year: string;
  plot: string;
  poster: string | null;
};

const initialState: {
  movie: Movie | null;
  isFetching: boolean;
  error: GetMovieErrors | null;
} = {
  movie: null,
  isFetching: false,
  error: null,
};

const slice = createSlice({
  name: 'MovieDetails',
  initialState,
  reducers: {
    setMovieStart(state) {
      state.isFetching = true;
      state.error = null;
    },
    setMovieSuccess(state, { payload }: PayloadAction<Movie>) {
      state.movie = payload;
      state.isFetching = false;
    },
    setMovieFailure(state, { payload }: PayloadAction<GetMovieErrors>) {
      state.error = payload;
      state.isFetching = false;
    },
  },
});

const mapMovieDetails = (movie: MovieDetails) => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  plot: movie.Plot,
  poster: movie.Poster === 'N/A' ? null : movie.Poster,
});

export const getMovie = (params: GetMovieParams): AppThunk => async (
  dispatch
) => {
  const { setMovieStart, setMovieSuccess, setMovieFailure } = slice.actions;

  try {
    dispatch(setMovieStart());
    const { data } = await requests.getMovie(params);

    if ('Title' in data) {
      const movie = mapMovieDetails(data);
      dispatch(setMovieSuccess(movie));
    } else {
      dispatch(setMovieFailure(GetMovieErrors.Unknown));
    }
  } catch (error) {
    dispatch(setMovieFailure(GetMovieErrors.Unknown));
  }
};

export const reducer = slice.reducer;

export default slice;
