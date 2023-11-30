export function* characterGenerator(allowedTypes, maxLevel) {
  const randomTypeIndex = Math.floor(Math.random() * allowedTypes.length);
  const randomLevel = Math.floor(Math.random() * maxLevel + 1);

  yield new allowedTypes[randomTypeIndex](randomLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];

  while (team.length < characterCount) {
    const character = characterGenerator(allowedTypes, maxLevel);
    team.push(character.next().value);
  }

  return team;
}
