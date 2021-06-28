---
nav:
  title: Canvas
  order: 1
group:
  title: 基本
  order: 1
title: 画布尺寸
order: 1
---

# 画布尺寸

Canvas 有两种 `width` 和 `height`：

1. 一种是 width、height 属性，一般称其为 **画布尺寸**，即图形绘制的地方。默认值分别为 `300px`、150px。

例如：

```html
<canvas id="canvas" width="300" height="150"></canvas>
```

2. 另一种是 CSS 样式里的 width、height 属性，可通过内联样式、内部样式表或外部样式表设置。一般称其为 **画板尺寸**，用于渲染绘制完成的图形。默认值为空。

例如：

```html
<canvas id="canvas" style="width: 300px; height: 150px;"></canvas>
```

或

```html
<style>
  #canvas {
    width: 300px;
    height: 150px;
  }
</style>
```

<br />

| 画布尺寸 | 画板尺寸 | 说明                           |
| :------- | :------- | :----------------------------- |
| 已设置   | 未设置   | 画板尺寸随画布尺寸改变         |
| 未设置   | 已设置   | 画板尺寸将不再随画布尺寸而改变 |
| 已设置   | 已设置   | 画板尺寸将不再随画布尺寸而改变 |

如果两者设置的尺寸不一样时，就会产生一个问题，渲染时画布要通过缩放来使其与画板尺寸一样，那么画布上已经绘制好的图形也会随之缩放，随之导致变形失真。

下面为绘制从原点到 200\*200 的直线：

<code src="../../../sample/canvas-scale/different-setting-contrast/index.tsx" />

## 高清分辨率

上面说过，避免图形变形失真，要保持画布尺寸和画板尺寸一致。

这只是针对分辨率不高的设备而言，其 `window.devicePixelRatio` 为 1。而高分辨率屏幕，它的 `window.devicePixelRatio` 大于 1。

Canvas 绘制的图形是位图，即 **栅格图像** 或 **点阵图像**，当将它渲染到高清屏时，会被放大，每个像素点会用 `window.devicePixelRatio` 平方个物理像素点来渲染，因此图片会变得模糊。

**解决方法：**

1. 通过 `window.devicePixelRatio` 获取当前设备屏幕的 DPR
2. 获取或设置 Canvas 容器的画板尺寸
3. 根据 DPR，设置 Canvas 元素的宽高属性（在 DPR 为 2 时，相当于扩大画布的两倍）
4. 通过 `context.scale(dpr, dpr)` 缩放 Canvas 画布的坐标系，在 DPR 为 2 时相当于把 Canvas 坐标系也扩大了两倍，这样绘制比例放大了两倍，之后 Canvas 的实际绘制像素就可以按原先的像素值处理

<br />

<code src="../../../sample/canvas-scale/high-definition/index.tsx" />

注意：样式设置的 `width` 是的元素内容宽度，不包括内边距、边框、外边距的，而 `clientWidth` 包括内边距，不包括边框、外边距、滚动条的（如果有）。
