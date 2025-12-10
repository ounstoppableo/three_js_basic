import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, renderer, scene) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  });
  return controls;
}
export default createControls;
