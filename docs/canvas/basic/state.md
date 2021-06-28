---
nav:
  title: Canvas
  order: 1
group:
  title: 基本
  order: 1
title: 画布状态
order: 2
---

# 画布状态

CanvasRenderingContext2D 渲染环境包含了多种绘图的样式状态（属性有线的样式、填充样式、阴影样式、文本样式）。

Canvas 的 API 提供了两个名叫 `CanvasRenderingContext2D.save()` 和 `CanvasRenderingContext2D.restore()` 的方法，用于保存及恢复当前 Canvas 绘画环境的所有属性。其中 `CanvasRenderingContext2D.save()` 可以保存当前状态，而 `CanvasRenderingContext2D.restore()` 可以还原之前保存的状态。

这两个方法在绘图中有着重要的作用，比如我们在绘图的时候需要使用多种颜色，颜色需要不时的切换。那么使用 `save()` 和 `restore()` 方法即可比较方便地实现此功能。

## save

`CanvasRenderingContxt2D.save()` 是 Canvas 2D API 通过将当前状态放入栈中，保存 Canvas 全部状态的方法。

<code src="../../../sample/canvas-state/save/index.tsx" />

## restore

`CanvasRenderingContxt2D.restore()` 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 Canvas  恢复到最近的保存状态的方法。 如果没有保存状态，此方法不做任何改变。

当该方法和 `save` 一起使用时，恢复到 `ctx.save` 保存时的状态。

## 状态和非状态

在 Canvas 环境中绘图时，可以利用所谓的绘图堆栈状态。每个状态随时存储 Canvas 上下文数据。

下面是存储在状态堆栈的数据列表。

- 当前的坐标变换（变换矩阵）信息，比如旋转或平移时使用的 `rotate()` 和 `setTransform()` 方法
- 当前剪贴区域
- 图形上下文对象（`CanvasRenderingContext2D`）的当前属性值

`CanvasRenderingConext2D` 的当前属性值主要包括：

| 属性                     | 默认值             | 描述                                                                        |
| :----------------------- | :----------------- | :-------------------------------------------------------------------------- |
| canvas                   | -                  | 取得画布 `<canvas>` 元素                                                    |
| fillStyle                | `#000000`          | 填充路径的当前的颜色、模式或渐变                                            |
| strokeStyle              | `#000000`          | 指定线段颜色                                                                |
| globalCompositeOperation | `source-over`      | 指定颜色如何与画布上已有颜色组合（合成）                                    |
| lineCap                  | `butt`             | 指定线段端点的绘制方式                                                      |
| lineJoin                 | `miter`            | 指定线段端点的绘制方式                                                      |
| lineWidth                | 1                  | 绘制线段的宽度                                                              |
| miterLimit               | 10                 | 当 `lineJoin` 为 `miter` 时，这个属性指定斜连接长度和二分之一线宽的最大比率 |
| shadowColor              | `rgba(0, 0, 0, 0)` | 指定阴影颜色                                                                |
| shadowBlur               | 0                  | 指定阴影模糊度                                                              |
| shadowOffsetX            | 0                  | 指定阴影水平偏移值                                                          |
| shadowOffsetY            | 0                  | 指定阴影垂直偏移值                                                          |

> `save()` 和 `restore()` 方法允许你保存和恢复一个 `CanvasRenderingContext2D` 对象的状态。`save()` 把当前状态推入到绘图堆栈中，而 `restore()` 从绘图堆栈中的顶端弹出最近保存的状态，并且根据这些存储的值来设置当前绘图状态。

简单来说，`save()` 主要用来保存目前 Canvas 的状态，通过 `save()` 函数它会将目前 Canvas 的状态推到绘图堆栈中；而 `restore()` 函数就是从绘图堆栈中弹出上一个 Canvas 的状态。

## 应用实例

### 制作一个扇形

在实际使用当中，`save()` 和 `restore()` 的使用还是非常广泛的，特别是涉及到坐标系统的变换和图形变换方面。

<code src="../../../sample/canvas-state/sector/index.tsx" />

## 参考资料

- [Canvas 学习：save()和 restore()](https://www.w3cplus.com/canvas/canvas-states.html)
