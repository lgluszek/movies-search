import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

import { paths } from 'router';

type BackToHomePageProps = {
  className?: string;
};

const BackToHomePage: FC<BackToHomePageProps> = ({ className }) => (
  <Container className={className}>
    <Button
      variant="outlined"
      color="primary"
      startIcon={<KeyboardBackspaceIcon />}
      component={Link}
      to={paths.root}
    >
      Back to dashboard
    </Button>
  </Container>
);

export default BackToHomePage;
