import React, { useMemo } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Grid, IconButton, SvgIcon, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'

import AlertIcon from '_assets/svgs/ic-alert.svg'
import InfoIcon from '_assets/svgs/ic-info.svg'
import CheckIcon from '_assets/svgs/ic-check.svg'
import useWindowSize from '_hooks/use-window-size'

import useStyles from './styles'

const THEME = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
}

const ToastAlert = ({ theme, message, closeToast }) => {
  const { isDesktop } = useWindowSize()
  const styles = useStyles({ isFloat: isDesktop })

  const renderIcon = useMemo(() => {
    switch (theme) {
      case THEME.SUCCESS:
        return (
          <SvgIcon viewBox={CheckIcon.viewBox} className={styles.icon}>
            <use xlinkHref={`#${CheckIcon.id}`} />
          </SvgIcon>
        )
      case THEME.INFO:
        return (
          <SvgIcon viewBox={InfoIcon.viewBox} className={styles.icon}>
            <use xlinkHref={`#${InfoIcon.id}`} />
          </SvgIcon>
        )
      case THEME.ERROR:
        return (
          <SvgIcon viewBox={AlertIcon.viewBox} className={styles.icon}>
            <use xlinkHref={`#${AlertIcon.id}`} />
          </SvgIcon>
        )
      default:
        return null
    }
  }, [styles.icon, theme])

  return (
    <Grid
      className={classnames(styles.container, styles[theme], {
        [styles.containerFloat]: isDesktop,
      })}
    >
      <Typography className={styles.message}>
        {renderIcon}
        {message}
      </Typography>
      {isDesktop && (
        <IconButton className={styles.button} onClick={closeToast}>
          <Close color="secondary" />
        </IconButton>
      )}
    </Grid>
  )
}

ToastAlert.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  message: PropTypes.string.isRequired,
  closeToast: PropTypes.func.isRequired,
}

ToastAlert.defaultProps = {
  theme: THEME.INFO,
}

export default React.memo(ToastAlert)
