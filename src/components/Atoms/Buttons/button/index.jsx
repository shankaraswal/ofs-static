import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Button as MaterialButton, CircularProgress, Grid } from '@material-ui/core'

import useStyles from './styles'

export const BUTTON_THEME = {
  DEFAULT: '',
  OUTLINED: 'outlined',
  PRIMARY: 'primary',
  TEXT: 'text',
}

const Button = ({ children, theme, className, isLoading, ...props }) => {
  const styles = useStyles()

  return (
    <MaterialButton
      className={classnames(styles.button, className, styles[theme])}
      disableRipple={theme === BUTTON_THEME.TEXT}
      {...props}
      disabled={props.disabled || isLoading}
    >
      {isLoading && <CircularProgress className={styles.loading} size={16} color="secondary" />}
      {isLoading ? <Grid className={styles.hidden}>{children}</Grid> : children}
    </MaterialButton>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  children: '',
  className: '',
  disabled: false,
  theme: BUTTON_THEME.DEFAULT,
  isLoading: false,
}

export default React.memo(Button)
