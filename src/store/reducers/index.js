import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { classes } from './class.reducer'
import { appSetting } from './app.reducer'
import error from './error.reducer'
import loading from './loading.reducer'

const rootReducer = combineReducers({
  authentication,
  classes,
  appSetting,
  error,
  loading,
})

export default rootReducer
