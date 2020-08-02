import React, { FC } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from 'theme';

const StyleProviders: FC = ({ children }) => (
  <StylesProvider>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default StyleProviders;
