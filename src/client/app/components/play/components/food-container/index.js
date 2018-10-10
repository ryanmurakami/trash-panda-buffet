import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Food from './food'
import styles from './styles.css'

class FoodContainer extends Component {
  render () {
    const { foodItems } = this.props
    return (
      <div className={styles.foodContainer}>
        {foodItems.map((food, i) =>
          <Food
            key={i}
            id={food.id}
            name={food.name}
            img={food.img}
          />
        )}
      </div>
    )
  }
}

FoodContainer.propTypes = {
  foodItems: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
  foodItems: ownProps.foodItems
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodContainer)
