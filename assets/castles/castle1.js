function castle1(xOffset, yOffset){
  world.createEntity(wood, {x: xOffset +2 ,y:yOffset + 20, width: 1});
  world.createEntity(pig, {x: xOffset + 4,y:yOffset + 20});
  world.createEntity(wood, {x: xOffset + 6,y:yOffset + 20});
  world.createEntity(pig, {x: xOffset + 8,y:yOffset + 20});
  world.createEntity(glass, {x: xOffset + 10,y:yOffset + 20});
  world.createEntity(pig, {x: xOffset + 12,y:yOffset + 20});
  world.createEntity(wood, {x: xOffset + 14,y:yOffset + 20});
  world.createEntity(pig, {x: xOffset + 16,y:yOffset + 20});
  world.createEntity(wood, {x: xOffset + 18,y:yOffset + 20, width: 1});
  world.createEntity(stone, {x: xOffset + 10, y:yOffset+ 17, width: 16.5 , height: .5,});

  world.createEntity(glass, {x: xOffset +2,y:yOffset + 11, height: 10});
  world.createEntity(wood, {x: xOffset + 8,y:yOffset + 11, height: 10});
  world.createEntity(pig, {x: xOffset + 10,y:yOffset + 15});
  world.createEntity(wood, {x: xOffset + 12,y:yOffset + 11, height: 10});
  world.createEntity(wood, {x: xOffset + 18,y:yOffset + 11, height: 10});
  world.createEntity(stone, {x: xOffset + 10,y:yOffset +  5, width: 16.5 , height: .5,});

  // number of pigs in this castle
  return 5;
}