import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AnimationMixer } from "three";
function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];
  const mixer = new AnimationMixer(model);
  mixer.clipAction(clip).play();
  model.tick = (delta) => mixer.update(delta);
  return model;
}
async function createExternalObj(src) {
  const loader = new GLTFLoader();
  const externalObjData = await loader.loadAsync(src);
  return setupModel(externalObjData);
}
export default createExternalObj;
