import getCoordinates from './getCoordinates';

export default function definitionSteps(obj, obj1, elem, step) {
  const displacementField = [
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
  ];

  const [coordinatesCharacterX, coordinatesCharacterY] = getCoordinates(obj, elem);
  const [coordinatesIndexX, coordinatesIndexY] = getCoordinates(obj1, elem);
  const coordinateShiftX = 4 - (coordinatesCharacterX - coordinatesIndexX);
  const coordinateShiftY = 4 - (coordinatesCharacterY - coordinatesIndexY);

  const differenceX = Math.abs(coordinatesCharacterX - coordinatesIndexX);
  const differenceY = Math.abs(coordinatesCharacterY - coordinatesIndexY);
  if (differenceX <= step && differenceY <= step) {
    if (displacementField[coordinateShiftX][coordinateShiftY] === 1) {
      return 1;
    }
  }
  return 0;
}
