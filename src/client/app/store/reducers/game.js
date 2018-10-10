import {
  backupCustomers,
  calculatePoints
} from '../../../../common/game'
import { initialState } from '../'

export default (state = {}, action) => {
  switch (action.type) {
    case 'CLEAN_GAME_STATE':
      return Object.assign({}, state, initialState.game)
    case 'CUSTOMER_FETCHED':
      return Object.assign({}, state, {
        currentCustomer: action.customer,
        loading: Object.assign({}, state.loading, {
          customer: false
        }),
        pastCustomers: backupCustomers(
          state.currentCustomer,
          state.pastCustomers,
          state.selectedFoodItems
        ),
        remainingCustomers: state.remainingCustomers - 1,
        selectedFoodItems: []
      })
    case 'CUSTOMER_FETCHING':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          customer: true
        })
      })
    case 'FOOD_ITEMS_FETCHED':
      return Object.assign({}, state, {
        foodItems: action.foodItems,
        loading: Object.assign({}, state.loading, {
          foodItems: false
        })
      })
    case 'FOOD_ITEMS_LOADING':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          foodItems: true
        })
      })
    case 'GAME_COMPLETE':
      return Object.assign({}, state, {
        completed: true,
        currentCustomer: null,
        pastCustomers: backupCustomers(
          state.currentCustomer,
          state.pastCustomers,
          state.selectedFoodItems
        )
      })
    case 'GAME_ID_FETCHED':
      return Object.assign({}, state, {
        id: action.id
      })
    case 'GAME_RECORDING':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          recording: true
        })
      })
    case 'GAME_RECORDED':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          recording: false
        }),
        recorded: true
      })
    case 'GAME_SCORES_LOADING':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          scores: true
        })
      })
    case 'GAME_SCORES_FETCHED':
      return Object.assign({}, state, {
        loading: Object.assign({}, state.loading, {
          scores: false
        }),
        scores: {
          scores: action.scores
        }
      })
    case 'NAME_UPDATED':
      return Object.assign({}, state, {
        name: action.name
      })
    case 'SELECT_FOOD':
      const selectedFoodItems = [...state.selectedFoodItems]
      const newPoints = calculatePoints(state.currentCustomer, action.id)
      const remainingItems = state.currentCustomer.remainingItems - 1

      selectedFoodItems.push(action.id)

      return Object.assign({}, state, {
        currentCustomer: Object.assign({}, state.currentCustomer, {
          accruedPoints: state.currentCustomer.accruedPoints + newPoints,
          remainingItems
        }),
        selectedFoodItems,
        totalScore: state.totalScore + newPoints
      })
    default:
      return state
  }
}
