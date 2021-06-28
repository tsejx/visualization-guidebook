import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  /**
   *
   * @param ctx Canvs 绘图上下文
   * @param x 位移目标点横坐标
   * @param y 位移目标点纵坐标
   * @param r 圆弧半径
   * @param sDeg 旋转起始角度
   * @param eDeg 旋转终点角度
   */
  const drawSector = (ctx, x, y, r, sDeg, eDeg) => {
    // 初始保存
    ctx.save();

    // 位移到目标点
    ctx.translate(x, y);
    ctx.beginPath();

    // 画出圆弧
    ctx.arc(0, 0, r, sDeg, eDeg);

    // 再次保存以备旋转
    ctx.save();

    // 旋转至起始角度
    ctx.rotate(eDeg);

    // 移动到终点，准备连接终点与圆心
    ctx.moveTo(r, 0);

    // 连接到圆心
    ctx.lineTo(0, 0);

    // 还原
    ctx.restore();

    //旋转至起点角度
    ctx.rotate(sDeg);

    // 从圆心连接到起点
    ctx.lineTo(r, 0);

    ctx.closePath();

    // 还原到最初保存的状态
    ctx.restore();
  };

  const drawScreen = () => {
    const ctx = canvasRef.current.getContext('2d');

    const deg = Math.PI / 180;
    const payload = {
      x: 300,
      y: 150,
      r: 80,
      sDeg: [30, 111, 190, 233, 280, 345],
      eDeg: [111, 190, 233, 280, 345, 30],
      style: ['#f00', '#0f0', '#00f', '#789', '#abcdef'],
    };
    for (let i = 0; i < payload.sDeg.length; i++) {
      drawSector(
        ctx,
        payload.x,
        payload.y,
        payload.r,
        payload.sDeg[i] * deg,
        payload.eDeg[i] * deg
      );

      ctx.fill();
      ctx.fillStyle = payload.style[i];
    }
  };

  useEffect(() => {
    drawScreen();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default () => <App />;
