const isSurviving = score => score > 1 && score < 4

const isDying = score => score < 2

const isOvercrowded = score => score > 3

const isReproducing = score => score === 3

const isDefined = value => typeof value !== 'undefined'

module.exports = {
  isSurviving: isSurviving,
  isDying: isDying,
  isOvercrowded: isOvercrowded,
  isReproducing: isReproducing,
  isDefined: isDefined,
}