const assert = require('assert')

// local modules
const scoreItem = require('../src/index').scoreItem
const getNewItemValue = require('../src/index').getNewItemValue

const isSurviving = require('../src/predicates').isSurviving
const isDying = require('../src/predicates').isDying
const isOvercrowded = require('../src/predicates').isOvercrowded
const isReproducing = require('../src/predicates').isReproducing
const isDefined = require('../src/predicates').isDefined

// constants
const boards = [
  [
    [0,1,0,0,0,],
    [1,0,0,1,1,],
    [1,1,1,0,1,],
    [0,1,0,0,0,],
    [1,0,0,0,1,],
  ],
  [
    [0,1,0,0,0,],
    [1,0,0,1,1,],
    [1,1,0,0,1,],
    [0,1,0,0,0,],
    [1,0,0,0,1,],
  ],
]
let board

describe('index.js', () => {
  beforeEach(() => {
    board = boards[1]
  })
  describe('#scoreItem()', () => {
    it('should return number of neighbors', () => {
      assert.equal(0, scoreItem(board, {x: 4, y: 4}))
      assert.equal(1, scoreItem(board, {x: 3, y: 4}))
      assert.equal(2, scoreItem(board, {x: 0, y: 0}))
      assert.equal(3, scoreItem(board, {x: 2, y: 2}))
      assert.equal(4, scoreItem(board, {x: 1, y: 1}))
    })
  })
  describe('#getNewItemValue()', () => {
    it('should return 1 for live items that score surviving', () => {
      assert.equal(1, getNewItemValue(board, {x: 0, y: 2}))
      assert.equal(1, getNewItemValue(board, {x: 4, y: 1}))
    })
    it('should return 1 for dead items that score reproducing', () => {
      assert.equal(1, getNewItemValue(board, {x: 2, y: 1}))
      assert.equal(1, getNewItemValue(board, {x: 3, y: 2}))
    })
    it('should return 0 for dead items that score dead', () => {
      assert.equal(0, getNewItemValue(board, {x: 3, y: 3}))
      assert.equal(0, getNewItemValue(board, {x: 2, y: 3}))
    })
    it('should return 0 for live items that score dying', () => {
      assert.equal(0, getNewItemValue(board, {x: 4, y: 4}))
      assert.equal(0, getNewItemValue(board, {x: 2, y: 3}))
    })
    it('should return 0 for live items that score overcrowded', () => {
      board = boards[0]
      assert.equal(0, getNewItemValue(board, {x: 1, y: 2}))
    })
  })
})

describe('predicates.js', () => {
  describe('#isSurviving()', () => {
    it('should return true for 2 or 3', () => {
      assert.equal(true, isSurviving(2))
      assert.equal(true, isSurviving(3))
    })
    it('should return false for not 2 or 3', () => {
      assert.equal(false, isSurviving(1))
      assert.equal(false, isSurviving(4))
    })
  })
  describe('#isDying()', () => {
    it('should return true for less than 2', () => {
      assert.equal(true, isDying(1))
      assert.equal(true, isDying(0))
    })
    it('should return false for greater than 1', () => {
      assert.equal(false, isDying(2))
      assert.equal(false, isDying(4))
    })
  })
  describe('#isOvercrowded()', () => {
    it('should return true for greater than 3', () => {
      assert.equal(true, isOvercrowded(4))
      assert.equal(true, isOvercrowded(5))
    })
    it('should return false for less than 4', () => {
      assert.equal(false, isOvercrowded(3))
      assert.equal(false, isOvercrowded(2))
    })
  })
  describe('#isReproducing()', () => {
    it('should return true for 3', () => {
      assert.equal(true, isReproducing(3))
    })
    it('should return false for not 3', () => {
      assert.equal(false, isReproducing(2))
      assert.equal(false, isReproducing(4))
    })
  })
  describe('#isDefined()', () => {
    it('should return true for defined values', () => {
      assert.equal(true, isDefined(1))
      assert.equal(true, isDefined(0))
      assert.equal(true, isDefined({}))
      assert.equal(true, isDefined([]))
    })
    it('should return false for undefined values', () => {
      assert.equal(false, isDefined())
      assert.equal(false, isDefined({}.yo))
      assert.equal(false, isDefined([][0]))
    })
  })
})