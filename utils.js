
function loadingScreen(percentage){
  cls();

  let rectWidth = canvas.width * .75;
  let rectHeight = 32;
  let rectTopLeftX = canvas.width/2 - rectWidth/2;
  let rectTopLeftY = canvas.height/2 - rectHeight/2;

  let barWidth = rectWidth - 4;
  let barHeight = rectHeight - 4;
  let barTopLeftX = canvas.width/2 - barWidth/2;
  let barTopLeftY = canvas.height/2 - barHeight/2;

  let textHeight = 30;
  ctx.font = textHeight + "px Impact";
  ctx.fillStyle = "green";
  let textWidth = ctx.measureText("Loading").width;
  let textTopLeftX = canvas.width/2 - textWidth/2;
  let textTopLeftY = canvas.height/3 - textHeight/3;
  ctx.fillText("Loading", textTopLeftX, textTopLeftY);

  ctx.fillStyle = "red";
  ctx.fillRect(rectTopLeftX, rectTopLeftY, rectWidth, rectHeight);
  ctx.fillStyle = "black";
  ctx.fillRect(barTopLeftX, barTopLeftY, barWidth, barHeight);
  ctx.fillStyle = "green";
  ctx.fillRect(barTopLeftX, barTopLeftY, percentage * barWidth, barHeight);

}

function cls(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
