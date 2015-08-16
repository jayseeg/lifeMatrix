const assert = require('assert')

// local modules
const helloWorld = require('../src/helloWorld')

describe('index.js', () => {
  describe('#helloWorld()', () => {
    it('should output "Howdy Bif" when supplied "Bif" as first argument', () => {
      assert.equal('Howdy Bif', helloWorld('Bif'))
    })
  })
})