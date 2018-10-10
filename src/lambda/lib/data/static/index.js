const { pick } = require('lodash')

module.exports.foodItems = [
  { id: 1, name: 'Headphones', img: 'headphones.png' },
  { id: 2, name: 'Water Bottle', img: 'waterbottle.png' },
  { id: 3, name: 'Apple Core', img: 'applecore.png' },
  { id: 4, name: 'Machine Screw', img: 'machinescrew.png' },
  { id: 5, name: 'Used Q-tip', img: 'usedqtip.png' },
  { id: 6, name: 'Kleenex', img: 'kleenex.png' },
  { id: 7, name: 'Tinfoil', img: 'tinfoil.png' },
  { id: 8, name: 'Pizza Crust', img: 'pizzacrust.png' },
  { id: 9, name: 'Old Newspaper', img: 'oldnewspaper.png' },
  { id: 10, name: 'Shoe String', img: 'shoestring.png' },
  { id: 11, name: 'Hairball', img: 'hairball.png' },
  { id: 12, name: 'Compostable Straw', img: 'compostablestraw.png' },
  { id: 13, name: 'CFL Bulb', img: 'cflbulb.png' },
  { id: 14, name: 'Banana Peel', img: 'bananapeel.png' },
  { id: 15, name: 'Toilet Paper Roll', img: 'toiletpaperroll.png' },
  { id: 16, name: 'Broccoli', img: 'broccoli.png' }
]

const trashPandas = [
  {
    id: 1,
    img: 'georgemichael.png',
    name: 'George Michael',
    prefs: {
      HATE: [1, 4, 7, 10, 13, 16],
      LIKE: [2, 5, 8, 11, 14],
      LOVE: [3, 6, 9, 12, 15]
    }
  }, {
    id: 2,
    name: 'Maeby',
    img: 'maeby.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }, {
    id: 3,
    name: 'Oscar',
    img: 'oscar.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }, {
    id: 4,
    name: 'Tobias',
    img: 'tobias.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }, {
    id: 5,
    name: 'Lucille',
    img: 'lucille.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }, {
    id: 6,
    name: 'Gene',
    img: 'gene.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }, {
    id: 7,
    name: 'Rita',
    img: 'rita.png',
    prefs: {
      HATE: [3, 6, 9, 12, 15],
      LIKE: [1, 4, 7, 10, 13, 16],
      LOVE: [2, 5, 8, 11, 14]
    }
  }
]

module.exports.trashPandas = trashPandas.map(tp => pick(tp, ['id', 'img', 'name']))

const prefs = []

for (const tp of trashPandas) {
  for (const key in tp.prefs) {
    for (const pref of tp.prefs[key]) {
      prefs.push({
        trashPandaId: tp.id,
        foodId: pref,
        pref: key
      })
    }
  }
}

module.exports.trashPandaPrefs = prefs
