import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { Route, Switch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';

import { paths } from 'router';
import BackToHomePage from './BackToHomePage';

export type FormData = {
  title: string;
};

const BackToHomePageSection = styled(BackToHomePage)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const Nav: FC = () => {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: 'all',
  });

  const onSubmit = handleSubmit(({ title }: FormData) =>
    history.push({
      pathname: paths.moviesList,
      search: queryString.stringify({ title, page: 1 }),
    })
  );

  return (
    <>
      <Box component="nav" bgcolor="secondary.main">
        <form onSubmit={onSubmit}>
          <Container>
            <Box py={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="title"
                    label="Search for a movie"
                    variant="outlined"
                    inputRef={register({ required: true })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!formState.isValid}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </form>
      </Box>
      <Switch>
        <Route exact path={paths.root} />
        <Route path="*" component={BackToHomePageSection} />
      </Switch>
    </>
  );
};

export default Nav;
