import { text, mudd } from '../texts'

test('verify text function', () => {
  expect(text('Hello World')).toMatchInlineSnapshot(`
    <div>
      Hello World
    </div>
  `)
});

test('verify mudd function', () => {
  const res = mudd();
  expect(res).toBe('my name is mudd');
  expect(res).toHaveLength(15);
})
