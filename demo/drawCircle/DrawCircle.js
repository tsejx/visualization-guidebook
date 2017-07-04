const DrawCircle = function (ctx, x, y, r, method, dir){
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, dir);
  switch(method){
    case 'all':
      ctx.fill();
      ctx.stroke();
      break;
    case 'fill':
      ctx.fill();
      break;
    case 'stroke':
    default:
      ctx.stroke();
  }
}