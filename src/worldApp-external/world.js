import createAmbientLight from "./components/ambientLight";
import createCamera from "./components/camera";
import createDirectionalLight from "./components/directionalLight";
import createExternalObj from "./components/externalObj";
import createHemisphereLight from "./components/hemisphereLight";
import createScene from "./components/scene";
import createControls from "./systems/controls";
import createRenderer from "./systems/renderer";
import { Loop } from "./systems/loop";

let scene;
let camera;
let renderer;
let resizer;
let light;
let hemisphereLight;
let loop;
export default class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    light = createDirectionalLight();
    hemisphereLight = createHemisphereLight();
    scene.add(light);
    scene.add(hemisphereLight);
    renderer = createRenderer(container);
    const controls = createControls(camera, renderer, scene);
    loop = new Loop(camera, scene, renderer);
    loop.start();
  }
  async init() {
    const parrot = await createExternalObj("/models/Parrot.glb");
    loop.updatables.push(parrot);
    scene.add(parrot);
  }
  render() {
    renderer.render(scene, camera);
  }
}
