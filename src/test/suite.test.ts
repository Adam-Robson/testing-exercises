import React from 'react'
import { assert, describe, expect, test } from 'vitest'
import App from '../App'


describe('name of suite', () => {
  test('name of test', () => {
    assert.isTrue(Math.sign(10) === 1)
    expect(Math.sign(-3)).toBe(-1)
  })

  test('name of other test', () => {
    expect(App).toBeInstanceOf(Function)
    expect(App() === React.createElement('div', null, 'Hello World'))
  })

})

