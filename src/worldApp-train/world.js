import createAmbientLight from "./components/ambientLight";
import createCamera from "./components/camera";
import createCube from "./components/cube";
import createDirectionalLight from "./components/directionalLight";
import { createAxesHelper, createGridHelper } from "./components/helper";
import createHemisphereLight from "./components/hemisphereLight";
import createScene from "./components/scene";
import Train from "./components/train";
import createControls from "./systems/controls";
import { Loop } from "./systems/loop";
import createRenderer from "./systems/renderer";

let scene;
let camera;
let train;
let renderer;
let resizer;
let light;
let hemisphereLight;
let loop;
export default class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    train = new Train();
    light = createDirectionalLight();
    hemisphereLight = createHemisphereLight();
    scene.add(createAxesHelper(), createGridHelper());
    scene.add(train);
    scene.add(light);
    scene.add(hemisphereLight);
    renderer = createRenderer(container);
    const controls = createControls(camera, renderer, scene);
    loop = new Loop(camera, scene, renderer);
    loop.updatables.push(train);
    loop.start();
  }
  render() {
    renderer.render(scene, camera);
  }
}
