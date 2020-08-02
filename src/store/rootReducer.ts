import { combineReducers } from '@reduxjs/toolkit';

import { moviesListReducer, movieDetailsReducer } from 'features/movies';

const rootReducer = combineReducers({
  moviesList: moviesListReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
