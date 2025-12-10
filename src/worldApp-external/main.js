import World from "./world";

async function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  await world.init();
  world.render();
}

main();
