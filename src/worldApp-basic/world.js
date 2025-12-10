import createAmbientLight from "./components/ambientLight";
import createCamera from "./components/camera";
import createCube from "./components/cube";
import createDirectionalLight from "./components/directionalLight";
import createHemisphereLight from "./components/hemisphereLight";
import createScene from "./components/scene";
import createControls from "./systems/controls";
import createRenderer from "./systems/renderer";

let scene;
let camera;
let cube;
let renderer;
let resizer;
let light;
let hemisphereLight;
export default class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    cube = createCube();
    light = createDirectionalLight();
    hemisphereLight = createHemisphereLight();
    scene.add(cube);
    scene.add(light);
    scene.add(hemisphereLight);
    renderer = createRenderer(container);
    const controls = createControls(camera, renderer, scene);
  }
  render() {
    renderer.render(scene, camera);
  }
}
