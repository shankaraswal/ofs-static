import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Dialog as MaterialDialog } from '@material-ui/core'

const Dialog = ({ children, className, ...props }) => (
  <MaterialDialog className={classnames('onefitstop-base', className)} {...props}>
    {children}
  </MaterialDialog>
)

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
Dialog.defaultProps = {
  className: '',
}
export default React.memo(Dialog)
