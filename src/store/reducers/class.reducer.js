import { classConstants } from '../../constants/constant'

const initialState = {
  sessionList: [],
  sessionDetail: {},
  instructorProfile: {},
  trainerList: [],
  loading: true,
}

export function classes(state = initialState, action) {
  switch (action.type) {
    case classConstants.GET_SESSIONS_REQUEST:
      return {
        ...state,
        loading: true,
        sessionList: action.data,
      }
    case classConstants.GET_SESSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionList: action.data,
      }
    case classConstants.GET_SESSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        sessionList: action.error,
      }
    case classConstants.GET_SESSIONS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        sessionDetail: action.data,
      }
    case classConstants.GET_SESSIONS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionDetail: action.data,
      }
    case classConstants.GET_SESSIONS_DETAILS_FAILURE:
      return {
        loading: false,
        ...state,
        sessionDetail: action.error,
      }
    case classConstants.GET_INSTRUCTOR_REQUEST:
      return {
        ...state,
        loading: true,
        instructorProfile: action.data,
      }
    case classConstants.GET_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        instructorProfile: action.data,
      }
    case classConstants.GET_INSTRUCTOR_FAILURE:
      return {
        ...state,
        loading: false,
        instructorProfile: action.error,
      }
    case classConstants.GET_TRAINER_LIST_REQUEST:
      return {
        loading: true,
        trainerList: action.data,
      }
    case classConstants.GET_TRAINER_LIST_SUCCESS:
      return {
        loading: false,
        trainerList: action.data,
      }
    case classConstants.GET_TRAINER_LIST_FAILURE:
      return {
        loading: false,
        trainerList: action.error,
      }
    default:
      return state
  }
}
