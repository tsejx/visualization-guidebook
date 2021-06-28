---
nav:
  title: Canvas
  order: 1
group:
  title: 绘制
  order: 3
title: 绘制矩形
order: 2
---

# 绘制矩形

矩形是唯一一种可以直接在 2D 上下文中绘制的形状。

绘制矩形的相关方法共有三种：

- [绘制矩形](#绘制矩形)
    - [fillRect()](#fillrect)
      - [语法](#语法)
      - [示例](#示例)
    - [strokeRect()](#strokerect)
      - [语法](#语法-1)
      - [示例](#示例-1)
    - [clearRect()](#clearrect)
      - [语法](#语法-2)
      - [示例](#示例-2)

这三个方法都能接收 4 个参数：矩形的 x 坐标、矩形的 y 坐标、矩形宽度和矩形高度。这些参数的单位都是像素。

### fillRect()

`CanvasRenderingContext2D.fillRect()` 方法用于绘制矩形（填充颜色）。默认填充色为黑色。

📌 使用 `fillStyle` 属性来设置用于填充绘图的颜色、渐变或模式。

#### 语法

```js
context.fiilRect(x, y, width, height);
```

| 参数   | 说明             | 类型   |
| ------ | ---------------- | ------ |
| x      | 矩形起点的横坐标 | number |
| y      | 矩形起点的纵坐标 | number |
| width  | 矩形的宽度       | number |
| height | 矩形的高度       | number |

#### 示例

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

### strokeRect()

`CanvasRenderingContext2D.strokeRect()` 方法用于绘制矩形（不填色）。

📌 使用 `strokeStyle` 属性来设置笔触的颜色、渐变或模式。

#### 语法

```js
context.strokeRect(x, y, width, height);
```

| 参数   | 说明             | 类型   |
| ------ | ---------------- | ------ |
| x      | 矩形起点的横坐标 | number |
| y      | 矩形起点的纵坐标 | number |
| width  | 矩形的宽度       | number |
| height | 矩形的高度       | number |

#### 示例

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.strokeRect(10, 10, 100, 100);
```

### clearRect()

`CanvasRenderingContext2D.clearRect()` 方法清空给定矩形内的指定像素。

#### 语法

```js
context.clearRect(x, y, width, height);
```

| 参数   | 说明             | 类型   |
| ------ | ---------------- | ------ |
| x      | 矩形起点的横坐标 | number |
| y      | 矩形起点的纵坐标 | number |
| width  | 矩形的宽度       | number |
| height | 矩形的高度       | number |

#### 示例

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.lineTo(120, 120);
ctx.closePath(); // draws last line of the triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);
```
