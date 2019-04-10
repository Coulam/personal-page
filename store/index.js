import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

/* to do - import actions and reducers here */ 

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
}
