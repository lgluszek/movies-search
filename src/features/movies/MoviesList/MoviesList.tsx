import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import { useQuery } from 'hooks';
import { paths } from 'router';
import { LoadingSection } from 'components';

import * as selectors from './selectors';
import { getMovies } from './slice';
import NotFound from './NotFound';

const Link = styled(RouterLink)`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
`;

const Row = styled(Paper)`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

const MoviesList: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const title = useQuery().get('title') || '';
  const page = useQuery().get('page') || '1';
  const [isFetched, setIsFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const movies = useSelector(selectors.getMovies);
  const isFetching = useSelector(selectors.getIsFetching);
  const totalPages = useSelector(selectors.getTotalPages);
  const error = useSelector(selectors.getError);

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getMovies({ search: title, page: currentPage }));
      setIsFetched(true);
    };

    fetch();
  }, [title, currentPage, dispatch, history]);

  useEffect(() => {
    history.push({
      pathname: paths.moviesList,
      search: queryString.stringify({ title, page: currentPage }),
    });
  }, [title, currentPage, history]);

  const onPaginationChange = (_event: ChangeEvent<unknown>, page: number) =>
    setCurrentPage(page);

  if (!isFetched || isFetching) {
    return <LoadingSection />;
  }

  if (movies.length === 0 || error !== null) {
    return <NotFound />;
  }

  return (
    <Container>
      {movies.map((movie) => (
        <Row key={movie.id}>
          <Box py={2} px={3}>
            <Link to={paths.movieDetails(movie.id)}>
              {movie.title} ({movie.year})
            </Link>
          </Box>
        </Row>
      ))}
      {totalPages >= 2 && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPaginationChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default MoviesList;
