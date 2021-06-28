/**
 * title: 绘制圆弧
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.arcTo(200, 50, 200, 100, 50);

    ctx.strokeStyle = 'blue';
    ctx.stroke();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default () => <App />;
