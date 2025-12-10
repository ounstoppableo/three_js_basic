import { WebGLRenderer } from "three";

function createRenderer(container) {
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.append(renderer.domElement);
  return renderer;
}
export default createRenderer;
