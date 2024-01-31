/**
 *
 * This is an example of testing a promise
 *
 *
 */

import getTodo from "../fetch";

describe('async test', () => {
  test('fetch data', async () => {
    const res = await getTodo(1);
    expect(res).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    });
  })
});
