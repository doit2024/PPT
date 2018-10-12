class Rectangle {
  constructor (selector) {
    this.can = document.querySelector('#can');
    this.ctx = this.can.getContext("2d");
  }
  draw (opts) {
    Object.assign(this, {
      lng: 3,
      wdth: 3,
      size: 100,
      color: '#f00'
    }, opts)
    this.ctx.canvas.width = this.lng * this.size;
    this.ctx.canvas.height = this.wdth * this.size;
    this.ctx.canvas.style.border = `2px solid ${this.color}`;
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.color;
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
