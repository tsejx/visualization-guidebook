/**
 * title: 判断点是否在路径上
 */

import React, { useState, useRef, useEffect } from 'react';
import { InputNumber } from 'antd';

const App = () => {
  const canvasRef = useRef(null);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [isMatchArea, setState] = useState(false);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.rect(10, 10, 100, 100);
    ctx.fill();
  };

  const drawPoint = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.clearRect(0, 0, 1000, 1000);

    draw();

    ctx.fillStyle = 'red';
    ctx.fillRect(x - 2, y - 2, 4, 4);
  }

  const isPointInPath = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');

    const isMatch = ctx.isPointInPath(x, y);

    setState(isMatch)
  }

  useEffect(() => {
    draw();
  }, []);

  useEffect(() => {
    drawPoint(x, y)
    isPointInPath(x, y)
  }, [x, y])

  return (
    <>
      <InputNumber value={x} placeholder="横坐标" onChange={(val) => setX(val)} style={{ marginRight: 10 }}></InputNumber>
      <InputNumber value={y} placeholder="纵坐标" onChange={(val) => setY(val)}></InputNumber>
      <div style={{ marginBottom: 10 }}></div>
      检测点（{x}，{y}）是否在当前路径中：{isMatchArea ? '是' : '否'}
      <div style={{ marginBottom: 10 }}></div>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default () => <App />;
