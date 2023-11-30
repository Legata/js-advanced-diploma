import themes from './themes';

export default class GameState {
  constructor() {
    this.userPoints = 0;
    this.level = 1;
    this.activeThemes = themes[this.level];
    this.activeTeame = 'player';
    this.numberPlayers = 2;
    this.oldPoints = 0;
    this.teamLocationUser = [];
    this.teamLocationComputer = [];
  }

  savingPoints(el) {
    if (el > this.oldPoints) {
      this.oldPoints = el;
    }
  }
}
