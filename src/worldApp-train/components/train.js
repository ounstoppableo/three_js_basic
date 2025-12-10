import {
  Group,
  MeshStandardMaterial,
  BoxGeometry,
  Mesh,
  CylinderGeometry,
  MathUtils,
} from "three";
function createMaterials(type) {
  if (type === "body") {
    return new MeshStandardMaterial({
      color: "firebrick",
      flatShading: true,
    });
  } else {
    return new MeshStandardMaterial({
      color: "darkslategray",
      flatShading: true,
    });
  }
}

function createCabin() {
  const cabin = new Mesh(
    new BoxGeometry(2, 2.25, 1.5),
    createMaterials("body")
  );
  cabin.position.set(1.5, 1.4, 0);
  return cabin;
}
function createNose() {
  const nose = new Mesh(
    new CylinderGeometry(0.75, 0.75, 3, 12),
    createMaterials("body")
  );
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;
  return nose;
}
function createWheel(radius) {
  const wheel = new Mesh(
    new CylinderGeometry(radius, radius, 1.75, 16),
    createMaterials("detail")
  );
  wheel.position.y = 0.5;
  wheel.rotation.x = Math.PI / 2;
  return wheel;
}
function createChimney() {
  const chimney = new Mesh(
    new CylinderGeometry(0.3, 0.1, 0.5),
    createMaterials("detail")
  );
  chimney.position.set(-2, 1.9, 0);
  return chimney;
}
const wheelSpeed = MathUtils.degToRad(24);
let bigWheel;
let smallWheel1;
let smallWheel2;
let smallWheel3;
class Train extends Group {
  constructor() {
    super();
    bigWheel = createWheel(0.8);
    bigWheel.position.x = 1.5;
    smallWheel1 = createWheel(0.4);
    smallWheel2 = smallWheel1.clone();
    smallWheel2.position.x = -1;
    smallWheel3 = smallWheel2.clone();
    smallWheel3.position.x = -2;
    this.add(
      createCabin(),
      createNose(),
      createChimney(),
      bigWheel,
      smallWheel1,
      smallWheel2,
      smallWheel3
    );
  }
  tick(delta) {
    bigWheel.rotation.y += delta * wheelSpeed;
    smallWheel1.rotation.y += delta * wheelSpeed;
    smallWheel2.rotation.y += delta * wheelSpeed;
    smallWheel3.rotation.y += delta * wheelSpeed;
  }
}
export default Train;
