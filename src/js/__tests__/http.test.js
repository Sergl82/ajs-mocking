import fetchData from '../http';

describe('fetchData function:', () => {
  test('should return Error', () => {
    expect(() => fetchData('12345678')).toThrow();
    expect(() => fetchData('')).toThrow();
  });
});
