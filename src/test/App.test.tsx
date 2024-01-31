import { assert, expect, test } from 'vitest'
import { App, double, half, zero, add, squared, text } from '../App'

test('double', () => {
  assert(double(2) === 4)
  assert(double(3) === 6)
  assert(double(4) === 8)
})

test('half', () => {
  assert(half(2) === 1)
  assert(half(3) === 1.5)
  assert(half(4) === 2)
})

test('zero', () => {
  assert(zero(2) === 0)
  assert(zero(3) === 0)
  assert(zero(4) === 0)
})

test('add', () => {
  assert(add(2, 2) === 4)
  assert(add(3, 3) === 6)
  assert(add(4, 4) === 8)
})

test('squared', () => {
  assert(squared(2) === 4)
  assert(squared(3) === 9)
  assert(squared(4) === 16)
})

test('text', () => {
  expect(text('Hello World')).toMatchInlineSnapshot(`
    <div>
      Hello World
    </div>
  `)
  expect(App() === text('Hello World'))
})
