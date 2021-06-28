/**
 * title: 高清屏幕显示
 * desc: 画布适配将与画板像素尺寸相同，否则画布像素是画板像素的两倍
 */

import React, { useRef, useEffect } from 'react';

const App = () => {
  const hdCanvasRef = useRef(null);
  const ldCanvasRef = useRef(null);

  const renderPath = context => {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 200);
    context.lineWidth = context.lineWidth;
    context.stroke();
  };

  // 绘制高清晰度画布
  const initHDCanvas = () => {
    const canvas = hdCanvasRef.current;
    // 获取 DPR
    const dpr = window.devicePixelRatio;
    const ctx = canvas.getContext('2d');

    // 获取容器高度
    const { width, height } = hdCanvasRef.current.getBoundingClientRect();
    // 根据 DPR 设置 Canvas 的宽高，使 1 个 Canvas 元素和 1 个物理像素相等
    canvas.width = dpr * width;
    canvas.height = dpr * height;
    // 根据 DPR 设置 Canvas 的宽高属性
    ctx.scale(dpr, dpr);

    renderPath(ctx);
  };

  // 绘制低清晰度画布
  const initLDCanvas = () => {
    const ctx = ldCanvasRef.current.getContext('2d');

    renderPath(ctx);
  };

  useEffect(() => {
    initHDCanvas();
    initLDCanvas();
  }, []);

  return (
    <>
      <p>已适配 画布像素：画板像素（物理像素）= 1:1</p>
      {/* 高清画布 */}
      <canvas
        ref={hdCanvasRef}
        style={{ border: '1px solid #000', width: 200, height: 200 }}
      ></canvas>
      <br />
      <p>未适配 画布像素：画板像素（物理像素）= {window.devicePixelRatio}:1</p>
      {/* 普通画布 */}
      <canvas
        ref={ldCanvasRef}
        width="200"
        height="200"
        style={{ border: '1px solid #000' }}
      ></canvas>
    </>
  );
};

export default () => <App />;
