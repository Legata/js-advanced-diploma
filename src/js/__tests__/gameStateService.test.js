import GameStateService from '../GameStateService';

test('error loading data', () => {
  const stateService = new GameStateService(null);
  expect(() => stateService.load()).toThrowError(new Error('Invalid state'));
});

test('error loading data', () => {
  const stateService = new GameStateService();
  expect(() => stateService.load()).toThrowError(new Error('Invalid state'));
});
