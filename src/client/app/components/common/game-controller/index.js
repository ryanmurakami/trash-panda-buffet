import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Redirect } from 'react-router'

import { initializeGame } from '../../../async/game'
import { getNewCustomer } from '../../../async/trash-panda'

class GameController extends Component {
  constructor (...args) {
    super(...args)
    this.props.initialize()
  }

  componentDidUpdate () {
    const {
      completeGame,
      gameCompleted,
      getNewCustomer,
      loading,
      remainingCustomers,
      remainingItems,
      used
    } = this.props

    if (!gameCompleted &&
      remainingItems <= 0 &&
      remainingCustomers === 0
    ) {
      completeGame()
    } else if (!loading &&
      remainingItems <= 0
    ) getNewCustomer(used)
  }

  render () {
    if (this.props.gameCompleted) return <Redirect to='/final-score' />
    return this.props.children
  }
}

GameController.propTypes = {
  children: PropTypes.element.isRequired,
  completeGame: PropTypes.func,
  gameCompleted: PropTypes.bool,
  getNewCustomer: PropTypes.func,
  initialize: PropTypes.func,
  loading: PropTypes.bool,
  remainingCustomers: PropTypes.number,
  remainingItems: PropTypes.number,
  used: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  const currentCustomer = get(state, 'game.currentCustomer')
  const used = get(state, 'game.pastCustomers', []).map(customer => customer.id)

  if (currentCustomer) used.push(currentCustomer.id)

  return {
    children: get(ownProps, 'children'),
    gameCompleted: get(state, 'game.completed'),
    loading: get(state, 'game.loading.customer') ||
      get(state, 'game.loading.foodItems'),
    remainingCustomers: get(state, 'game.remainingCustomers'),
    remainingItems: get(state, 'game.currentCustomer.remainingItems', 0),
    used
  }
}

const mapDispatchToProps = dispatch => ({
  completeGame: () => dispatch({
    type: 'GAME_COMPLETE'
  }),
  getNewCustomer: getNewCustomer.bind(this, dispatch),
  initialize: initializeGame.bind(this, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameController)
