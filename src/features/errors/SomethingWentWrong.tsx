import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { paths } from 'router';

const SomethingWentWrong: FC = () => (
  <Container>
    <Typography variant="body1">
      Something went wrong and we are very sorry. Our team is currently working
      to provide more specific error messages. Please click{' '}
      <Link to={paths.root}>here</Link> to go to the main page.
    </Typography>
  </Container>
);

export default SomethingWentWrong;
