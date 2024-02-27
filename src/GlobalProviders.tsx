import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const GlobalProviders = ({ children }: Props) => <BrowserRouter>{children}</BrowserRouter>
