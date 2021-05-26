import url from '../src/url'

test('Gets the current address by default', () => {
  expect(url()).toBe('https://jestjs.io/')
})
