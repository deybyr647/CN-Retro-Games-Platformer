
// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(filename) {
  let image = new Image()
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = 'images/' + filename
  return {
    image: image,
    loaded: loaded,
  }
}
let heroStandSprite = loadSprite('hero_stand.png')
let heroJumpSprite = loadSprite('hero_jump.png')
let heroWalkSprite1 = loadSprite('hero_walk1.png')
let heroWalkSprite2 = loadSprite('hero_walk2.png')
let groundSprite = loadSprite('ground.png')
let groundTopSprite = loadSprite('ground_top.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'lightblue'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

let maxY = 12
let gridSize = Math.ceil(canvas.height / maxY)
