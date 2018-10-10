import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'

import Logo from '../logo'
import PastCustomersTooltip from './past-customers'
import SelectedItemsTooltip from './selected-items'
import styles from './styles.css'

class Header extends Component {
  render () {
    const {
      customerName,
      pastCustomers,
      selectedFoodItems,
      simple,
      totalScore
    } = this.props

    return (
      <div className={styles.header}>
        {!simple &&
          <div className={styles.leftBar}>
            <PastCustomersTooltip
              pastCustomers={pastCustomers}
            >
              <div>
                <span className={styles.text}>Current Customer:</span>
                <span className={styles.value}>{customerName}</span>
              </div>
            </PastCustomersTooltip>
          </div>
        }
        <Logo size='small' />
        {!simple &&
          <div className={styles.rightBar}>
            <SelectedItemsTooltip
              selectedFoodItems={selectedFoodItems}
            >
              <div>
                <span className={styles.text}>Total Score:</span>
                <span className={styles.value}>{totalScore}</span>
              </div>
            </SelectedItemsTooltip>
          </div>
        }
      </div>
    )
  }
}

Header.propTypes = {
  customerName: PropTypes.string,
  pastCustomers: PropTypes.array,
  selectedFoodItems: PropTypes.array,
  simple: PropTypes.bool,
  totalScore: PropTypes.number
}

const mapStateToProps = (state, ownProps) => ({
  customerName: get(state, 'game.currentCustomer.name', 'Loading...'),
  pastCustomers: get(state, 'game.pastCustomers'),
  selectedFoodItems: get(state, 'game.selectedFoodItems'),
  simple: get(ownProps, 'simple'),
  totalScore: get(state, 'game.totalScore')
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
