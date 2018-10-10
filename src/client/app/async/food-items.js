import axios from 'axios'
import { get } from 'lodash'

export async function fetchFoodItems (dispatch) {
  dispatch({
    type: 'FOOD_ITEMS_LOADING'
  })

  const res = await axios.get('foodItems')

  dispatch({
    type: 'FOOD_ITEMS_FETCHED',
    foodItems: get(res, 'data.foodItems')
  })
}

export async function selectFood (foodItemId, gameId, trashPandaId, dispatch) {
  await axios.post(`action?foodItemId=${foodItemId}&gameId=${gameId}&trashPandaId=${trashPandaId}`)
  dispatch({
    type: 'SELECT_FOOD',
    id: foodItemId
  })
}
