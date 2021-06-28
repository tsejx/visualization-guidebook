/**
 * title: 绘制三角形
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const drawStraightLine = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(120, 120);
    ctx.closePath();
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