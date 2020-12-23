import React, { ReactNode } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from 'theme';

type StyleProvidersProps = {
  children: ReactNode;
};

const StyleProviders = ({ children }: StyleProvidersProps) => (
  <StylesProvider>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default StyleProviders;
