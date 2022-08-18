import { classService } from '../services'
import { classConstants, FETCH_NEXTPREV_RECORDS } from '../../constants/constant'

export const classActions = {
  getSessions,
  getSessionsDetails,
  getInstructorProfile,
  getTrainerList,
}
function getSessions(appSettings, sDate, eDate) {
  return dispatch => {
    dispatch(request(appSettings, sDate, eDate))

    classService.getSessions(appSettings, sDate, eDate).then(
      data => {
        dispatch(success(data))
        // history.push("/")
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error))
      }
    )
  }

  function request(data) {
    return { type: classConstants.GET_SESSIONS_REQUEST, data }
  }
  function success(data) {
    return { type: classConstants.GET_SESSIONS_SUCCESS, data }
  }
  function failure(error) {
    return { type: classConstants.GET_SESSIONS_FAILURE, error }
  }
}

function getSessionsDetails(appSettings, sID, sDate) {
  return dispatch => {
    dispatch(request(appSettings, sID, sDate))

    classService.getSessionsDetails(appSettings, sID, sDate).then(
      data => {
        dispatch(success(data))
        // history.push("/")
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error))
      }
    )
  }

  function request(data) {
    return { type: classConstants.GET_SESSIONS_DETAILS_REQUEST, data }
  }
  function success(data) {
    return { type: classConstants.GET_SESSIONS_DETAILS_SUCCESS, data }
  }
  function failure(error) {
    return { type: classConstants.GET_SESSIONS_DETAILS_FAILURE, error }
  }
}
function getInstructorProfile(appSettings, instructorID) {
  return dispatch => {
    dispatch(request(appSettings, instructorID))

    classService.getInstructorProfile(appSettings, instructorID).then(
      data => {
        dispatch(success(data))
        // history.push("/")
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error))
      }
    )
  }

  function request(data) {
    return { type: classConstants.GET_INSTRUCTOR_REQUEST, data }
  }
  function success(data) {
    return { type: classConstants.GET_INSTRUCTOR_SUCCESS, data }
  }
  function failure(error) {
    return { type: classConstants.GET_INSTRUCTOR_FAILURE, error }
  }
}
function getTrainerList(appSettings) {
  return dispatch => {
    dispatch(request(appSettings))

    classService.getTrainerList(appSettings).then(
      data => {
        dispatch(success(data))
        // history.push("/")
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error))
      }
    )
  }

  function request(data) {
    return { type: classConstants.GET_TRAINER_LIST_REQUEST, data }
  }
  function success(data) {
    return { type: classConstants.GET_TRAINER_LIST_SUCCESS, data }
  }
  function failure(error) {
    return { type: classConstants.GET_TRAINER_LIST_FAILURE, error }
  }
}

export const fetchNextPrefRecords = obj => {
  return {
    type: FETCH_NEXTPREV_RECORDS,
    obj,
  }
}
