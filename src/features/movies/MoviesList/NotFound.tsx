import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const NotFound: FC = () => (
  <Container>
    <Box display="flex" justifyContent="center" alignItems="center">
      Unfortunately we couldn't find any movies with specified title, or you
      need to be more specific. Try to search for something different.
    </Box>
  </Container>
);

export default NotFound;
