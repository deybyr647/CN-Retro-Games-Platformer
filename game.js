
let hero = new Hero()

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
