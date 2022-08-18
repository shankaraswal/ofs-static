import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { Grid, Box, Link, Badge, Paper, Button } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import { StarBorder } from '@material-ui/icons'

import { getSessionStatus, getCtaLabel, getDateFormat, getTimeFormat } from '../../../selectors'

const preventDefault = event => event.preventDefault()

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(0),
  },
  listItem: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  ListItemAvatar: {
    width: '32px',
    height: '32px',
  },
  roomId: {
    wordBreak: 'break-all',
  },
}))
export const TrainerDetail = props => {
  const classes = useStyles()
  const trainerDetail = useSelector(state => state.classes.instructorProfile.data)

  const doCategoriesUpcomingSessions = () => {
    const sdate = (trainerDetail.upcomingSession || [])
      .filter((item, index) => {
        return item.sessionDate
      })
      .reduce((acc, curr) => {
        if (!acc[curr.sessionDate]) acc[curr.sessionDate] = []
        acc[curr.sessionDate].push(curr)
        return acc
      }, [])
    return Object.keys(sdate).map((key, index) => {
      return { [key]: sdate[key] }
    })
  }

  const recordsBydate = doCategoriesUpcomingSessions()

  return (
    <>
      <Grid
        item
        className="listItem"
        xs={12}
        sm={4}
        md={3}
        lg={4}
        ins-id={trainerDetail.instructorID}
      >
        <Badge
          badgeContent={<StarBorder />}
          color={trainerDetail.favourite ? 'secondary' : 'primary'}
        >
          <img
            width="104"
            height="104"
            spacing={0}
            alt={trainerDetail.name}
            src={trainerDetail.profileImage}
          />
        </Badge>
        <Box mt={2}>
          <Typography variant="h3">{trainerDetail.name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={8}>
        {trainerDetail.about && (
          <>
            <Box mb={1}>
              <Typography variant="h4">About</Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body1">{trainerDetail.about}</Typography>
            </Box>
          </>
        )}
        {trainerDetail.instagram && (
          <Box mb={4} direction="row">
            <Typography variant="body2">
              <InstagramIcon /> {` Follow ${trainerDetail.name} on Instagram `}
              <Button color="secondary" onClick={preventDefault} className="pointer">
                {trainerDetail.instagram}
              </Button>
            </Typography>
          </Box>
        )}
        {trainerDetail.hobbies && (
          <>
            <Box mb={1}>
              <Typography variant="h4">Hobbies</Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body1">{trainerDetail.hobbies}</Typography>
            </Box>
          </>
        )}
      </Grid>
      <Grid className={`${classes.root} classList2`} direction="row">
        {(recordsBydate || []).map((item, index) => (
          <Fragment key={`session-${index}`}>
            <Grid item className={`${classes.listItem} listHead`} xs={12}>
              <Typography variant="h4">{getDateFormat(Object.keys(item)[0])}</Typography>
            </Grid>
            {(Object.values(item)[0] || []).map((j, k) => (
              <Grid
                container
                className={`${classes.root} listRow`}
                direction="row"
                justify="flex-start"
                // alignItems="center"
                key={j.sessionID}
              >
                <Grid item className={classes.listItem} xs={12} sm={2} md={2} lg={2}>
                  <Paper elevation="0" className={classes.paper}>
                    <Typography variant="body1">{getTimeFormat(j.startTime)}</Typography>
                    <Typography variant="body2">{j.duration}</Typography>
                  </Paper>
                </Grid>

                <Grid
                  item
                  className={`${classes.listItem} pointer`}
                  xs={12}
                  sm={5}
                  md={5}
                  lg={5}
                  onClick={props.handleOpenModal}
                  modal-name="trainerDetail"
                  modal-title="Class Detail"
                  sessionId={j.sessionID}
                  sessionDate={j.sessionDate}
                >
                  <Paper elevation="0" className={classes.paper}>
                    <Typography variant="h4">{j.sessionName}</Typography>
                    <Typography variant="body2" className={`${classes.listItem} roomId`}>
                      {j.roomID}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item className={classes.listItem} xs={12} sm={3} md={3} lg={3}>
                  <Paper elevation="0" className={classes.paper}>
                    <Typography variant="h4">
                      {getSessionStatus(j.sessionStatus, j.capacity, j.reserved, j.remaining)}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid
                  item
                  className={`${classes.listItem} text-right`}
                  xs={12}
                  sm={2}
                  md={2}
                  lg={2}
                >
                  {j.sessionStatus === 'open' && j.remaining > 0 && (
                    <>
                      <Button
                        variant="outlined"
                        color="secondary"
                        maxWidth="sm"
                        onClick={props.handleOpenModal}
                        modal-name="trainerDetail"
                        modal-title="Class Detail"
                        sessionId={j.sessionID}
                        sessionDate={j.sessionDate}
                      >
                        {getCtaLabel(j.capacity, j.remaining)}
                      </Button>
                    </>
                  )}
                </Grid>
              </Grid>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
  )
}
