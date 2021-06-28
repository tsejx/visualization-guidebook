/**
 * title: 绘制圆弧
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.arc(100, 100, 50, 0, Math.PI / 2, false);

    ctx.stroke();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default () => <App />;
