class Sky {
  paint (ctx, paintSize, properties) {
    // 使用Canvas的API进行绘制
    ctx.fillRect(0, 0, paintSize.width, paintSize.height);
  }
}

registerPaint('starry-sky', Sky)