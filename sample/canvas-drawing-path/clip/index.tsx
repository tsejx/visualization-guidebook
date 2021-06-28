/**
 * title: 切割路径
 */

import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    // 创建切割区域
    ctx.arc(100, 100, 75, 0, Math.PI * 2, false);
    ctx.clip();

    ctx.fillRect(0, 0, 100, 100);
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default () => <App />;
