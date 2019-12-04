
class Hero {
  constructor() {
    // position
    this.x = gridSize * 3.5
    this.y = 0

    // speed
    this.dx = 0
    this.dy = 0

    this.airborne = true
  }

  moveLeft() {
    this.dx = 0 - (gridSize / 10)
  }
  moveRight() {
    this.dx = gridSize / 10
  }
  jump() {
    // if we're already airborne, exit early
    if (this.airborne) {
      return
    }
    // jumping makes us airborne
    this.airborne = true
    this.dy = 0 - (gridSize / 3)
  }

  step() {
    // apply speed to position
    this.x += this.dx
    this.y += this.dy

    // apply friction to x movement (slow down)
    this.dx *= 0.7

    // apply gravity to y movement (speed up)
    this.dy += gridSize / 60

    // check if hit ground
    let groundLevel = canvas.height - gridSize
    if (this.y > groundLevel) {
      this.y = groundLevel
      this.airborne = false
    }
  }

  draw() {
    // figure out which sprite to draw
    let image = heroStandSprite.image
    if (Math.abs(this.dx) > 0.1) {
      image = heroWalkSprite1.image
    }
    if (this.airborne) {
      image = heroJumpSprite.image
    }

    // draw the sprite
    ctx.drawImage(
      image,
      this.x - gridSize/2,
      this.y - gridSize,
      gridSize,
      gridSize
    )

    // draw our logical position
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2*Math.PI, false)
    ctx.fill()
  }
}
