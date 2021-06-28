/**
 * title: 画布尺寸与画板尺寸
 * desc: 通过对比分析，避免图形变形失真，要保持画布尺寸和画板尺寸一致
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  componentDidMount() {
    const canvasList = document.querySelectorAll('canvas');

    canvasList.forEach((item) => {
      const context = item.getContext('2d');

      this.renderPath(context);
    })
  }

  renderPath(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }

  render() {
    return (
      <>
        <p>1、已设置画布宽高属性（200px * 200px），未设置画板样式宽高，画板尺寸随画布尺寸改变</p>
        <canvas id="canvas1" className="canvas" width="200" height="200"></canvas>
        <p>2、未设置画布宽高属性，但已设置画板样式宽高（200px * 200px）</p>
        <canvas id="canvas2" className="canvas" style={{ width: 200, height: 200 }}></canvas>
        <p>3、设置画布宽高属性（300 * 300），设置画板样式宽高（200 * 200）</p>
        <canvas
          id="canvas3"
          className="canvas"
          width="300"
          height="300"
          style={{ width: 200, height: 200 }}
        ></canvas>
        <p>4、设置画布宽高属性（200 * 200），设置画板样式宽高（300 * 300）</p>
        <canvas
          id="canvas3"
          className="canvas"
          width="200"
          height="200"
          style={{ width: 300, height: 300 }}
        ></canvas>
      </>
    );
  }
}

export default () => <App />;
