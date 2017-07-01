import 'jquery'
import 'Umi/dist/js/bootstrap'
import '../app-style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import YamalogContainer from './containers/Yamalog'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <YamalogContainer />
  </Provider>,
  document.getElementById("app")
)
