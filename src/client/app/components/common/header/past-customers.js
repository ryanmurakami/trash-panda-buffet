import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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

class PastCustomersTooltip extends Component {
  render () {
    const { children, classes, pastCustomers } = this.props
    const body = pastCustomers.map((pc, i) => (
      <div key={i}>{pc.name}: {pc.accruedPoints} points</div>
    ))
    return (
      <Tooltip
        title={<div><b>Past Customers:</b><br />{body}</div>}
        classes={{ tooltip: classes.lightTooltip }}
        enterDelay={200}
        leaveDelay={200}
      >
        {children}
      </Tooltip>
    )
  }
}

PastCustomersTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  pastCustomers: PropTypes.array
}

const mapStateToProps = (_, ownProps) => ({
  children: ownProps.children,
  classes: ownProps.classes,
  pastCustomers: ownProps.pastCustomers
})

export default withStyles(styles)(
  connect(mapStateToProps)(PastCustomersTooltip)
)
