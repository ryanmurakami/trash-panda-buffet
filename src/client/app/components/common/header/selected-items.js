import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { find, get } from 'lodash'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
})

class SelectedItemsTooltip extends Component {
  render () {
    const { children, classes, selectedFoodItems } = this.props
    const body = selectedFoodItems.map((sf, i) => (<div key={i}>{sf}</div>))
    return (
      <Tooltip
        title={<div><b>Selected Items:</b><br />{body}</div>}
        classes={{ tooltip: classes.lightTooltip }}
        enterDelay={200}
        leaveDelay={200}
      >
        {children}
      </Tooltip>
    )
  }
}

SelectedItemsTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  selectedFoodItems: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  const { foodItems } = state.game
  const { selectedFoodItems } = ownProps
  const transformedFoodItems = selectedFoodItems.map(sf => {
    const item = find(foodItems, { id: sf })
    return `${get(item, 'name', '<Item Not Found>')}`
  })

  return {
    children: ownProps.children,
    classes: ownProps.classes,
    selectedFoodItems: transformedFoodItems
  }
}

export default withStyles(styles)(
  connect(mapStateToProps)(SelectedItemsTooltip)
)
