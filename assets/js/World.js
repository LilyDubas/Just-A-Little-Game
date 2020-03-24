var world = {
  floorHeight : 50,
  bottom : vh,
  createWorld : function(){
    this.bottom = vh - this.floorHeight;
    $('#world').attr({height: vh, width: vw});
    $('#world').addClass('bg-info');
    context.fillStyle = '#C1C1C1';
    // context.fillRect( offset().left , offset().top, width, height );
    context.fillRect(0, vh, vw, -this.floorHeight);
    player.createPlayer();
    setInterval(this.updateWorld, 20);
  },
  updateWorld : function(){
    context.clearRect(0, 0, vw, vh);
    context.fillStyle = '#C1C1C1';
    context.fillRect(0, vh, vw, -world.floorHeight);
    player.updatePlayer();
  }
}
function createElement(height, width, color, posX, posY){
  context.fillStyle = color;
  context.fillRect(posX, posY, width, -height);
}
