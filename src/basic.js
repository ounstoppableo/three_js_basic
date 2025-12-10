import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

const container = document.querySelector("#scene-container");

// 添加场景
const scene = new Scene();
scene.background = new Color("black");

// 添加相机
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
let radius = 10;
camera.position.set(0, 0, radius);

const boxGeometry = new BoxGeometry(2, 2, 2);
const bollGeometry = new SphereGeometry(
  2, // 半径
  32, // 横向分段（越大越圆）
  32 // 纵向分段
);

// 添加物体
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(boxGeometry, material);
const boll = new Mesh(bollGeometry, material);
boll.position.set(-6, 0, 0);
scene.add(cube);
scene.add(boll);

// 添加渲染器
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
renderer.render(scene, camera);

// 动画
let angle = 0;
function animate() {
  requestAnimationFrame(animate);

  angle += 0.01;

  camera.position.x = Math.sin(angle) * radius;
  camera.position.z = Math.cos(angle) * radius;

  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

animate();
