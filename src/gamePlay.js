'use strict'

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
  if (isSurviving(score) && board[y][x] === 1) return 1
  if (isDying(score) && board[y][x] === 1) return 0
  if (isReproducing(score) && board[y][x] === 0) return 1
  if (!isReproducing(score) && board[y][x] === 0) return 0
  if (isOvercrowded(score) && board[y][x] === 1) return 0
}

const countLiveItems = board => {
  return board.reduce((innerBoard, row) => {
    return innerBoard.concat(row)
  }, [])
    .reduce((liveItems, item) => {
      liveItems += item
      return liveItems
    }, 0)
}

const boardGenerator = board => {
  const newBoard = board.map((row, y) => row.map((item, x) => {
    const coordinates = {x: x, y: y}
    return getNewItemValue(board, coordinates)
  }))
  //if
  return countLiveItems(newBoard)
    //then
    ? newBoard
    //else
    : false
}

const gamePlay = (board, iterations) => {
  const boards = [board]
  iterations = iterations || 1
  for (let i = 0, l = iterations; i < l; i++) {
    const newBoard = boardGenerator(boards[i])
    boards.push(newBoard)
    if (!newBoard) return boards
  }
  return boards
}


module.exports = {
  scoreItem: scoreItem,
  getNewItemValue: getNewItemValue,
  boardGenerator: boardGenerator,
  gamePlay: gamePlay,
}