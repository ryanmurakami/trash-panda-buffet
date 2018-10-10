import axios from 'axios'
import { get } from 'lodash'

import { fetchFoodItems } from './food-items'
import { getNewCustomer } from './trash-panda'

export async function fetchScores (dispatch) {
  dispatch({
    type: 'GAME_SCORES_LOADING'
  })

  try {
    const res = await axios.get('scores')
    dispatch({
      type: 'GAME_SCORES_FETCHED',
      scores: get(res, 'data.scores')
    })
  } catch (err) {
    console.error('Error fetching game scores', err)
    dispatch({
      type: 'GAME_ERROR'
    })
  }
}

export function initializeGame (dispatch) {
  fetchFoodItems(dispatch)
  getNewCustomer(dispatch)
  fetchGameId(dispatch)
}

export async function recordGame (dispatch, score, name, id) {
  dispatch({
    type: 'GAME_RECORDING'
  })
  try {
    await axios.put(`game/${id}?score=${score}&name=${name}`)
    dispatch({
      type: 'GAME_RECORDED'
    })
  } catch (err) {
    console.error('Error recording game')
    dispatch({
      type: 'GAME_ERROR'
    })
  }
}

export function restartGame (dispatch) {
  cleanGameState(dispatch)
}

async function fetchGameId (dispatch) {
  try {
    const res = await axios.post('game')
    dispatch({
      type: 'GAME_ID_FETCHED',
      id: get(res, 'data.id')
    })
  } catch (err) {
    console.error('Error fetching game id', err)
    dispatch({
      type: 'GAME_ERROR'
    })
  }
}

export function cleanGameState (dispatch) {
  dispatch({
    type: 'CLEAN_GAME_STATE'
  })
}
