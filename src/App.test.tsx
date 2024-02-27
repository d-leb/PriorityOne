import { expect } from '@jest/globals'

import { App } from './App'
import { getMessageTranslation, renderWithProviders, screen } from 'testing-library'

describe('App', () => {
  it('renders without error', async () => {
    renderWithProviders(<App />)

    expect(await screen.findByText(getMessageTranslation('greeting'))).toBeDefined()
  })
})
