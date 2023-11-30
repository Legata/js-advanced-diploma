export default class Team {
  constructor() {
    this.characters = [];
  }

  createTeam(characters) {
    this.characters.push(characters);
    return this.characters;
  }
}
