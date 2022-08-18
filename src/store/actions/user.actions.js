import { userConstants } from '../../constants/constant'
import { userService } from '../services'
import eventBus from '../../EventBus'

export const userActions = {
  login,
  logout,
}

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }))

    userService.login(email, password).then(
      user => {
        dispatch(success(user))
        // history.push('/');
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error));
      }
    )
  }
  function emitLoggedInEvent(user) {
    eventBus.dispatch('userAuthenticated', { data: user })
  }

  function request(user) {
    emitLoggedInEvent(user)
    return {
      type: userConstants.LOGIN_REQUEST,
      user,
    }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}
