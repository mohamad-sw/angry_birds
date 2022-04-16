var pig = {
  name: "pig",
  shape: "square",
  image: path + "assets/imgs/pig.png",
  imageStretchToFit: true,
  width: 2,
  height: 2,
  density: 2,
  imageOffsetY: -0.5,
  imageOffsetX: -0.5,
  onImpact: function(entity, force) {
    var obs = ["red_bird", "blue_bird", "yellow_bird","bird", "wood", "stone", "glass"]
    if (!obs.includes(entity._name)) return;
    if (!this.health) this.health = 200;
    if (this.health < 0) {
      this.destroy();
      pig_destroy.play();
      numberOfPigs -=1;
      if(numberOfPigs == 0){
        setTimeout(() => {
          victory.play();
        }, 5000);
      }
    }else{
      this.health -= force;
    }
  },
};
