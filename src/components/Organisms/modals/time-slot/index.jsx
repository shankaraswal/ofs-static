/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useContext, useMemo, useState } from 'react'
import classnames from 'classnames'
import { add, eachDayOfInterval, format, isEqual, startOfWeek } from 'date-fns'
import PropTypes from 'prop-types'
import {
  DialogActions,
  DialogContent,
  Divider,
  Button as MaterialButton,
  Grid,
  Link,
  Typography,
  IconButton,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { ArrowBackIos, ChevronLeft, ChevronRight } from '@material-ui/icons'

import Button from '_components/Atoms/Buttons/button'
import ModalContext from '_components/Organisms/modals/context'
import Dialog from '_components/Atoms/dialog'
import Selectable from '_components/Organisms/modals/time-slot/selectable'
import { MODAL_TYPES } from '_components/Organisms/modals/constants'

import useStyles from './styles'

const slots = [
  { sessionTime: '09:00 am' },
  { sessionTime: '09:30 am' },
  { sessionTime: '10:00 am' },
  { sessionTime: '10:30 am' },
  { sessionTime: '11:00 am' },
  { sessionTime: '11:30 am' },
  { sessionTime: '12:00 pm' },
  { sessionTime: '12:30 pm' },
  { sessionTime: '01:00 pm' },
  { sessionTime: '01:30 pm' },
  { sessionTime: '02:00 pm' },
  { sessionTime: '02:30 pm' },
  { sessionTime: '03:00 pm' },
  { sessionTime: '03:30 pm' },
]

const availableSlots = [
  { sessionTime: '09:00 am' },
  { sessionTime: '11:00 am' },
  { sessionTime: '01:00 pm' },
  { sessionTime: '02:00 pm' },
  { sessionTime: '03:00 pm' },
]

const TimeSlotModal = ({ open, onClose }) => {
  const context = useContext(ModalContext)

  const { t } = useTranslation(['common', 'privates'])
  const styles = useStyles()

  const [selected, setSelected] = useState()
  const [selectedSlot, setSelectedSlot] = useState()
  const [firstWeekDay, setFirstWeekDay] = useState(startOfWeek(new Date()))

  const week = useMemo(
    () =>
      eachDayOfInterval({
        start: firstWeekDay,
        end: add(firstWeekDay, { days: 6 }),
      }),
    [firstWeekDay]
  )

  const changeWeek = useCallback(
    direction => () => {
      setFirstWeekDay(previous => add(previous, { days: 7 * Math.sign(direction) }))
    },
    []
  )

  const handleSelect = useCallback(
    value => () => {
      setSelected(value)
    },
    []
  )

  const dayNumberStyle = useCallback(
    day => ({
      [styles.weekDayDisabled]: isEqual(firstWeekDay, day),
      [styles.dayNumberSelected]: isEqual(selected, day),
    }),
    [firstWeekDay, selected, styles.dayNumberSelected, styles.weekDayDisabled]
  )

  const dayLabelStyle = useCallback(
    day => ({
      [styles.weekDayDisabled]: isEqual(firstWeekDay, day),
      [styles.dayLabelSelected]: isEqual(selected, day),
    }),
    [firstWeekDay, selected, styles.dayLabelSelected, styles.weekDayDisabled]
  )

  const onClickBack = useCallback(() => {
    context.setModalType(MODAL_TYPES.SESSION_TYPE)
  }, [context])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column">
        <DialogActions className={styles.topActions}>
          <Link className={styles.actionButton} href="#" onClick={onClickBack} color="primary">
            <ArrowBackIos className={styles.icon} />
            {t('privates:timeSlot.backAction')}
          </Link>
          <Link className={styles.actionButton} href="#" onClick={onClose} color="primary">
            {t('common:cancel')}
          </Link>
        </DialogActions>
        <Divider variant="fullWidth" />
        <Grid className={styles.dialogTitle}>
          <Typography className={styles.subtitle}>3 {t('common:stepOf')} 4</Typography>
          <Typography className={styles.title}>{t('privates:timeSlot.titleSelect')}</Typography>
        </Grid>
        <DialogContent className={styles.dialogContent}>
          <Grid className={styles.weekDaysHeader}>
            <IconButton onClick={changeWeek(-1)}>
              <ChevronLeft className={styles.arrowIcon} />
            </IconButton>
            <Typography className={styles.weekDaysTitle}>
              {format(firstWeekDay, 'MMM dd')} -{' '}
              {format(add(firstWeekDay, { days: 6 }), 'dd, yyyy')}
            </Typography>
            <IconButton onClick={changeWeek(1)}>
              <ChevronRight className={styles.arrowIcon} />
            </IconButton>
          </Grid>
          <Grid container direction="row" justify="center" className={styles.weekList}>
            {week.map(day => (
              <MaterialButton
                disableRipple
                className={styles.weekDay}
                onClick={handleSelect(day)}
                disabled={isEqual(firstWeekDay, day)}
              >
                <Grid container direction="column">
                  <Typography className={classnames(styles.dayLabel, dayLabelStyle(day))}>
                    {format(day, 'EEE')}
                  </Typography>
                  <Grid
                    className={classnames(styles.dayNumber, dayNumberStyle(day))}
                    color="primary"
                    size="small"
                  >
                    {format(day, 'dd')}
                  </Grid>
                </Grid>
              </MaterialButton>
            ))}
          </Grid>
          <Grid className={styles.slotsList}>
            <Grid container direction="column" alignItems="center">
              <Typography className={styles.slotListTitle}>Morning</Typography>
              {slots
                .filter(item => item.sessionTime.includes('am'))
                .map(slot => (
                  <Selectable
                    disabled={
                      !availableSlots.map(item => item.sessionTime).includes(slot.sessionTime)
                    }
                    handleSelect={setSelectedSlot}
                    selected={selectedSlot === slot.sessionTime}
                    value={slot.sessionTime}
                  >
                    {slot.sessionTime}
                  </Selectable>
                ))}
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Typography className={styles.slotListTitle}>Afternoon</Typography>
              {slots
                .filter(item => item.sessionTime.includes('pm'))
                .map(slot => (
                  <Selectable
                    disabled={
                      !availableSlots.map(item => item.sessionTime).includes(slot.sessionTime)
                    }
                    handleSelect={setSelectedSlot}
                    selected={selectedSlot === slot.sessionTime}
                    value={slot.sessionTime}
                  >
                    {slot.sessionTime}
                  </Selectable>
                ))}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button variant="contained" type="submit" disabled={!selected}>
            {t('common:continue')}
          </Button>
        </DialogActions>
      </Grid>
    </Dialog>
  )
}

TimeSlotModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

TimeSlotModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(TimeSlotModal)
