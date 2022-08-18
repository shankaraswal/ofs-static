/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import { Avatar, Box, Grid, Link } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import themeColors from '../../../theming/theme/foundation/color'
// import BannerImg from '../../source/images/rectangle.jpg'
import { classActions } from '../../../store/actions'
import { getSessionStatus, getTimeFormat, getDateFormat } from '../../../selectors'
import { data } from 'autoprefixer'

const preventDefault = event => event.preventDefault()
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: themeColors.white.main,
  },
  modalHeaderImg: {
    padding: theme.spacing(0),
  },

  headerImg: {
    textAlign: 'center',
  },
  img: {
    width: '-webkit-fill-available',
  },
}))
export const ClassDetail = props => {
  const classes = useStyles()

  const classDetail = useSelector(state => state.classes.sessionDetail.data)
  console.log(props)

  return (
    <Fragment>
      <Grid container>
        <Box mb={2}>
          <Typography gutterBottom variant="h1">
            {classDetail.sessionName}
          </Typography>
          <Typography color="secondary">
            {getSessionStatus(classDetail.capacity, classDetail.remaining)}
          </Typography>
        </Box>
      </Grid>
      <Grid container>
        <Box mb={2}>
          <Typography gutterBottom variant="h4">
            {getDateFormat(classDetail.sessionDate)}
          </Typography>
          <Typography>
            {getTimeFormat(classDetail.startTime)}
            {' - '}
            {getTimeFormat(classDetail.endTime)}
          </Typography>
        </Box>
      </Grid>
      <Grid container>
        <Box mb={2}>
          <AvatarGroup max={3}>
            {(classDetail.instructor || []).map((a, ind) => (
              <Avatar alt={a.instructorName} src={a.instructorProfile} key={ind} />
            ))}
          </AvatarGroup>
          <Typography gutterBottom>
            {(classDetail.instructor || []).map((b, ind) => (
              <Fragment key={ind}>
                <strong>{ind < 2 && <Fragment>{b.instructorName}</Fragment>}</strong>
                {ind < classDetail.instructor.length - 1 && <Fragment>{', '}</Fragment>}
              </Fragment>
            ))}
            {classDetail.instructor.length > 2 && (
              <Fragment>
                {' and '} <strong>{`${classDetail.instructor.length - 2} more`}</strong>'
              </Fragment>
            )}
          </Typography>
          <Typography>
            <Link
              variant="body2"
              href="#"
              modal-name={'trainerdetail'}
              modal-title={'Trainer Detail'}
              trainer-id={classDetail.instructor.instructorID}
              onClick={props.handleOpenTrainerModal}
            >
              View info
            </Link>
          </Typography>
        </Box>
      </Grid>
      {classDetail.sessionDescription && (
        <Grid container>
          <Box mb={2}>
            <Typography gutterBottom variant="h4">
              Description
            </Typography>
            <Typography>
              {classDetail.sessionDescription}{' '}
              <Link href="#" color="secondary" onClick={preventDefault}>
                Read more
              </Link>
            </Typography>
          </Box>
        </Grid>
      )}
      {classDetail.sessionType && (
        <Grid container>
          <Box mb={2}>
            <Typography gutterBottom variant="h4">
              Class level
            </Typography>
            <Typography>{classDetail.sessionType}</Typography>
          </Box>
        </Grid>
      )}
      {classDetail.itemsBring && (
        <Grid container>
          <Box mb={2}>
            <Typography gutterBottom variant="h4">
              To bring
            </Typography>
            <Typography>{classDetail.itemsBring}</Typography>
          </Box>
        </Grid>
      )}
      {classDetail.itemSupplied && (
        <Grid container>
          <Box mb={2}>
            <Typography gutterBottom variant="h4">
              Items supplied
            </Typography>
            <Typography> {classDetail.itemSupplied}</Typography>
          </Box>
        </Grid>
      )}

      {classDetail.customDescription ||
        (classDetail.customDescription != '' && (
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">
                Custom header
              </Typography>
              <Typography>
                {classDetail.customDescription}
                <Link href="#" color="secondary" onClick={preventDefault}>
                  {'Read more'}
                </Link>
              </Typography>
            </Box>
          </Grid>
        ))}
    </Fragment>
  )
}
