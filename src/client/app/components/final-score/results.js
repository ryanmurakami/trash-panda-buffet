import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class Result extends Component {
  render () {
    const {
      customer
    } = this.props

    return (
      <div className={styles.result}>
        <div className={styles.name}>{customer.name} </div>
        <div className={styles.points}>{customer.accruedPoints} points</div>
      </div>
    )
  }
}

Result.propTypes = {
  customer: PropTypes.object
}

class Results extends Component {
  render () {
    const {
      pastCustomers,
      totalScore
    } = this.props

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.header}>
          Final Score: {totalScore} points
        </div>
        {pastCustomers.map((customer, i) =>
          <Result customer={customer} key={i} />
        )}
      </div>
    )
  }
}

Results.propTypes = {
  pastCustomers: PropTypes.array,
  totalScore: PropTypes.number
}

export default Results
