function mouseup(e){
  var bird = birds[birds.length - 1];
  var adjacent = Math.abs(
    bird.canvasPosition().x - e.clientX
  );
  var opposite = Math.abs(
    bird.canvasPosition().y - e.clientY
  );
  var theta = Math.atan2(opposite, adjacent);
  theta *= 180 / Math.PI;
  var distance = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
  var power = distance / 2;
  bird.applyImpulse(power, Math.abs(90 - theta));
  bird.audio.play();
  
  setTimeout(() => {
    if (numberOfPigs !== 0 && birds.length == 1) {
      fail.play();
      return;
    }
    bird.destroy();
    birds.pop();
    bird = birds[birds.length - 1]
    bird.position(default_bird_position);
    birdsound.play();
  }, 5000);
}

function mousedown(e){
  pull.play();
}