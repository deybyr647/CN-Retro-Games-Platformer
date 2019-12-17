
class Hero {
  constructor() {
    this.reset()
  }

  reset() {
    // position
    this.x = gridSize * 3.5
    this.y = 0

    // speed
    this.dx = 0
    this.dy = 0

    this.airborne = true

    // set other state
    xScroll = 0
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
    // save starting position for collision checking
    let xPrev = this.x
    let yPrev = this.y

    // apply speed to position
    this.x += this.dx
    this.y += this.dy

    // apply friction to x movement (slow down)
    this.dx *= 0.7

    // apply gravity to y movement (speed up)
    this.dy += gridSize / 60

    // dont let hero fall so fast
    // they clip through ground
    if (this.dy >= gridSize) {
      this.dy = gridSize - 1
    }

    // check if hit any ground
    let collision = undefined
    world.forEach(ground => {
      let wasAbove = ground.isBelow(xPrev, yPrev)
      let nowInside = ground.contains(this.x, this.y)
      if (wasAbove && nowInside) {
        collision = ground
      }
    })

    if (collision !== undefined) {
      this.y = collision.y
      this.dy = gridSize / 60
      this.airborne = false
    } else {
      this.airborne = true
    }

    // check for falling below the screen
    if (this.y > canvas.height + gridSize) {
      this.reset()
    }

    // check for scrolling the screen
    if (this.x > canvas.width / 2) {
      xScroll = this.x - (canvas.width / 2)
    }
  }

  draw() {
    // figure out which sprite to draw
    let image = heroStandSprite.image
    if (Math.abs(this.dx) > 0.1) {
      // we know we're walking
      let frame = Math.floor(this.x / (gridSize / 3))
      if (frame % 2 === 0) {
        image = heroWalkSprite1.image
      } else {
        image = heroWalkSprite2.image
      }
    }
    if (this.airborne) {
      image = heroJumpSprite.image
    }

    // draw the sprite
    ctx.drawImage(
      image,
      (this.x - gridSize/2) - xScroll,
      this.y - gridSize,
      gridSize,
      gridSize
    )

    // draw our logical position
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(
      this.x - xScroll,
      this.y,
      3, 0, 2*Math.PI, false
    )
    ctx.fill()
  }
}
