import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { Nav } from 'features/nav';
import { MovieDetails, MoviesList } from 'features/movies';
import { SomethingWentWrong } from 'features/errors';
import { paths } from 'router';
import { HomePage } from 'features/home-page';

const Root: FC = () => (
  <>
    <Nav />
    <Box py={3}>
      <Switch>
        <Route exact path={paths.root} component={HomePage} />
        <Route path={paths.movieDetails(':id')} component={MovieDetails} />
        <Route path={paths.moviesList} component={MoviesList} />
        <Route path={paths.somethingWentWrong} component={SomethingWentWrong} />
        <Route path="*">
          <Redirect to={paths.somethingWentWrong} />
        </Route>
      </Switch>
    </Box>
  </>
);

export default Root;
