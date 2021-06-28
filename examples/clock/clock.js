class Clock {
  constructor(opt){
    this.x = 0;
    this.y = 0;
    this.r = 0;
    
    Object.assign(this, opt);
    return this;
  }
  init(ctx){
    const fn = () => {
      window.requestAnimationFrame(fn);
      let nowTime = new Date();
      let s = nowTime.getSeconds();
      let m = nowTime.getMinutes() + s/60;
      let h = nowTime.getHours() + m/60;
      this.render(ctx, h, m, s);
    }
    fn();
    return this;
  }
  render(ctx, h, m, s){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.drawWrap(ctx);
    this.drawTack(ctx);
    this.drawText(ctx);
    this.drawHour(ctx, h);
    this.drawMinute(ctx, m);
    this.drawSecond(ctx, s);
    this.drawCircle(ctx);
  }
  drawWrap(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(0, 0, this.r - 5, 0, 2*Math.PI);
    ctx.stroke();
    ctx.restore();
    return this;
  }
  drawTack(ctx){
    let startAngle = 0;
    
    ctx.save();
    ctx.translate(this.x, this.y);
    for(let i=0; i<60; i++){
      let x = (this.r - 20) * Math.cos(startAngle);
      let y = (this.r - 20) * Math.sin(startAngle);
      let r = i%5 ? 2 : 4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2*Math.PI);
      ctx.fill();
      startAngle += Math.PI/30;
    }
    
    ctx.restore();
    return this;
  }
  drawText(ctx){
    const nums = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    let startAngle = 0;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.font = '20px arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    nums.forEach((item, i)=>{
      let x = (this.r - 40) * Math.cos(startAngle);
      let y = (this.r - 40) * Math.sin(startAngle);
      
      ctx.fillText(item, x, y);
      
      startAngle += Math.PI / 6;
    });
    
    ctx.restore();
    return this;
  }
  drawHour(ctx, h){
    const angle = 2*Math.PI / 12 * h;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineWidth = 12;
    ctx.strokeStyle = 'rgb(41, 30, 175)';
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, 100-this.r);
    ctx.stroke();
    ctx.restore();
    return this;
  }
  drawMinute(ctx, m){
    const angle = 2*Math.PI / 60 * m;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgb(49, 114, 167)';
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(0, 50-this.r);
    ctx.stroke();
    ctx.restore();
    return this;
  }
  drawSecond(ctx, s){
    const angle = 2*Math.PI / 60 * s;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.fillStyle = 'rgb(212, 66, 66)';
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-5, 40);
    ctx.lineTo(5, 40);
    ctx.lineTo(2, 30-this.r);
    ctx.lineTo(-2, 30-this.r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    return this;
  }
  drawCircle(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = 'rgb(94, 179, 35)';
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
    return this;
  }
}