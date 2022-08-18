/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import DialogActions from '@material-ui/core/DialogActions'
import { Loader, InlineLoader } from '../Loader/Loader'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import Typography from '@material-ui/core/Typography'
import { Dialog, Button, Grid, Box, Link, Divider, Badge } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import theme from '../../../theming/theme/foundation/theme'
import themeColors from '../../../theming/theme/foundation/color'
import { StarBorder } from '@material-ui/icons'

import { openModalName } from '../../../constants/util'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    // color: theme.palette.grey[500],
  },
})

const useStyles = makeStyles(theme => ({
  ListItemAvatar: {
    width: '32px',
    height: '32px',
  },
  modalHeaderImg: {
    width: '100%',
    borderRadius: '8px 8px 0 0',
  },
}))

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

export const Modal = props => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(true)
  // const [classDetail, setClassDetail] = useState({})

  const { modalData, dialogAction, noheader, nofooter } = props.modalData

  const classDetail =
    modalData.modalName === openModalName.classdetail
      ? useSelector(state => {
          return state.classes.sessionDetail
        })
      : undefined
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
    // setClassDetail(newClassDetail)
  }, [])

  return (
    <Dialog
      onClose={props.handleCloseModal}
      aria-labelledby="session-trainer-list"
      open={openModal}
    >
      {loading ? (
        <InlineLoader />
      ) : (
        <Fragment>
          {!noheader && (
            <DialogTitle id="session-trainer-list" onClose={props.handleCloseModal}>
              <Button
                aria-label="instructors"
                color="secondary"
                startIcon={<ChevronLeftRoundedIcon />}
              >
                {modalData.modalTitle}
              </Button>
            </DialogTitle>
          )}
          {}
          {modalData.modalName === openModalName.classdetail && (
            <Fragment>
              {classDetail.data && (
                <Grid>
                  <img
                    src={classDetail.data.sessionImage}
                    alt={classDetail.data.sessionName}
                    className={classes.modalHeaderImg}
                  />
                </Grid>
              )}
            </Fragment>
          )}

          <DialogContent dividers>
            <Grid container className={classes.root} direction="row" justify="flex-end">
              {props.children}
            </Grid>
          </DialogContent>
          {!nofooter && (
            <DialogActions>
              <Grid container item xs={12} spacing={3}>
                {(dialogAction || []).map((btn, ind) => (
                  <Grid item xs={6}>
                    <Button
                      variant={btn.variant}
                      onClick={btn.action}
                      color={btn.color}
                      disabled={btn.shouldDisabled ? !btn.isApplyEnabled() : false}
                      fullWidth
                    >
                      {btn.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </DialogActions>
          )}
        </Fragment>
      )}
    </Dialog>
  )
}
