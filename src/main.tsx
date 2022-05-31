import React from 'react';
import ReactDOM from 'react-dom';
import ResetCss from './ResetCSS';
import { Router } from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  rootDOM
);
