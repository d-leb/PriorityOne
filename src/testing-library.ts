import { FC, ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import { GlobalProviders } from 'GlobalProviders'
import { testMessages } from 'translations'

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): void => {
  render(ui, { wrapper: GlobalProviders as FC, ...options })
}

export const getMessageTranslation = (key: string): RegExp => new RegExp(`${testMessages[key]}`, 'i')

export * from '@testing-library/react'
