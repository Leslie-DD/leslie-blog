---
title: SurfaceView 和 TextureView 的区别
author: Leslie D
editLink: false
comment: false
date: 2024-09-24
---

::: tip 视图
SurfaceView 和 TextureView 是 Android 应用开发中用于显示内容的两种常用视图，尤其是在需要呈现视频或其他图形内容时。理解它们的作用和区别对于在不同场景下选择合适的视图非常重要。
:::

## 一、SurfaceView

### 作用：

SurfaceView 提供了一种将内容直接绘制到屏幕上的方式，主要用于高效显示频繁更新的内容，比如视频、游戏图形等。

### 特点：

- **默认在独立的窗口（Surface）中绘制**：SurfaceView 创建一个独立的窗口，通过一个独立的 Surface 进行绘制，绘制过程和主线程分离，减少卡顿。
- **较低延迟**：由于 SurfaceView 使用独立的表面，它的绘制操作会更加顺畅高效，适合需要高帧率的场景。
- **不支持变换（Translation、Rotation 等）**：SurfaceView 不支持像普通视图一样进行移动、缩放、旋转等变换操作，因为这些操作需要从根本上重排独立的 Surface。

### 使用场景：

- 视频播放
- 高性能游戏图形渲染

```kotlin
val surfaceView = findViewById<SurfaceView>(R.id.surfaceView)
val holder = surfaceView.holder

holder.addCallback(object : SurfaceHolder.Callback {
    override fun surfaceCreated(holder: SurfaceHolder) {
        // 开始绘制
    }

    override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
        // 处理更改
    }

    override fun surfaceDestroyed(holder: SurfaceHolder) {
        // 停止绘制
    }
})
```

## 二、TextureView

### 作用：

TextureView 是一个显示内容的控件，可以在其内容上进行复杂的视图变换，如缩放、旋转等。TextureView 渲染的内容会在视图层次中作为纹理进行处理。

### 特点：

- **呈现在视图层级中**：相比于 SurfaceView，TextureView 的内容是在正常的视图层次中进行绘制，允许多层视图叠加和变换效果。
- **支持变换**：TextureView 支持视图的常见变换操作（Translation、Rotation、Scale 等），适合在需要动画和变换效果的场景下使用。
- **有一定性能开销**：由于其内容在视图层级中作为纹理处理，导致它的性能相对 SurfaceView 有所下降，但仍然适用于大多数动态内容需求。

### 使用场景：

- 视频播放需要特效变换（例如旋转、缩放）
- 动画内容
- 拍照、视频录制时的取景预览

```kotlin
val textureView = findViewById<TextureView>(R.id.textureView)
textureView.surfaceTextureListener = object : TextureView.SurfaceTextureListener {
    override fun onSurfaceTextureAvailable(surface: SurfaceTexture, width: Int, height: Int) {
        // 开始绘制
    }

    override fun onSurfaceTextureSizeChanged(surface: SurfaceTexture, width: Int, height: Int) {
        // 处理尺寸变化
    }

    override fun onSurfaceTextureDestroyed(surface: SurfaceTexture): Boolean {
        return true // 返回true表示SurfaceTexture将被释放
    }

    override fun onSurfaceTextureUpdated(surface: SurfaceTexture) {
        // 更新绘制内容
    }
}
```

## 三、主要区别

### 1、 性能差异：

SurfaceView 利用独立的 Surface 进行渲染，性能较高，适合对延迟和帧率要求高的场景。
TextureView 在视图层级中作为纹理处理，性能稍逊，但提供更多视图操作灵活性。

### 2、 视图变换：

- SurfaceView 不支持常见的视图变换操作（如旋转、缩放），只能随整个窗体一同进行变换。
- TextureView 支持所有视图变换操作，适合需要变换和动画的内容。

### 3、 使用方式：

- SurfaceView 需要通过 SurfaceHolder 进行管理和绘制。
- TextureView 通过 SurfaceTexture 进行管理，较为简单和灵活。

### 4、 视图层级：

- SurfaceView 的内容会穿透整个视图层级，可能导致其上层盖的其他控件看不到。
- TextureView 的内容在正常视图层级中，可以进行叠加和变换。

在具体应用中，开发者需要根据性能需求、视图变换需求和视图层级管理的需求选择合适的视图控件。