class Sky {
  constructor () {

  }

  static get inputProperties () {
    return ['--density', '--opacity']
  }

  paint(ctx, paintSize, properties) {
    const xMax = paintSize.width
    const yMax = paintSize.height
    ctx.fillRect(0, 0, xMax, yMax)
    const density = properties.get('--density').toString() || 1
    const starNum = Math.round((xMax + yMax) * density)

    for (let i = 0; i < starNum; i++) {
      const x = Math.floor(Math.random() * xMax + 1);
      const y = Math.floor(Math.random() * yMax + 1);
      const size = Math.floor(Math.random * 2 + 1);
      const op1 = Math.floor(Math.random() * 9 + 1)
      const op2 = Math.floor(Math.random() * 9 + 1)
      const hue = Math.floor(Math.random() * 360 + 1)
      const opacity = +('.'+(op1+op2))*density
      ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`
      ctx.fillRect(x,y,size,size)
    }
  }
}

registerPaint('sky', Sky)