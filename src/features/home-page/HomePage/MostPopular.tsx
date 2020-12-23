import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { paths } from 'router';
import { MostPopularMovies } from './consts';

const Movie = styled(Card)`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const MostPopular = () => (
  <section>
    <header>
      <Typography variant="h5" component="h2">
        Most popular
      </Typography>
    </header>
    <Box component="main" mt={3}>
      {MostPopularMovies.map((movie) => (
        <Movie key={movie.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.plot}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={paths.movieDetails(movie.id)}
            >
              More
            </Button>
          </CardActions>
        </Movie>
      ))}
    </Box>
  </section>
);

export default MostPopular;
