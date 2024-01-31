import React from 'react'
import { expect, test } from 'vitest'
import { App } from '../App'

test('verify App type and content', () => {
  expect(App).toBeInstanceOf(Function)
  expect(App() === React.createElement('div', null, 'Hello World'))
})
