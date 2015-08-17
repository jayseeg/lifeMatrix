'use strict'

// args
const args = process.argv.slice(2)

// local modules
const gamePlay = require('./gamePlay').gamePlay

module.export = console.log(gamePlay(JSON.parse(args[0]), args[1]))