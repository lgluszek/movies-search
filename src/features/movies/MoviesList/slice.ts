import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';
import {
  GetMoviesErrors,
  GetMoviesParams,
  MovieSummary,
  requests,
} from 'api/omdb';

type Movie = {
  id: string;
  title: string;
  year: string;
};

const initialState: {
  movies: Movie[];
  all: number;
  isFetching: boolean;
  error: GetMoviesErrors | null;
} = {
  movies: [],
  all: 0,
  isFetching: false,
  error: null,
};

const slice = createSlice({
  name: 'MoviesList',
  initialState,
  reducers: {
    setMoviesStart(state) {
      state.isFetching = true;
      state.error = null;
    },
    setMoviesSuccess(
      state,
      { payload }: PayloadAction<{ movies: Movie[]; all: number }>
    ) {
      state.movies = payload.movies;
      state.all = payload.all;
      state.isFetching = false;
    },
    setMoviesFailure(state, { payload }: PayloadAction<GetMoviesErrors>) {
      state.error = payload;
      state.isFetching = false;
    },
  },
});

const mapMovieSummary = (movie: MovieSummary) => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
});

export const getMovies = (params: GetMoviesParams): AppThunk => async (
  dispatch
) => {
  const { setMoviesStart, setMoviesSuccess, setMoviesFailure } = slice.actions;

  try {
    dispatch(setMoviesStart());
    const { data } = await requests.getMovies(params);

    if (data.Search) {
      const movies = data.Search.map(mapMovieSummary);
      const all = data.totalResults ? Number(data.totalResults) : 0;
      dispatch(setMoviesSuccess({ movies, all }));
    } else {
      dispatch(setMoviesFailure(GetMoviesErrors.Unknown));
    }
  } catch (error) {
    dispatch(setMoviesFailure(GetMoviesErrors.Unknown));
  }
};

export const reducer = slice.reducer;

export default slice;
