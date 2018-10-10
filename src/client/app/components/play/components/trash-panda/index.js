import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles.css'

class TrashPanda extends Component {
  render () {
    const {
      currentCustomer,
      loading,
      remainingItems
    } = this.props

    return (
      <div className={styles.pandaContainer}>
        {!loading &&
          <div>
            <div className={styles.remainingCounter}>
              {remainingItems}
            </div>
            <img
              className={styles.pandaImage}
              src={`${window.cfDomain}/assets/images/${currentCustomer.img}`}
            />
          </div>
        }
        {loading &&
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        }
      </div>
    )
  }
}

TrashPanda.propTypes = {
  currentCustomer: PropTypes.object,
  loading: PropTypes.bool,
  remainingItems: PropTypes.number
}

const mapStateToProps = state => {
  return {
    currentCustomer: get(state, 'game.currentCustomer'),
    loading: get(state, 'game.loading.customer') ||
      get(state, 'game.loading.foodItems'),
    remainingItems: get(state, 'game.currentCustomer.remainingItems', 0)
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrashPanda)
