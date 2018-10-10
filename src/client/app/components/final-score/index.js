import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { restartGame } from '../../async/game'
import Header from '../common/header'
import Results from './results'
import Save from './save'
import styles from './styles.css'

class FinalScore extends Component {
  constructor (...args) {
    super(...args)
    this.restartGame = () => {
      this.props.restartGame()
      this.props.history.push('/play')
    }
  }

  render () {
    const {
      pastCustomers,
      totalScore
    } = this.props

    return (
      <div className={styles.finalScoreContainer}>
        <Header simple />
        <Results
          pastCustomers={pastCustomers}
          totalScore={totalScore}
        />
        <Save />
        <Button
          variant='contained'
          color='primary'
          className={styles.button}
          onClick={this.restartGame}
        >
          Play Again!
        </Button>
        <Link to='/'>
          <Button
            color='primary'
            variant='contained'
          >
            Home
          </Button>
        </Link>
      </div>
    )
  }
}

FinalScore.propTypes = {
  history: PropTypes.object,
  pastCustomers: PropTypes.array,
  restartGame: PropTypes.func,
  totalScore: PropTypes.number
}

const mapStateToProps = state => ({
  pastCustomers: get(state, 'game.pastCustomers'),
  totalScore: get(state, 'game.totalScore')
})

const mapDispatchToProps = dispatch => ({
  restartGame: restartGame.bind(this, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalScore)
