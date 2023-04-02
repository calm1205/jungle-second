import ReactDOM from 'react-dom';
import ResetCss from './ResetCSS';
import { Router } from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { StrictMode } from 'react';

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Router />
    </ThemeProvider>
  </StrictMode>,
  rootDOM
);
