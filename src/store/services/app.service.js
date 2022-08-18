import { widgetSettingJson } from '../../constants/constant'
import { createAccessID } from '../../utils'

import { get } from './requests'

export const appService = {
  getWidgetSettings,
}

function getWidgetSettings(widgetID) {
  const config = {
    removeTrailingSlash: true,
    emptyBaseURL: true,
  }

  return get(`${widgetSettingJson}`, config).then(res => {
    return filterResponse(res, widgetID)
  })
}

function filterResponse(response, widgetID) {
  let res
  if (response && response.length > 0) {
    res = response.filter(x => x.widgetID === widgetID)[0]
  }
  if (res.corporateID && res.corporateID !== '') {
    res.corporateID = createAccessID(res.corporateID)
  }
  return res
}
