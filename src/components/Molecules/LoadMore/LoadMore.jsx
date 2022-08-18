/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
  },
  fHeight: {
    height: '1000px',
  },
}))

export const ScrollTop = props => {
  const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger()

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  function HideOnScroll(props) {
    const trigger = useScrollTrigger()
    return (
      <Slide in={!trigger}>
        <div>Hello</div>
      </Slide>
    )
  }
  // console.log(
  //   document.body.scrollTop,
  //   document.documentElement.scrollHeight,
  //   document.documentElement.scrollTop,
  //   document.documentElement.offsetHeight
  // )

  return (
    <Zoom in={trigger}>
      <div onClick={props.loadMore} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
