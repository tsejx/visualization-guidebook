---
nav:
  title: 多媒体
  order: 2
group:
  title: 媒体技术
  order: 4
title: WebRTC
order: 1
---

# WebRTC

主要功能：

- 信令交换
- 通信候选地址交换
- 音视频采集
- 音视频发送、接收

## API

- Network Stream API
  - `MediaStream` 媒体数据流
  - `MediaStreamTrack` 媒体源
- RTCPeerConnection
  - `RTCPeerConnection` 允许用户在两个浏览器之间直接通讯
  - `RTCIceCandidate` ICE 协议的候选者
  - `RTCIceServer`
- Peer-to-peer Data API
  - `RTCDataChannel` 数据通道接口，表示一个在两个节点之间的双向的数据通道

## 建立通讯

### 信令服务器

### 协商过程

SDP 协议（Session Description Protocol）指会话描述协议，是一种通用的协议，使用范围不仅限于 WebRTC。

- 设备支持的媒体能力，包括编解码器等
- ICE 候选地址
- 流媒体传输协议
