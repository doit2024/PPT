const util = {
  swap (arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0]
    return arr
  },
  random (size) {
    return ~~(Math.random() * size)
  }
}

class Rectangle {
  constructor (opts) {
    Object.assign(this, {
      lng: 3,
      wdth: 3,
      size: 100,
      color: '#f00'
    }, opts);
    this.can = document.querySelector(this.el);
    this.ctx = this.can.getContext("2d");
    this.ctx.canvas.width = this.lng * this.size;
    this.ctx.canvas.height = this.wdth * this.size;
    this.ctx.canvas.style.border = `2px solid ${this.color}`;
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.color;
  }
  draw () {
    this.ctx.beginPath();
    for (let i = 1; i < this.lng; i++)
      this.drawCol(i*this.size);
    for (let i = 1; i < this.wdth; i++)
      this.drawRow(i*this.size);
    this.ctx.stroke();
  }
  drawCol (x) {
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, this.wdth*this.size);
  }
  drawRow (y) {
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(this.lng*this.size, y);
  }
}

class Sudoku extends Rectangle {
  constructor (args) {
    super(args)
    this.ratio = this.ratio || 0
    this.cellSize = 3
    this.SIZE = Math.pow(this.cellSize, 2)
    this.data = this.genData(this.getNineNum())
    this.dataMap = this.getDataMap(this.ratio)
  }
  fillText (ins) {
    if (ins) this.ctx = ins.ctx
    this.ctx.font = '25px Georgia'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.dataMap.map(item => item.map(({v, x, y, show}) => {
      if (ins) {
        this.ctx.fillText(v, x, y)
      } else {
        show && this.ctx.fillText(v, x, y)
      }
    }))
  }
  showAnswer (el) {
    const answerBox = new Rectangle({el, lng: 9, wdth: 9, size: 50})
    answerBox.draw()
    this.fillText(answerBox)
  }
  genData ([a, b, c, d, e, f, g, h, i]) {
    let rst = [
      [a, b, c, d, e, f, g, h, i],
      [d, e, f, g, h, i, a, b, c],
      [g, h, i, a, b, c, d, e, f],
      [b, c, d, e, f, g, h, i, a],
      [e, f, g, h, i, a, b, c, d],
      [h, i, a, b, c, d, e, f, g],
      [c, d, e, f, g, h, i, a, b],
      [f, g, h, i, a, b, c, d, e],
      [i, a, b, c, d, e, f, g, h]
    ]
    this.swapRow(rst, 10)
    this.swapCol(rst, 10)
    return rst
  }
  swapRow (data, count) {
    for (let i = 0; i < count; i++) {
      const [a, b] = this.getSwapIndex()
      util.swap(data, a, b)
    }
  }
  swapCol (data, count) {
    for (let i = 0; i < count; i++) {
      const [a, b] = this.getSwapIndex()
      data = data.map(v => util.swap(v, a, b))
    }
  }
  getSwapIndex () {
    const start = util.random(this.cellSize) * 3
    let arr = Array.from({length: this.cellSize}, (v, i) => start + i)
    const aIndex = util.random(this.cellSize)
    const a = arr.splice(aIndex, 1)[0]
    const bIndex = util.random(this.cellSize - 1)
    const b = arr[bIndex]
    return [a, b]
  }
  getNineNum () {
    let rst = []
    let baseData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    while (baseData.length) {
      rst.push(baseData.splice(util.random(baseData.length), 1)[0])
    }
    return rst
  }
  getDataMap (ratio) {
    return this.data.map((item, i) => item.map((v, j) => {
      const show = Math.random() > ratio
      return {
        v,
        x: this.size * (j + 0.5),
        y: this.size * (i + 0.5),
        show,
        inp: show ? v : ''
      }
    }))
  }
  // 点击输入 
  addInput () {
    this.can.addEventListener('click', event => {
      const x = event.pageX - this.can.getBoundingClientRect().left
      const y = event.pageY - this.can.getBoundingClientRect().top
      const i = ~~(y/this.size)
      const j = ~~(x/this.size)
      let target = this.dataMap.find((v, a) => i===a).find((v, a) => j===a)
      if (target.show) return
      let inp = document.createElement('input')
      inp.setAttribute('style', `
        position: absolute;
        left: ${event.pageX - x%this.size + 4}px;
        top: ${event.pageY - y%this.size + 4}px;
        width: ${this.size - 4}px;
        height: ${this.size - 6}px;
        line-height: ${this.size - 6}px;
        border: none;
        text-align: center;
      `)
      inp.setAttribute('maxlength', '1')
      inp.setAttribute('autofocus', 'autofocus')
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          if (!/^\d$/.test(inp.value)) return
          this.ctx.fillStyle = '#f369'
          target.inp = inp.value
          this.ctx.fillText(inp.value, target.x, target.y)
          document.body.removeChild(inp)
        }
      })
      document.body.appendChild(inp)
    })
  }
  // 校验答案
  check () {
    return this.dataMap.every(item => item.every(v => v.v === Number(v.inp)))
  }
}

// 测试数独数据生成正确性
class TestSudoku {
  constructor (sudokuInstance) {
    this.SIZE = sudokuInstance.SIZE
    const data = sudokuInstance.data
    console.log(this.checkRow(data) ? '√ 行检查通过' : '× 行检查未通过')
    console.log(this.checkCol(data) ? '√ 列检查通过' : '× 列检查未通过')
    console.log(this.checkCell(data) ? '√ 九宫格检查通过' : '× 九宫格检查未通过')
  }
  checkRow (xss) {
    return xss.every(v => new Set(v).size === this.SIZE)
  }
  checkCol (xss) {
    let rst = true
    let item = 0
    for (let i = 0; i < this.SIZE; i++) {
      let arr = []
      for (let j = 0; j < this.SIZE; j++) {
        item = xss[j][i]
        if (arr.includes(item)) {
          rst = false
          break
        }
        arr.push(item)
      }
    }
    return rst
  }
  checkCell (xss) {
    return this.checkRow(this.getArrByCell(xss))
  }
  getArrByCell (xss) {
    let arr = Array.from({length: this.SIZE}, () => [])
    for (let i = 0; i < this.SIZE; i++) {
      for (let j = 0; j < this.SIZE; j++) {
        arr[this.getCellPos(i, j)].push(xss[i][j])
      }
    }
    return arr
  }
  getCellPos (i, j) {
    return ~~(j/3) * 3 + ~~(i/3)
  }
}
