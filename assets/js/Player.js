var player = {
  height : 100,
  width : 40,
  color : '#ffc107',
  positionX : 10,
  positionY : world.bottom,
  speedX : 0,
  speedY : 0,
  gravity : 0.35,
  gravitySpeed : 0,
  bounceCoefficent : 0.05,
  isJumping : false,
  createPlayer : function(){
    this.positionY = world.bottom;
    context.fillStyle = this.color;
    // context.fillRect( offset().left , offset().top, width, height );
    context.fillRect(this.positionX, this.positionY, this.width, -this.height);
  },
  updatePlayer : function(){
    this.gravitySpeed += player.gravity;
    this.positionX += player.speedX;
    this.positionY += player.speedY + player.gravitySpeed;
    this.hitBottom();
    context.fillStyle = player.color;
    context.fillRect(this.positionX, this.positionY, player.width, -player.height);
    if (this.positionY < world.bottom){
      player.isJumping = true;
    } else if (this.positionY == world.bottom){
      player.isJumping = false;
    }
  },
  hitBottom : function(){
    if (this.positionY > world.bottom){
      this.positionY = world.bottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounceCoefficent);
    }
  }
}
