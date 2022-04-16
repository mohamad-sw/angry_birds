var wood = {
  name: "wood",
  shape: "square",
  color: "brown",
  width: .5,
  height: 4,
  density: 5,
  onImpact: function(entity, force){
      var birds = ["red_bird", "blue_bird", "yellow_bird"]
      if(!birds.includes(entity._name)) return;
      if(!this.health ) this.health = 50;
      if(this.health < 0){
        this.destroy();
        destroy_wood.play();
      }else{
        this.health -= force;
        damage_wood.play();
      }
  },
}

var stone = {
  name: "stone",
  shape: "square",
  color: "gray",
  width: .5,
  height: 4,
  density: 10,
  onImpact: function(entity, force){
    var birds = ["red_bird", "blue_bird", "yellow_bird"]
    if(!birds.includes(entity._name)) return;
    if(!this.health ) this.health = 100;
      
    if(this.health < 0){
      this.destroy();
      destroy_stone.play();
    }else{
      this.health -= force;
      damage_stone.play();
    }
},
}


var glass = {
  name: "glass",
  shape: "square",
  color: "rgba(9, 132, 227,0.6)",
  width: .5,
  height: 4,
  density: 2,
  onImpact: function(entity, force){
      var birds = ["red_bird", "blue_bird", "yellow_bird"];
      if(!birds.includes(entity._name)) return;
      this.destroy();
        destroy_glass.play();
  },
}