import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import Footer from '../common/footer'
import Logo from '../common/logo'
import { cleanGameState } from '../../async/game'

import styles from './styles.css'

class Main extends Component {
  constructor (...args) {
    super(...args)
    this.props.cleanGameState()
  }

  render () {
    return (
      <div className={styles.main}>
        <div>
          <Logo size='big' />
        </div>
        <div className={styles.buttons}>
          <Link to='/play'>
            <Button
              className={styles.playButton}
              color='primary'
              variant='contained'
            >
              Play!
            </Button>
          </Link>
          <Link to='/high-scores'>
            <Button
              className={styles.playButton}
              color='primary'
              variant='contained'
            >
              High Scores
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

Main.propTypes = {
  cleanGameState: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  cleanGameState: cleanGameState.bind(this, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Main)
