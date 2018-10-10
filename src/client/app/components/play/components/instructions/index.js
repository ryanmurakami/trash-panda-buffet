import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import styles from './styles.css'

export default class extends Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <div>
        <Button
          className={styles.button}
          color='primary'
          onClick={this.handleClickOpen}
          variant='contained'
        >
          How to Play
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>
            How to play Trash Panda Buffet
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Give the Trash Panda what it wants... food!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary' autoFocus>
              Finished
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
