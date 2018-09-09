registerPaint('sky', class {
  constructor () {
    this.default = {
      starDensity: 0.003
    }
  }
  static get inputProperties () {
    return ['--star-density']
  }
  paint (ctx, size, properties) {
    const { width, height } = size;
    ctx.fillRect(0, 0, width, height);
    const density = properties.get('--star-density')[0] || this.default.starDensity
    const count = width * height * density;
    for (let i = 0; i < count; i++) {
      ctx.fillStyle = `hsla(${random(1, 360)}, 30%, 80%, ${Math.random()})`;
      ctx.fillRect(
        random(1, width),
        random(1, height),
        random(1, 2),
        random(1, 2)
      );
    }
  }
})

function random (start, end) {
  return Math.floor(Math.random()*end + start)
}
