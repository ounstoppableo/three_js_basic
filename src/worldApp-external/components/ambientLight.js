import { AmbientLight } from "three/src/lights/AmbientLight.js";

function createAmbientLight() {
  const ambientLight = new AmbientLight("white", 2);
  return ambientLight;
}
export default createAmbientLight;
