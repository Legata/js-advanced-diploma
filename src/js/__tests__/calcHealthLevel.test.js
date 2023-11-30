import { calcHealthLevel } from '../utils';

test('health check', () => {
  expect(calcHealthLevel(8)).toBe('critical');
  expect(calcHealthLevel(43)).toBe('normal');
  expect(calcHealthLevel(68)).toBe('high');
});
