import getCoordinates from '../getCoordinates';

test('checking character coordinates', () => {
  expect(getCoordinates(17, 8)).toEqual([2, 1]);
});
