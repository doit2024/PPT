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
    this.cellSize = 3
    this.SIZE = Math.pow(this.cellSize, 2)
    this.data = this.genData()
    this.dataMap = this.getDataMap(0.5)
    this.swapRow(100) 
    this.swapCol(100)
  }
  fillText () {
    this.ctx.font = '25px Georgia'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.dataMap.map(item => item.map(({v, x, y, show}) => {
      show && this.ctx.fillText(v, x, y)
    }))
  }
  genData () {
    let data = Array.from({length: this.SIZE}, () => Array.from({length: this.SIZE}, () => 0))
    return data.map((item, i) => item.map((v, j) => this.SIZE - (~~(i/this.cellSize) + (i%this.cellSize)*this.cellSize + j + 1) % this.SIZE))
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
  swapRow (count) {
    for (let i = 0; i < count; i++) {
      const [a, b] = this.getSwapIndex()
      this.swap(this.data, a, b)
    }
  }
  swapCol (count) {
    for (let i = 0; i < count; i++) {
      const [a, b] = this.getSwapIndex()
      this.data = this.data.map(v => this.swap(v, a, b))
    }
  }
  swap (arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0]
    return arr
  }
  getSwapIndex () {
    const start = this.random(this.cellSize) * 3
    let arr = Array.from({length: this.cellSize}, (v, i) => start + i)
    const aIndex = this.random(this.cellSize)
    const a = arr.splice(aIndex, 1)[0]
    const bIndex = this.random(this.cellSize - 1)
    const b = arr[bIndex]
    return [a, b]
  }
  random (size) {
    return ~~(Math.random() * size)
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
}
// 生成逻辑
// 初始化
// 1 2 3 4 5 6 7 8 9
// 2 3 4 5 6 7 8 9 1
// 3 4 5 6 7 8 9 1 2
// 4 5 6 7 8 9 1 2 3
// 5 6 7 8 9 1 2 3 4
// 6 7 8 9 1 2 3 4 5
// 7 8 9 1 2 3 4 5 6
// 8 9 1 2 3 4 5 6 7
// 9 1 2 3 4 5 6 7 8
// 移动行: genData()
// 1 2 3 4 5 6 7 8 9  ~~(0/3) + 0 + 1
// 4 5 6 7 8 9 1 2 3  ~~(1/3) + 3 + 1
// 7 8 9 1 2 3 4 5 6  ~~(2/3) + 6 + 1
// 2 3 4 5 6 7 8 9 1  ~~(3/3) + 0 + 1
// 5 6 7 8 9 1 2 3 4  ~~(4/3) + 3 + 1
// 8 9 1 2 3 4 5 6 7  ~~(5/3) + 6 + 1
// 3 4 5 6 7 8 9 1 2  ~~(i/3) + (i%3)*3 + 1
// 6 7 8 9 1 2 3 4 5
// 9 1 2 3 4 5 6 7 8
// 随机换行/列
// Array.from({length: this.cellSize}, (v, i) => ~~(Math.random() * this.cellSize) + i)
// 根据 i j 计算属于哪一块
// 0 1 2
// 3 4 5
// 6 7 8
// 0 0 -> 0
// 2 2 -> 0
// 0 3 -> 0
// i j -> ~~(j/3) * 3 + ~~(i/3)

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
