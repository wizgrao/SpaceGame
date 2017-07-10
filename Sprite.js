class Sprite {

  constructor(img, canvas, imx, imy, imgWidth, imgHeight, x, y, width,
    height, numCols, numRows, frame) {

    this.img = img;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.imx = imx;
    this.imy = imy;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.width = width;
    this.height = height;
    this.numCols = numCols;
    this.numRows = numRows;
    this.frame = frame;
    this.x = x;
    this.y = y;

  }

  update() {

  }

  render() {
    this.frame = this.frame % (this.numCols * this.numRows);
    let column = Math.floor(this.frame % this.numCols);
    let row = Math.floor((this.frame - column) / this.numCols);
    this.ctx.drawImage(this.img, this.imx + column * this.imgWidth,
      this.imy + row * this.imgHeight, this.imgWidth, this.imgHeight,
      this.x - this.width / 2, this.y - this.height / 2, this.width,
      this.height);

  }
}
