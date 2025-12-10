import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial.js";
function createTexture() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/textures/uv-test-bw.png");
  const material = new MeshStandardMaterial({
    map: texture,
  });
  return material;
}
export default createTexture;
