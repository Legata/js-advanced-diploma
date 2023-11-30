import Character from '../Character';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

test("Can't create this type", () => {
  expect(() => new Character(1)).toThrow();
});

test('Created Bowman class', () => {
  expect(new Bowman(1)).toEqual({
    type: 'bowman',
    health: 50,
    level: 1,
    attack: 25,
    defence: 25,
    radiusMovement: 2,
    radiusAttack: 2,
  });
});

test('Created Daemon class', () => {
  expect(new Daemon(1)).toEqual({
    type: 'daemon',
    health: 50,
    level: 1,
    attack: 10,
    defence: 10,
    radiusMovement: 1,
    radiusAttack: 4,
  });
});

test('Created Magician class', () => {
  expect(new Magician(1)).toEqual({
    type: 'magician',
    health: 50,
    level: 1,
    attack: 10,
    defence: 40,
    radiusMovement: 1,
    radiusAttack: 4,
  });
});

test('Created Swordsman class', () => {
  expect(new Swordsman(1)).toEqual({
    type: 'swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
    radiusMovement: 4,
    radiusAttack: 1,
  });
});

test('Created Undead class', () => {
  expect(new Undead(1)).toEqual({
    type: 'undead',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
    radiusMovement: 4,
    radiusAttack: 1,
  });
});

test('Created Vampire class', () => {
  expect(new Vampire(1)).toEqual({
    type: 'vampire',
    health: 50,
    level: 1,
    attack: 25,
    defence: 25,
    radiusMovement: 2,
    radiusAttack: 2,
  });
});
