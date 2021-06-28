/**
 * title: 绘制三次贝塞尔曲线
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    // 当前坐标
    ctx.moveTo(50, 20);
    ctx.bezierCurveTo(230, 30, 230, 70, 50, 100);
    ctx.stroke();

    ctx.fillStlye = 'blue';
    // 当前坐标（50，20）
    ctx.fillRect(45, 15, 10, 10);
    // 路径上新追加的坐标点（50，100）
    ctx.fillRect(45, 95, 10, 10);

    ctx.fillStyle = 'red';
    // 控制点1（230，30）
    ctx.fillRect(225, 25, 10, 10);
    // 控制点1（230，70）
    ctx.fillRect(225, 65, 10, 10);
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default () => <App />;
