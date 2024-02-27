import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { reportWebVitals } from 'utils/reportWebVitals'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : undefined

root?.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals()
