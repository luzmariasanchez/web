
export function convertDegreeToRadian(degree:number) {
  return (degree * Math.PI) / 180;
}
export function convertRadianToDegree(radian:number) {
  return (radian * 180) / Math.PI;
}
export function convertCartesianToPolar(x:number, y:number) {
  const distance = Math.sqrt(x * x + y * y);
  const radians = Math.atan2(y, x); //This takes y first
  const polarCoor = { distance: distance, radians: radians };
  return polarCoor;
}
export function convertPolarToCartesian(radio:number, theta:number) {
  return {
    x: radio * Math.cos(theta),
    y: radio * Math.sin(theta),
  };
}
