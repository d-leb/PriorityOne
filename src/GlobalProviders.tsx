import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import { MessageProvider } from 'translations'

interface Props {
  children: ReactNode
}

export const GlobalProviders = ({ children }: Props) => (
  <BrowserRouter>
    <HelmetProvider>
      <MessageProvider>{children}</MessageProvider>
    </HelmetProvider>
  </BrowserRouter>
)
