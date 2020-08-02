import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const NotFound: FC = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        Sorry, we couldn't find a movie.
      </Box>
    </Container>
  );
};

export default NotFound;
