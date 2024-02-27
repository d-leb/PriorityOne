import { FC, ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import { GlobalProviders } from 'GlobalProviders'

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): void => {
  render(ui, { wrapper: GlobalProviders as FC, ...options })
}

export * from '@testing-library/react'
