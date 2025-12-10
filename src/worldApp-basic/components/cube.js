import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import { Vector3 } from "three/src/math/Vector3.js";
import { Euler } from "three/src/math/Euler.js";
import { MathUtils } from "three";
import createTexture from "./texture";

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createTexture();
  const cube = new Mesh(geometry, material);
  createTexture();
  cube.position.copy(new Vector3(5, 5, 5));
  cube.scale.copy(new Vector3(5, 5, 5));
  cube.rotation.copy(
    new Euler(
      MathUtils.degToRad(45),
      MathUtils.degToRad(45),
      MathUtils.degToRad(45)
    )
  );
  return cube;
}

export default createCube;
