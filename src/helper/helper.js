let knightPosition = [1, 7]
let observer = null

function emitChange() {
  observer(knightPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}


export function canMoveKnight(toX, toY) {
  console.log(toX, toY)
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y
  console.log(dx, dy  )

  return (
    (dx === -1 && dy === -1)
    ||
    (dx === 1 && dy === -1)
  )
}