import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import MostPopularSection from './MostPopular';
import Introduction from './Introduction';

const IntroductionSection = styled(Introduction)`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const HomePage = () => (
  <Container>
    <IntroductionSection />
    <MostPopularSection />
  </Container>
);

export default HomePage;
