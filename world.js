var canvasElem = document.getElementById("game");
canvasElem.style.width = window.screen.width;

var world = boxbox.createWorld(canvasElem, {
  gravity: { x: 0, y: 10 },
  scale: 20,
});

world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  width: 300,
  height: 0.5,
  y: 28,
  color: "transparent",
});

var bow = world.createEntity({
  name: "bow",
  shape: "square",
  image: "assets/imgs/bow.png",
  imageStretchToFit: true,
  type: "static",
  width: 1,
  height: 5,
  color: "brown",
  x: 3,
  y: 28,
  imageOffsetY: -3,
  imageOffsetX: -0.5,
});

world.onRender(function() {
  if(birds.length == 0) return;
  bird_position = birds[birds.length - 1].position();
  world.camera({ x: bird_position.x - 10 });
});