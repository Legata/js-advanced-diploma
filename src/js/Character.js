export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;

    if (new.target.name === 'Character') {
      throw new Error("you can't create a class with type Character");
    }
    // TODO: выбросите исключение, если кто-то использует "new Character()"
  }
}
