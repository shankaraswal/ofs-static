export const apiUrl = 'https://newdemo.onefitstop.com/v2'
export const widgetSettingJson = 'widget_setting.json'
export const byPassToken = 'OfSByP@ssTokenForW|d6!T'
export const endPoints = {
  masters: {
    GET_COUNTRY_LIST: '/site/countries',
    GET_STATE_LIST: '/site/states',
  },
  classes: {
    GET_SESSIONS: '/site/sessions',
    GET_SESSIONS_DETAILS: '/site/sessionsDetails',
    GET_INSTRUCTOR_PROFILE: '/site/instructorProfile',
    GET_TRAINERS: '/site/instructor',
    GET_SITES_AFTER_LOGIN: '/client/site',
  },
  packages: {
    GET_PACKAGES: '/site/packages',
  },
  giftCards: {
    GET_GIFT_CARDS: 'site/giftCards',
  },
  LOGIN: '/auth/login',
  REFRESH_TOKEN: '/auth/refreshToken',
  SIGNUP: '/auth/signup',
  SIGNUP_POST_PROPORTIES: '/site/updateProperties',
  PAYMENT_CHEKOUT: 'payments/checkout',
}
export const widgetConfig = {
  WIDGET_SCRIPT_ID: 'ofs-embed-widget',
  WIDGET_VARIATION_CLASSES: 'classes',
  WIDGET_VARIATION_WORKSHOP: 'workshop',
}
export const userConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  LOGOUT: 'USERS_LOGOUT',
}
export const classConstants = {
  GET_SESSIONS_REQUEST: 'GET_SESSIONS_REQUEST',
  GET_SESSIONS_SUCCESS: 'GET_SESSIONS_SUCCESS',
  GET_SESSIONS_FAILURE: 'GET_SESSIONS_FAILURE',
  GET_SESSIONS_DETAILS_REQUEST: 'GET_SESSIONS_DETAILS_REQUEST',
  GET_SESSIONS_DETAILS_SUCCESS: 'GET_SESSIONS_DETAILS_SUCCESS',
  GET_SESSIONS_DETAILS_FAILURE: 'GET_SESSIONS_DETAILS_FAILURE',
  GET_INSTRUCTOR_REQUEST: 'GET_INSTRUCTOR_REQUEST',
  GET_INSTRUCTOR_SUCCESS: 'GET_INSTRUCTOR_SUCCESS',
  GET_INSTRUCTOR_FAILURE: 'GET_INSTRUCTOR_FAILURE',
  GET_TRAINER_LIST_REQUEST: 'GET_TRAINER_LIST_REQUEST',
  GET_TRAINER_LIST_SUCCESS: 'GET_TRAINER_LIST_SUCCESS',
  GET_TRAINER_LIST_FAILURE: 'GET_TRAINER_LIST_FAILURE',
}
export const siteSettingConstants = {
  GET_SETTINGS_REQUEST: 'GET_SETTINGS_REQUEST',
  GET_SETTINGS_SUCCESS: 'GET_SETTINGS_SUCCESS',
  GET_SETTINGS_FAILURE: 'GET_SETTINGS_FAILURE',
}
export const GET_SESSIONS = 'GET_SESSIONS'
export const SESSIONS_ERROR = 'SESSIONS_ERROR'
export const GET_SETTINGS = 'GET_SETTINGS'
export const SETTINGS_ERROR = 'SETTINGS_ERROR'

export const FETCH_NEXTPREV_RECORDS = 'FETCH_NEXTPREV_RECORDS'
