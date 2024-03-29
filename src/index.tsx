import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { GlobalProviders } from './GlobalProviders'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Environment } from 'utils/environment'
import { reportWebVitals } from 'utils/reportWebVitals'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : undefined

root?.render(
  <StrictMode>
    <GlobalStyle />
    <GlobalProviders>
      <App />
    </GlobalProviders>
  </StrictMode>,
)

const cssTransitionTimeout = 1000

if (Environment.mode === 'development') {
  setTimeout(() => {
    import(
      /* webpackMode: "lazy" */
      /* webpackChunkName: "dev-tool-react-axe" */
      '@axe-core/react'
    ).then((axe) => axe.default(React, ReactDOM, cssTransitionTimeout))
  }, cssTransitionTimeout)
}

reportWebVitals()
