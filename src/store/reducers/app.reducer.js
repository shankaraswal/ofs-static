import { siteSettingConstants } from '../../constants/constant'

const initialState = {
  widgetSettingData: {},
  loading: true,
}
export function appSetting(state = initialState, action) {
  switch (action.type) {
    case siteSettingConstants.GET_SETTINGS_REQUEST:
      return {
        loading: true,
        widgetSettingData: action.data,
      }
    case siteSettingConstants.GET_SETTINGS_SUCCESS:
      return {
        loading: false,
        widgetSettingData: action.data,
      }
    case siteSettingConstants.GET_SETTINGS_FAILURE:
      return {
        loading: false,
        widgetSettingData: action.error,
      }

    default:
      return state
  }
}
