import { combineReducers } from 'redux'

import error from './error/reducer'
import loading from './loading/reducer'

const rootReducer = combineReducers({
  error,
  loading,
})

export default rootReducer
