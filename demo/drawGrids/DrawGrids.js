const DrawGrids = function (ctx, color, stepX, stepY, lineWidth = 0.5){
  if(!(ctx instanceof CanvasRenderingContext2D)){
    throw new Error('Canvas`s context is error!');
  }
  
  stepX = parseInt(stepX);
  stepY = parseInt(stepY);
  
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  
  const W = ctx.canvas.width;
  const H = ctx.canvas.height;
  
  for(let i=stepX+0.5; i<W; i+=stepX){
    ctx.beginPath();
    ctx.lineTo(i, 0);
    ctx.lineTo(i, H);
    ctx.stroke();
  }
  
  for(let i=stepY+0.5; i<W; i+=stepY){
    ctx.beginPath();
    ctx.lineTo(0, i);
    ctx.lineTo(W, i);
    ctx.stroke();
  }
  ctx.restore();
};

// export default DrawGrids;