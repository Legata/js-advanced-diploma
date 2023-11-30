import GameStateService from '../GameStateService';

beforeEach(() => {
  jest.resetAllMocks();
});

test('error loading data', async () => {
  const stateService = new GameStateService();
  const result = [{ activeTeame: 'player' }];
  stateService.load = jest.fn().mockReturnValue(result);
});

test('data loading', () => {
  const stateService = new GameStateService();
  stateService.load = jest.fn().mockReturnValue({ activeTeame: 'player' });
});
