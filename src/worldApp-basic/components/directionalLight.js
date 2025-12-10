import { DirectionalLight } from "three";

function createDirectionalLight() {
  const directionalLight = new DirectionalLight(0xffffff, 5);
  directionalLight.position.set(20, 0, -20);
  return directionalLight;
}
export default createDirectionalLight;
