import { assert, describe, expect, test } from 'vitest'
import { double, half, zero, add, squared } from '../maths'

describe('name of suite', () => {
  // test('name of test', () => {
  test('verify the sign of a digit', () => {
    assert.isTrue(Math.sign(10) === 1)
    expect(Math.sign(-3)).toBe(-1)
  })

  test('verify double function', () => {
    assert(double(2) === 4)
    assert(double(3) === 6)
    assert(double(4) === 8)
  })

  test('verify half function', () => {
    assert(half(2) === 1)
    assert(half(3) === 1.5)
    assert(half(4) === 2)
  })

  test('verify zero function', () => {
    assert(zero(2) === 0)
    assert(zero(3) === 0)
    assert(zero(4) === 0)
  })

  test('verify add function', () => {
    assert(add(2, 2) === 4)
    assert(add(3, 3) === 6)
    assert(add(4, 4) === 8)
  })

  test('verify squared function', () => {
    assert(squared(2) === 4)
    assert(squared(3) === 9)
    assert(squared(4) === 16)
  })

})

