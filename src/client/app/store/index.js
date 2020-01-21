import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (history) =>
  createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )

export const initialState = {
  game: {
    completed: false,
    currentCustomer: {},
    foodItems: [],
    loading: {},
    name: '',
    pastCustomers: [],
    recorded: false,
    remainingCustomers: 5,
    selectedFoodItems: [],
    scores: {},
    totalScore: 0
  }
}
