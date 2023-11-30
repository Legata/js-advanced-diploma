import definitionAttack from '../definitionAttack';

test('if the enemy is out of range', () => {
  expect(definitionAttack(2, 29, 8, 1)).toBeFalsy();
});

test('if the enemy is in range', () => {
  expect(definitionAttack(1, 5, 8, 4)).toBeTruthy();
});
