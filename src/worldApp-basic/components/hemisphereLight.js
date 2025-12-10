import { HemisphereLight } from "three/src/lights/HemisphereLight.js";
function createHemisphereLight() {
  const hemisphereLight = new HemisphereLight(
    "white", // bright sky color
    "darkslategrey", // dim ground color
    5 // intensity
  );
  return hemisphereLight;
}
export default createHemisphereLight;
