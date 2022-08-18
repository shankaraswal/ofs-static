/* eslint-disable no-nested-ternary */
import moment from 'moment'

export const getSessionStatus = (st, cap, res, rem) =>
  st === 'open'
    ? cap > res
      ? `${rem} Spot(s) left` // pending for i18 content
      : cap === res
      ? `No spots left` // pending for i18 content
      : ''
    : ''

/* eslint-disable no-nested-ternary */
export const getCtaLabel = (c, r) =>
  c >= r
    ? `Book` // pending for i18 content
    : r === 0
    ? `Join waitlist` // pending for i18 content
    : ''

export const getTimeFormat = time => moment(time, 'HH:mm:ss').format('hh:mm a')

export const getDateFormat = dt => moment(dt).format('dddd, MMMM D')

export const getWeeklyDateFormat = obj => {
  const sdate = obj.startDate || moment()
  // const edate = sdate + obj.days || 7
  const dateTo = moment(sdate, 'YYYY-MM-DD').add(obj.days, 'days')
  return `${moment(sdate).format('MMM D')} - ${moment(dateTo).format('MMM D, YYYY')}`
}
