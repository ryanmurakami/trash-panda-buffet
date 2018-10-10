import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import { createHashHistory } from 'history'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Main from './components/main'
import Play from './components/play'
import FinalScore from './components/final-score'
import HighScores from './components/high-scores'

import createStore from './store'

import './styles.css'
import theme from './theme'

const history = createHashHistory()
const store = createStore(history)

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>
            <div>
              <Route exact path='/' component={Main} />
              <Route path='/play' component={Play} />
              <Route path='/final-score' component={FinalScore} />
              <Route path='/high-scores' component={HighScores} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}
