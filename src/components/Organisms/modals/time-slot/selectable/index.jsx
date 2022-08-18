import React, { useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import useStyles from './styles'

const Selectable = ({ value, selected, handleSelect, children, ...props }) => {
  const styles = useStyles()

  const handleClick = useCallback(() => {
    handleSelect(value)
  }, [handleSelect, value])

  return (
    <Button
      className={classnames(styles.button, { [styles.selected]: selected })}
      variant="contained"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  )
}

Selectable.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func,
  value: PropTypes.string,
}

Selectable.defaultProps = {
  children: null,
  selected: false,
  handleSelect: () => {},
  value: '',
}

export default React.memo(Selectable)
