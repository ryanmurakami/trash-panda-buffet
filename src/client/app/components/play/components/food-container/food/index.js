import React, { Component } from 'react'
import { get, noop } from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.css'
import { selectFood } from '../../../../../async/food-items'

class Food extends Component {
  render () {
    const {
      disabled,
      gameId,
      id,
      img,
      name,
      onClick,
      trashPandaId
    } = this.props
    this.onClick = disabled ? noop : onClick.bind(this, id, gameId, trashPandaId)
    return (
      <div
        className={`${styles.food} ${disabled ? styles.disabled : ''}`}
        onClick={this.onClick}
      >
        <img src={`${window.cfDomain}/assets/images/${img}`} />
        <span>{name}</span>
      </div>
    )
  }
}

Food.propTypes = {
  disabled: PropTypes.bool,
  gameId: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  trashPandaId: PropTypes.number
}

const mapStateToProps = (state, ownProps) => ({
  disabled: get(state, 'game.selectedFoodItems', []).includes(ownProps.id),
  gameId: get(state, 'game.id'),
  id: get(ownProps, 'id'),
  img: get(ownProps, 'img'),
  name: get(ownProps, 'name'),
  trashPandaId: get(state, 'game.currentCustomer.id')
})

const mapDispatchToProps = dispatch => ({
  onClick: (id, gameId, trashPandaId) =>
    selectFood(id, gameId, trashPandaId, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Food)
