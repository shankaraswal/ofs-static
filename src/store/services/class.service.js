import { endPoints, apiUrl } from '../../constants/constant'

import { get } from './requests'

export const classService = {
  getSessions,
  getSessionsDetails,
  getInstructorProfile,
  getTrainerList,
}

function getSessions(appSettings, sDate, eData) {
  const config = {
    removeTrailingSlash: true,
    emptyBaseURL: false,
    headers: {
      accessID: appSettings.corporateID,
    },
    queryParams: {
      startDate: sDate,
      endDate: eData,
      sessionCategory: appSettings.widgetVariation,
      siteID: appSettings.siteID,
    },
    data: {},
  }

  return get(`${endPoints.classes.GET_SESSIONS}`, config, {}, `${apiUrl}`).then(res => {
    return res
  })
}
function getSessionsDetails(appSettings, sID, sDate) {
  const config = {
    removeTrailingSlash: true,
    emptyBaseURL: false,
    headers: {
      accessID: appSettings.corporateID,
    },
    queryParams: {
      sessionID: sID,
      sessionDate: sDate,
      siteID: appSettings.siteID,
    },
    data: {},
  }

  return get(`${endPoints.classes.GET_SESSIONS_DETAILS}`, config, {}, `${apiUrl}`).then(res => {
    return res
  })
}
function getInstructorProfile(appSettings, instructorID) {
  const config = {
    removeTrailingSlash: true,
    emptyBaseURL: false,
    headers: {
      accessID: appSettings.corporateID,
    },
    queryParams: {
      instructorID,
      siteID: appSettings.siteID,
    },
    data: {},
  }

  return get(`${endPoints.classes.GET_INSTRUCTOR_PROFILE}`, config, {}, `${apiUrl}`).then(res => {
    return res
  })
}
function getTrainerList(appSettings) {
  const config = {
    removeTrailingSlash: true,
    emptyBaseURL: false,
    headers: {
      accessID: appSettings.corporateID,
    },
    queryParams: {
      siteID: appSettings.siteID,
    },
    data: {},
  }

  return get(`${endPoints.classes.GET_TRAINERS}`, config, {}, `${apiUrl}`).then(res => {
    return res
  })
}
