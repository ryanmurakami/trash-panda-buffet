import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import Button from '@material-ui/core/Button'

import { fetchScores } from '../../async/game'
import Header from '../common/header'
import List from './list'
import styles from './styles.css'

class FinalScore extends Component {
  componentDidMount () {
    const { fetchScores } = this.props
    fetchScores()
  }

  render () {
    const {
      loading,
      scores
    } = this.props

    return (
      <div>
        <Header simple />
        <List
          loading={loading}
          scores={scores}
        />
        <Link to='/'>
          <Button
            variant='contained'
            color='primary'
            className={styles.button}
            onClick={this.restartGame}
          >
            Go Back
          </Button>
        </Link>
      </div>
    )
  }
}

FinalScore.propTypes = {
  fetchScores: PropTypes.func,
  loading: PropTypes.bool,
  scores: PropTypes.array
}

const mapStateToProps = state => ({
  loading: get(state, 'game.loading.scores'),
  scores: get(state, 'game.scores.scores', []).filter(s => s.name)
})

const mapDispatchToProps = dispatch => ({
  fetchScores: fetchScores.bind(this, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalScore)
