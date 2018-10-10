import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { get } from 'lodash'

import styles from './styles.css'
import { recordGame } from '../../async/game'

class Save extends Component {
  render () {
    const {
      gameId,
      gameRecorded,
      handleChange,
      loading,
      name,
      recordGame,
      score
    } = this.props

    return (
      <div className={styles.saveContainer}>
        {gameRecorded &&
          <div className={styles.savedMessage}>
            Game Score Saved!
          </div>
        }
        {!gameRecorded &&
          <div>
            <TextField
              id='name'
              label='Name'
              className={styles.textField}
              value={name}
              onChange={handleChange}
              margin='normal'
            />
            <div className={styles.saveButtonWrapper}>
              <Button
                variant='contained'
                color='primary'
                className={styles.button}
                disabled={loading}
                onClick={recordGame.bind(this, score, name, gameId)}
              >
                Save Score
              </Button>
              {loading &&
                <CircularProgress size={24} className={styles.buttonProgress} />
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

Save.propTypes = {
  gameId: PropTypes.string,
  gameRecorded: PropTypes.bool,
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string,
  recordGame: PropTypes.func,
  score: PropTypes.number
}

const mapStateToProps = state => ({
  gameId: get(state, 'game.id', ''),
  gameRecorded: get(state, 'game.recorded'),
  loading: get(state, 'game.loading.recording'),
  name: get(state, 'game.name', ''),
  score: get(state, 'game.totalScore', 0)
})

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch({
    type: 'NAME_UPDATED',
    name: get(e, 'target.value')
  }),
  recordGame: recordGame.bind(this, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save)
