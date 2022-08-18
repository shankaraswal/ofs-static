import { appService } from '../services'
import { siteSettingConstants } from '../../constants/constant'

export const appActions = {
  getWidgetSettings,
}
function getWidgetSettings(widgetID) {
  return dispatch => {
    dispatch(request({}))

    appService.getWidgetSettings(widgetID).then(
      data => {
        dispatch(success(data))
        // history.push("/");
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error));
      }
    )
  }
  function request(data) {
    return { type: siteSettingConstants.GET_SETTINGS_REQUEST, data }
  }
  function success(data) {
    return { type: siteSettingConstants.GET_SETTINGS_SUCCESS, data }
  }
  function failure(error) {
    return { type: siteSettingConstants.GET_SETTINGS_FAILURE, error }
  }
}
