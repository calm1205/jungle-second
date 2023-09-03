import { createRoot } from 'react-dom/client'
import ResetCss from './ResetCSS'
import { Router } from './router/Router'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { StrictMode } from 'react'

const rootDom = document.getElementById('root')
const root = rootDom && createRoot(rootDom)
root?.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Router />
    </ThemeProvider>
  </StrictMode>
)
