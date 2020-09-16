import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  notification : notificationReducer
})

const store = createStore(reducer)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  <div/>,
  document.getElementById('root')
)
