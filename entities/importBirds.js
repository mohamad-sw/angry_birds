var red_bird = {x:3,name:"red_bird", image:path +  "assets/imgs/red_bird.png", audio: throw_red_bird};
var yellow_bird = {x:-3,name:"yellow_bird", image:path + "assets/imgs/yellow_bird.png", audio: throw_yellow_bird};
var blue_bird = {x:0,name:"yellow_bird", image:path + "assets/imgs/blue_bird.png", audio: throw_blue_bird};


var birdTemplate = function(options = {}){
  var bird = world.createEntity({
    imageOffsetY: -.5,
    imageOffsetX: -.5,
    shape: "square",
    imageStretchToFit: true,
    width: 2,
    height: 2 ,
    y: 22,
    density: 2,
    ...options
  });
  bird.audio = options.audio;
  return bird;
}

function importBirds(){
  return [birdTemplate(yellow_bird),birdTemplate(blue_bird), birdTemplate(red_bird)];
}