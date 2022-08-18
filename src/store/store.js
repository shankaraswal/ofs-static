import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line import/no-extraneous-dependencies

import errorMiddleware from '_middlewares/error'

import rootReducer from './reducers'

const configureStore = preloadedState => {
  const middlewares = [thunk, errorMiddleware, promise]
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares, logger))
    )
  }
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
}

export default configureStore
