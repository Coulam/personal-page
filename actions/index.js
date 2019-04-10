// ACTIONS
export const serverRenderClock = isServer => dispatch => {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
  }
  
  export const startClock = () => dispatch => {
    return setInterval(
      () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
      1000
    )
  }
  
  export const addCount = () => dispatch => {
    return dispatch({ type: actionTypes.ADD })
  }
  
  export const initStore = (initialState = exampleInitialState) => {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }