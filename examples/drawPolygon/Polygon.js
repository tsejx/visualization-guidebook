const setPolygon = function (ctx, x, y, r, sides = 3, angle = 0){
  angle = angle * Math.PI / 180;
  const points = [];
  for(let i=0; i<sides; i++){
    points.push([ x + r * Math.sin(angle), y - r * Math.cos(angle)]);
    angle += Math.PI * 2 / sides;
  }
  ctx.beginPath();
  for(let item of points){
    ctx.lineTo(item[0], item[1]);
  }
  ctx.closePath();
}

class Polygon {
  constructor(x, y, r, sides = 3, angle = 0){
    this.x = x;
    this.y = y;
    this.r = r;
    this.sides = sides;
    this.angle = 0;
    return this;
  }
  createPoints(){
    let points = [];
    let sides = this.sides;
    let angle = this.angle;
    let r = this.r;
    for(let i=0; i<sides; i++){
      points.push([r * Math.sin(angle), -r * Math.cos(angle)]);
      angle += Math.PI * 2 / sides;
    }
    return points
  }
  createPath(ctx){
    this.ctx = ctx;
    const points = this.createPoints();
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    for(let item of points){
      ctx.lineTo(item[0], item[1]);
    }
    ctx.closePath();
    return this;
  }
  stroke(color = '#000', width = 1){
    const ctx = this.ctx;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
    return this;
  }
  fill(color = '#000'){
    const ctx = this.ctx;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
    return this;
  }
  moveTo(ctx, x, y){
    this.x = x;
    this.y = y;
    this.createPath(ctx);
    return this;
  }
}