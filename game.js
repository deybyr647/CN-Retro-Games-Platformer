
let xScroll = 0
let hero = new Hero()
let world = [
  new Ground(2, 2, 18, 2),
  new Ground(8, 5, 2, 1),
  new Ground(12, 7, 6, 3),
  new Ground(22, 6, 4, 1),
]

let keyPressed = {}
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

function loop() {
  // turn keyboard input into actions
  if (keyPressed['ArrowLeft']) {
    hero.moveLeft()
  }
  if (keyPressed['ArrowRight']) {
    hero.moveRight()
  }
  if (keyPressed['Space']) {
    hero.jump()
  }

  // change state
  hero.step()

  // draw all
  erase()
  world.forEach(g => g.draw())
  hero.draw()

  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  await heroStandSprite.loaded
  await heroJumpSprite.loaded
  await heroWalkSprite1.loaded
  await heroWalkSprite2.loaded
  await groundSprite.loaded
  await groundTopSprite.loaded
  loop()
}
loadGame()
