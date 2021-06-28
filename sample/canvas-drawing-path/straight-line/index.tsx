/**
 * title: 绘制直线
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const drawStraightLine = () => {
    const ctx = canvasRef.current.getContext('2d');

    // 第一条路径
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();

    // 第二条路径
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(20, 40);
    ctx.lineTo(200, 120);
    ctx.stroke();
  }

  useEffect(() => {
    drawStraightLine()
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default () => <App />