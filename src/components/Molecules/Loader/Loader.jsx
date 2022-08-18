import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Button, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  backdrop: {
    opacity: '0.3',
    background: '#f2f2f2',
  },
}))

export const Loader = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </div>
  )
}

export function InlineLoader() {
  return <LinearProgress color="secondary" />
}

export function InlineCircular() {
  return <CircularProgress disableShrink color="secondary" />
}
