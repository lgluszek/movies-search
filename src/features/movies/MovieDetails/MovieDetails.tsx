import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core';

import { LoadingSection } from 'components';

import { getMovie } from './slice';
import * as selectors from './selectors';
import Section from './Section';
import NotFound from './NotFound';

const Poster = styled.img`
  ${({ theme }) => `
    float: right;
    height: 150px;
    margin: 0 0 ${theme.spacing(3)}px ${theme.spacing(3)}px;
  
    ${theme.breakpoints.up('sm')} {
      height: 300px;
    }
  `}
`;

const Plot = styled(Section)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const MovieDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isFetched, setIsFetched] = useState(false);
  const movie = useSelector(selectors.getMovie);
  const error = useSelector(selectors.getError);
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getMovie({ id }));
      setIsFetched(true);
    };

    fetch();
  }, [id, dispatch]);

  if (!isFetched) {
    return <LoadingSection />;
  }

  if (!movie || error !== null) {
    return <NotFound />;
  }

  return (
    <Container>
      {movie.poster !== null && (
        <Poster src={movie.poster} alt="Movie poster" />
      )}

      <Typography variant={isSmUp ? 'h4' : 'h5'} component="h1">
        {movie.title} ({movie.year})
      </Typography>
      <Plot title="Plot" body={movie.plot} />
    </Container>
  );
};

export default MovieDetails;
