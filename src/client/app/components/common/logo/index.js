import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class Logo extends Component {
  render () {
    const { size = 'big' } = this.props

    return (
      <img
        className={styles[`logo-${size}`]}
        src={`${window.cfDomain}/assets/images/logo.png`}
      />
    )
  }
}

Logo.propTypes = {
  size: PropTypes.oneOf(['big', 'small'])
}

export default Logo
