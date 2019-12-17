
class Ground {
  constructor(x, y, width, height) {
    this.x = x * gridSize
    this.y = (maxY - y) * gridSize
    this.width = width * gridSize
    this.height = height * gridSize
  }

  isBelow(x, y) {
    return (
      this.x < x &&
      x < this.x + this.width &&
      y <= this.y // equals is important here
    )
  }

  contains(x, y) {
    return (
      this.x < x &&
      x < this.x + this.width &&
      this.y < y &&
      y < this.y + this.height
    )
  }

  draw() {
    for (let row = 0; row < this.height; row += gridSize) {
      let image = groundSprite.image
      if (row === 0) {
        image = groundTopSprite.image
      }
      for (let column = 0; column < this.width; column += gridSize) {
        ctx.drawImage(
          image,
          this.x + column - xScroll,
          this.y + row,
          gridSize,
          gridSize
        )
      }
    }

    ctx.strokeStyle = 'darkgreen'
    ctx.strokeRect(
      this.x - xScroll,
      this.y,
      this.width,
      this.height
    )
  }
}













