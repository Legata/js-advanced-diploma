import definitionSteps from '../definitionSteps';

test('you can take a step', () => {
  expect(definitionSteps(1, 63, 8, 4)).toBe(0);
});

test('you can take a step', () => {
  expect(definitionSteps(1, 3, 8, 2)).toBe(1);
});

test('you can take a step', () => {
  expect(definitionSteps(1, 2, 8, 1)).toBe(1);
});

test("can't take a step", () => {
  expect(definitionSteps(12, 27, 8, 2)).toBe(0);
});
