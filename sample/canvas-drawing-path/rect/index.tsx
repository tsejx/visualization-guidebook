/**
 * title: 绘制矩形
 */

import React, { useState, useRef, useEffect } from 'react';
import { Select } from 'antd';

const App = () => {
  const canvasRef = useRef(null);
  const [style, setStyle] = useState('fill');

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.clearRect(0, 0, 500, 500)
    ctx.rect(10, 10, 100, 100);

    if (style === 'fill') {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  };

  useEffect(() => {
    draw();
  }, [style]);

  return (
    <>
      <Select style={{ width: 120 }} defaultValue={style} onChange={(value) => setStyle(value)}>
        <Select.Option value="fill">填充</Select.Option>
        <Select.Option value="stroke">非填充</Select.Option>
      </Select>
      <br />
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default () => <App />;
