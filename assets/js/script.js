const vh = $('body').height();
const vw = $('body').width();
var canvas = document.getElementById('world');
const context = canvas.getContext('2d');
$(function(){
  // Function going all the way through but not showing in canvas
  function bigBang(){
    world.createWorld();
  }
  bigBang();
})
