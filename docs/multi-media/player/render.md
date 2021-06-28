---
nav:
  title: 多媒体
  order: 2
group:
  title: 播放器
  order: 3
title: 渲染
order: 5
---

# 渲染

| 协议     | 传输层  | 视频格式       | 延时 | 数据分段 | 原生 Video | 服务器编程难度 |
| :------- | :------ | :------------- | :--- | :------- | :--------- | :------------- |
| Http-FLV | HTTP 流 | FLV            | 低   | 连续流   | 不支持     | 简单           |
| RTMP     | TCP 流  | FLV Tag        | 低   | 连续流   | 不支持     | 一般           |
| HLS      | HTTP    | TS 文件        | 很高 | 切片文件 | 部分支持   | 一般+          |
| DASH     | HTTP    | MP4、3GP、WebM | 高   | 切片文件 | 极少支持   | 中等           |
