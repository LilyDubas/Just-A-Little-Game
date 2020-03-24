$(document).keydown(function(e){
  var eventKey = e.keyCode;
  if (eventKey == 39){
    // right
    if (player.speedX < 20){
      player.speedX += 10;
    }
  }
  if (eventKey == 37){
    // left
    if (player.speedX > -20){
      player.speedX -= 10;
    }
  }
  if (eventKey == 38 || eventKey == 32){
    // up
    if (player.speedY > -30 && player.isJumping == false){
      player.isJumping = true;
      player.speedY -= 30;
      setTimeout(function(){ player.speedY = 0; }, 150);
    }
  }
});
$(document).keyup(function(e){
  var eventKey = e.keyCode;
  if (eventKey == 39 || eventKey == 37){
    player.speedX = 0;
  }
  if (eventKey == 38){
    player.speedY = 0;
  }
})
