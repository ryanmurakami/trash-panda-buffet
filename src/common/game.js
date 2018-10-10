const { isEmpty } = require('lodash')

const HATE_POINTS = -10
const LIKE_POINTS = 5
const LOVE_POINTS = 10

function calculatePoints (customer, foodId) {
  if (customer.prefs.HATE.includes(foodId)) return HATE_POINTS
  if (customer.prefs.LOVE.includes(foodId)) return LOVE_POINTS
  return LIKE_POINTS
}

function backupCustomers (current, past = [], selectedFoodItems) {
  if (isEmpty(current)) return past
  const newPast = [...past]
  newPast.push(Object.assign({}, current, {
    selectedFoodItems
  }))
  return newPast
}

module.exports = {
  backupCustomers,
  calculatePoints
}
