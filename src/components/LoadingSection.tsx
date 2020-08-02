import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

const LoadingSection = () => (
  <Container>
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  </Container>
);

export default LoadingSection;
