import React, { useCallback, useState } from 'react'
import { Button, SvgIcon, Typography } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

import CalendarIcon from '_assets/svgs/ic-calendar.svg'

import Calendar from './Calendar'
import useStyles from './styles'

const CalendarContainer = () => {
  const styles = useStyles()
  const { t } = useTranslation(['filters'])
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState([null, null])

  const openPicker = useCallback(
    openValue => () => {
      setOpen(openValue)
    },
    []
  )

  return (
    <>
      <Button onClick={openPicker(true)} className={styles.button}>
        <SvgIcon viewBox={CalendarIcon.viewBox}>
          <use xlinkHref={`#${CalendarIcon.id}`} />
        </SvgIcon>
        <Typography>{t('filters:byDate')}</Typography>
        <KeyboardArrowUp />
      </Button>
      <Calendar open={open} date={date} setDate={setDate} openPicker={openPicker} />
    </>
  )
}

CalendarContainer.propTypes = {}

CalendarContainer.defaultProps = {}

export default React.memo(CalendarContainer)
