
class Ground {
  constructor(x, y, width, height) {
    // todo
    this.x = x * gridSize
    this.y = (maxY - y) * gridSize
    this.width = width * gridSize
    this.height = height * gridSize
  }

  isBelow(x, y) {
  	return(
  		this.x < x &&
  		x <  this.x + this.width &&
  		y <= this.y)
  }

  contains(x,y) {
  	return (
  		this.x < x &&
  		x < this.x + this.width &&
  		this.y < y &&
  		y < this.y + this.height)
  }

  draw() {
    // todo
    ctx.fillStyle = 'darkgreen'
    ctx.fillRect(
    	this.x,
    	this.y,
    	this.width,
    	this.height
    	)
  }
}
