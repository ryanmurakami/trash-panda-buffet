import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'

import Header from '../common/header'
import Footer from '../common/footer'
import TrashPanda from './components/trash-panda'
import FoodContainer from './components/food-container'
import Instructions from './components/instructions'
import GameController from '../common/game-controller'

import styles from './styles.css'

class Play extends Component {
  render () {
    const { foodItems, remainingCustomers } = this.props
    return (
      <GameController>
        <div>
          <Header />
          <div className={styles.mainContainer}>
            <FoodContainer
              foodItems={foodItems.slice(0, 8)}
            />
            <TrashPanda />
            <FoodContainer
              foodItems={foodItems.slice(8, 16)}
            />
          </div>
          <div className={styles.remainingCustomers}>
            Remaining Customers: {remainingCustomers}
          </div>
          <Instructions />
          <Footer />
        </div>
      </GameController>
    )
  }
}

Play.propTypes = {
  foodItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string
  })),
  remainingCustomers: PropTypes.number
}

const mapStateToProps = state => ({
  foodItems: get(state, 'game.foodItems'),
  remainingCustomers: get(state, 'game.remainingCustomers')
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play)
