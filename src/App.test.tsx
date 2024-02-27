import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App', () => {
  it('renders without error', async () => {
    render(<App />)

    expect(await screen.findByText('Hello World!')).toBeDefined()
  })
})
