const RoundRect = function (ctx, x, y, w, h, r){
  // ctx.beginPath();
  ctx.moveTo(w > 0 ? x + r : x - r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, w > 0 ? x + r : x - r, y, r);
  // ctx.closePath();
  // ctx.stroke();
};