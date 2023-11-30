import { generateTeam } from '../generators';
import Bowman from '../characters/Bowman';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';

const allowedTypes = [Swordsman, Bowman, Magician];

test('characterGenerator must create characters in the right amount and with certain levels', () => {
  const team = generateTeam(allowedTypes, 3, 6);
  expect(team.length).toBe(6);
});

test('characterGenerator emotion generator should create emotions with certain levels', () => {
  const team = generateTeam(allowedTypes, 4, 1);
  expect(team[0].level).toBeLessThanOrEqual(4);
});
