/* eslint-disable */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { CardActionArea } from '@material-ui/core'

import {
  Avatar,
  Grid,
  Button,
  Typography,
  Paper,
  Hidden,
  ListItemSecondaryAction,
} from '@material-ui/core'
import moment from 'moment'
import { getSessionStatus, getCtaLabel, getDateFormat, getTimeFormat } from '../../../selectors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item2: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'flex-end',
    padding: theme.spacing(1),
  },
  paper: {
    // height: 140,
    width: '100%',
    // display: "flexGrow",
    height: '100%',
  },
  pointer: {
    cursor: 'pointer',
  },
}))

export const ClassList = props => {
  const classes = useStyles()

  return (
    <Fragment>
      {(props.categorieseList || []).map((item, index) => (
        <Fragment key={index}>
          <Grid container className={classes.root + ' classList2'} direction="row">
            <Grid item className={classes.item2 + ' listHead'} xs={12}>
              <Typography variant="h4">{getDateFormat(Object.keys(item)[0])}</Typography>
            </Grid>
          </Grid>

          {(Object.values(item)[0] || []).map((j, k) => (
            <Grid
              container
              className={classes.root + ' classList2'}
              direction="row"
              alignItems="center"
              mb={4}
              key={j.sessionName + k}
              // onClick={props.handleOpenModal}
              // modal-name={'classdetail'}
              // modal-title={'Class Detail'}
              // session-id={j.sessionID}
              // session-date={j.sessionDate}
            >
              <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h4">{getTimeFormat(j.startTime)}</Typography>
                  <Typography variant="body2">{j.duration}</Typography>
                </Paper>
              </Grid>

              <Grid
                item
                className={classes.item2 + ' ' + classes.pointer}
                xs={9}
                sm={4}
                md={3}
                lg={3}
                onClick={props.handleOpenModal}
                modal-name={'classdetail'}
                modal-title={'Class Detail'}
                session-id={j.sessionID}
                session-date={j.sessionDate}
              >
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h3">{j.sessionName}</Typography>
                  <Typography variant="body2">{`Room ${j.roomID}`}</Typography>
                </Paper>
              </Grid>

              <Grid
                item
                className={classes.item2 + ' ' + classes.pointer}
                xs={9}
                sm={2}
                md={3}
                lg={3}
                onClick={props.handleOpenModal}
                modal-name={'trainerdetail'}
                modal-title={'Instructor'}
                trainer-id={j.instructorData[0].instructorID}
              >
                <Hidden only={['xs', 'sm']}>
                  <Avatar
                    className="avatar"
                    spacing={0}
                    alt={j.instructor}
                    id={j.instructorData[0].instructorID}
                    src={j.instructorData[0].instructorProfile}
                  />
                </Hidden>
                <Typography variant="body2">{j.instructor}</Typography>
              </Grid>

              <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h4">
                    {getSessionStatus(j.sessionStatus, j.capacity, j.reserved, j.remaining)}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item className={classes.item2 + ' text-right'} xs={5} sm={2} md={2} lg={2}>
                {j.sessionStatus === 'open' && j.remaining > 0 && (
                  <Fragment>
                    <Button
                      variant="outlined"
                      color="secondary"
                      maxwidth="sm"
                      onClick={props.handleOpenModal}
                      modal-name={'classdetail'}
                      modal-title={'Class Detail'}
                      session-id={j.sessionID}
                      session-date={j.sessionDate}
                    >
                      {getCtaLabel(j.capacity, j.remaining)}
                    </Button>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          ))}
        </Fragment>
      ))}
    </Fragment>
  )
}
