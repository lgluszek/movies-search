import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import store from './store';
import theme from './theme';

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Root />
            </BrowserRouter>
          </Provider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </StrictMode>,
  document.getElementById('root')
);
