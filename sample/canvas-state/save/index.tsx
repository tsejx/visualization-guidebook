import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // 保存默认的状态
    ctx.save();

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

    // 还原到上次保存（save）的默认状态
    ctx.restore();
    ctx.fillRect(150, 75, 100, 100);
  }, []);

  return (
    <canvas ref={canvasRef} width="200" height="200"></canvas>
  )
}

export default () => <App />