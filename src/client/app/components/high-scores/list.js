import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles.css'

class Score extends Component {
  render () {
    const {
      name,
      score
    } = this.props

    return (
      <div className={styles.result}>
        <div className={styles.name}>{name}</div>
        <div className={styles.points}>{score} points</div>
      </div>
    )
  }
}

Score.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number
}

class List extends Component {
  render () {
    const {
      loading,
      scores
    } = this.props

    return (
      <div className={styles.listContainer}>
        {loading && <CircularProgress />}
        {!loading &&
          <div>
            <div className={styles.header}>
              High Scores
            </div>
            {scores.map((score, i) =>
              <Score key={i} name={score.name} score={score.score} />
            )}
          </div>
        }
      </div>
    )
  }
}

List.propTypes = {
  loading: PropTypes.bool,
  scores: PropTypes.array
}

export default List
