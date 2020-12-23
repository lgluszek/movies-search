import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

import { paths } from 'router';

type BackToHomePageProps = {
  className?: string;
};

const BackToHomePage = ({ className }: BackToHomePageProps) => (
  <Container className={className}>
    <Button
      variant="outlined"
      color="primary"
      startIcon={<KeyboardBackspaceIcon />}
      component={Link}
      to={paths.root}
      data-testid="back-to-dashboard-button"
    >
      Back to dashboard
    </Button>
  </Container>
);

export default BackToHomePage;
