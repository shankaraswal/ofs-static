import React, { useEffect, useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Paper,
  Grid,
  Link,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Hidden,
} from '@material-ui/core'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined'
import TuneRoundedIcon from '@material-ui/icons/TuneRounded'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { getWeeklyDateFormat } from '../../../selectors'
import moment from 'moment'
import { dateFormat } from '../../../constants/util'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.primary,
    borderRadius: 0,
    flexGrow: 1,
  },
}))

export default function ClassListHeader(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  //-----------------------------------------------------------------------------
  const weekDays = props.weekDays
  const [currWeek, setCurrWeek] = useState({})

  useEffect(() => {
    const cdate = props.weeklyDate.startDate.format(dateFormat)
    const currWeek = {
      fromDate: cdate,
      toDate: moment(cdate).add(weekDays, 'days').format(dateFormat),
    }

    setCurrWeek(currWeek)
    return () => {}
  }, [])

  const handlePagination = e => {
    // console.log('curr week === > ', currWeek)
    const type = e.currentTarget.getAttribute('data-type')
    if (type === 'next') {
      const nextweek = {
        fromDate: moment(currWeek.fromDate).add(weekDays, 'days').format(dateFormat),
        toDate: moment(currWeek.toDate).add(weekDays, 'days').format(dateFormat),
      }
      // console.log('next week === > ', nextweek)

      setCurrWeek(nextweek)
    } else if (type === 'previous') {
      const prevweek = {
        fromDate: moment(currWeek.fromDate).subtract(weekDays, 'days').format(dateFormat),
        toDate: moment(currWeek.toDate).subtract(weekDays, 'days').format(dateFormat),
      }
      // console.log('prev week === > ', prevweek)

      setCurrWeek(prevweek)
    }

    console.log('----------------------------------------------------------------------')
    props.nextPrevRecords(currWeek.fromDate)
  }

  return (
    <Fragment>
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={2}>
            <Grid container spacing={0}>
              <Grid item xs={10} sm={8} md={10} xl={11}>
                <Typography className={classes.root}>
                  <Hidden only="xs">
                    <Link href="#" data-type={'previous'} onClick={handlePagination}>
                      <IconButton aria-label="previous">
                        <ChevronLeftRoundedIcon />
                      </IconButton>
                    </Link>
                  </Hidden>
                  <Typography variant="inherit" color="inherit">
                    {getWeeklyDateFormat(props.weeklyDate)}
                  </Typography>
                  <Hidden only="xs">
                    <Link href="#" data-type={'next'} onClick={handlePagination}>
                      <IconButton aria-label="next">
                        <ChevronRightRoundedIcon />
                      </IconButton>
                    </Link>
                  </Hidden>
                  <Link href="#" data-type={'next'} onClick={handlePagination}>
                    <IconButton aria-label="next">
                      <DateRangeOutlinedIcon />
                    </IconButton>
                  </Link>

                  {/* <Divider orientation="vertical" /> */}

                  <Link
                    href="#"
                    onClick={props.handleOpenModal}
                    modal-name="filter"
                    modal-title="Filter"
                  >
                    <IconButton>
                      <TuneRoundedIcon />
                    </IconButton>
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={2} xl={1} className="class-listheader">
                <Button
                  variant="text"
                  startIcon={<AccountCircleOutlinedIcon />}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Hidden only="xs">Login or Register</Hidden>
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    My Packages
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    Log out
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  )
}
