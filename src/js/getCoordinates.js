export default function getCoordinates(elem, obj) {
  const indexX = elem % obj;
  const indexY = Math.floor(elem / obj);
  return [indexY, indexX];
}
