//constants
const scoreCoordinatesOffsets = require('./constants').scoreCoordinatesOffsets

// predicates 
const isSurviving = require('./predicates').isSurviving
const isDying = require('./predicates').isDying
const isOvercrowded = require('./predicates').isOvercrowded
const isReproducing = require('./predicates').isReproducing
const isDefined = require('./predicates').isDefined

const scoreItem = (board, coordinates) => {
  const x = coordinates.x
  const y = coordinates.y
  return scoreCoordinatesOffsets
    .reduce((score, coordinateOffset) => {
      const offsetX = x - coordinateOffset.x
      const offsetY = y - coordinateOffset.y
      //if
      return isDefined(board[offsetY]) && isDefined(board[offsetY][offsetX])
        //then
        ? score += board[offsetY][offsetX]
        //else
        : score
    }, 0)
}

const getNewItemValue = (board, coordinates) => {
  const score = scoreItem(board, coordinates)
  const x = coordinates.x
  const y = coordinates.y
  switch(true) {
    case isSurviving(score) && board[y][x] === 1: return 1
    case isDying(score) && board[y][x] === 1: return 0
    case isReproducing(score) && board[y][x] === 0: return 1
    case !isReproducing(score) && board[y][x] === 0: return 0
    case isOvercrowded(score) && board[y][x] === 1: return 0
  }
}

module.exports = {
  scoreItem: scoreItem,
  getNewItemValue: getNewItemValue,
}