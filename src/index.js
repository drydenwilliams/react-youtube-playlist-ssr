import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import AppContainer from './containers/AppContainer/AppContainer'

import './index.scss'

// Load in the state from the server
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

hydrate(<AppContainer {...preloadedState} /> ,document.getElementById('root'))
