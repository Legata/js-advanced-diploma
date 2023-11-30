import getCoordinates from './getCoordinates';

export default function definitionAttack(obj, obj1, elem, attack) {
  const [coordinatesCharacterX, coordinatesCharacterY] = getCoordinates(obj, elem);
  const [coordinatesIndexX, coordinatesIndexY] = getCoordinates(obj1, elem);

  const differenceX = Math.abs(coordinatesCharacterX - coordinatesIndexX);
  const differenceY = Math.abs(coordinatesCharacterY - coordinatesIndexY);
  if (differenceX <= attack && differenceY <= attack) {
    return true;
  }
  return false;
}
