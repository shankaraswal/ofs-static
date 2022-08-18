import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  DateRangeDelimiter,
  LocalizationProvider,
  StaticDateRangePicker,
} from '@material-ui/pickers'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { Dialog, DialogActions, Divider, Grid, TextField, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import Button, { BUTTON_THEME } from '_components/Atoms/Buttons/button'
import useWindowSize from '_hooks/use-window-size'
import { DATE_FORMAT } from '_utils/string'

import useStyles from './styles'

const Calendar = ({ open, openPicker, date, setDate }) => {
  const styles = useStyles()
  const { t } = useTranslation(['filters'])
  const { isDesktop } = useWindowSize()
  const [value, setValue] = useState([null, null])

  const handleApply = useCallback(() => {
    setDate(value)
    openPicker(false)()
  }, [openPicker, setDate, value])

  const handleCancel = useCallback(() => {
    setValue(date)
    openPicker(false)()
  }, [date, openPicker])

  const renderInput = useCallback(
    (startProps, endProps) => (
      <Grid className={styles.input}>
        <TextField {...startProps} />
        <DateRangeDelimiter />
        <TextField {...endProps} />
      </Grid>
    ),
    [styles.input]
  )

  return (
    <Dialog
      onClose={handleCancel}
      open={open}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      {!isDesktop ? (
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
          <StaticDateRangePicker
            displayStaticWrapperAs="mobile"
            showToolbar
            open
            className={classnames(styles.picker, styles.mobile)}
            toolbarTitle={
              <Grid className={styles.toolbarTitle}>
                <Grid container justify="space-between" alignItems="center">
                  <Typography className={styles.toolbarContent}>
                    {t('filters:calendarTitle')}
                  </Typography>
                  <Button
                    className={styles.toolbarContent}
                    theme={BUTTON_THEME.TEXT}
                    onClick={handleCancel}
                  >
                    {t('common:cancel')}
                  </Button>
                </Grid>
                <Divider className={styles.toolbarDivision} />
              </Grid>
            }
            inputFormat={DATE_FORMAT}
            onClose={openPicker(false)}
            startText={t('filters:calendarStartLabel')}
            endText={t('filters:calendarEndLabel')}
            disablePast
            value={value}
            onChange={setValue}
            onAccept={handleApply}
            renderInput={renderInput}
            cancelText={null}
          />
        </LocalizationProvider>
      ) : (
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            open
            disableCloseOnSelect
            className={styles.picker}
            inputFormat={DATE_FORMAT}
            startText={t('filters:calendarStartLabel')}
            endText={t('filters:calendarEndLabel')}
            disablePast
            value={value}
            onChange={setValue}
            renderInput={renderInput}
          />
        </LocalizationProvider>
      )}
      <DialogActions className={styles.dialogActions}>
        {isDesktop && (
          <Button theme={BUTTON_THEME.TEXT} onClick={handleCancel}>
            {t('common:cancel')}
          </Button>
        )}
        <Button fullWidth={!isDesktop} theme={BUTTON_THEME.PRIMARY} onClick={handleApply}>
          {t('filters:calendarApply')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Calendar.propTypes = {
  open: PropTypes.bool.isRequired,
  openPicker: PropTypes.func.isRequired,
  date: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  setDate: PropTypes.func.isRequired,
}

Calendar.defaultProps = {
  date: null,
}

export default React.memo(Calendar)
