import { expect } from '@jest/globals'

const one: number = 1

describe('Sample Test', () => {
  it('tests that one equals one', async () => {
    expect(one === 1).toBeTruthy()
  })
})
