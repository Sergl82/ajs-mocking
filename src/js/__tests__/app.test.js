import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

describe('getLevel function:', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should return Error', () => {
    expect(() => getLevel('12345678')).toThrow();
  });

  test('should return "level"', () => {
    const response = { status: 'ok', level: 10 };
    fetchData.mockReturnValue(response);

    expect(getLevel('12345678')).toEqual('Ваш текущий уровень: 10');
  });

  test('should return "недоступна"', () => {
    const response = { status: '', level: 10 };
    fetchData.mockReturnValue(response);

    expect(getLevel('1')).toEqual('Информация об уровне временно недоступна');
  });
});
