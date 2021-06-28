/**
 * title: 绘制二次贝塞尔曲线
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.quadraticCurveTo(230, 30, 50, 100);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    // 当前坐标（50， 20）
    ctx.fillRect(45, 15, 10, 10);
    // 路径上新追加的坐标点（50， 100）
    ctx.fillRect(45, 95, 10, 10);

    ctx.fillStyle = 'red';
    // 控制点（230， 30）
    ctx.fillRect(225, 25, 10, 10);
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default () => <App />;
