/* eslint-disable */
import React, { Fragment } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {
  Avatar,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  TextField,
  InputAdornment,
  FormControlLabel,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import moment from 'moment'
import { getTimeFormat } from '../../../selectors'

// need to move to i18
const translations = {
  componentloader: '...loading',
  nocomponentloaded: 'No component loaded !!',
  search: 'Search',
  classtime: 'Class time',
  clear: 'Clear',
  applyfilter: 'Apply Filter',
  filter: 'Filter',
}

const useStyles = makeStyles(theme => ({
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
  ListItemAvatar: {
    width: '32px',
    height: '32px',
  },

  slotBar: {
    padding: '0 12px',
  },

  filterCheck: {
    padding: '14px 24px',
  },

  filterCheckLabel: {
    position: 'absolute',
    top: 0,
    left: '10px',
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    opacity: '0.001',
  },
}))

export default function ClassFilters(props) {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid container spacing={3} id="classFilterBody">
        <Grid item xs={12}>
          <Typography>{'Search Time'}</Typography>
        </Grid>
        <Grid container spacing={1} className={classes.slotBar}>
          {props.slotList.map((slot, index) => (
            <Grid container item xs={4} key={index}>
              <Button
                variant={slot.isChecked ? 'contained' : 'outlined'}
                color="secondary"
                xs={12}
                fullWidth
                onChange={props.handleSlotFilters}
                className={classes.filterCheck}
              >
                <Grid item xs={12}>
                  <FormControlLabel
                    value={JSON.stringify(slot)}
                    control={<Checkbox color="primary" />}
                    checked={slot.isChecked}
                    className={classes.filterCheckLabel}
                  />
                  <Typography variant="body1">{slot.label}</Typography>
                  <Typography variant="caption" display="block">
                    {getTimeFormat(slot.starttime)}
                    {' To '}
                    {getTimeFormat(slot.endtime)}
                  </Typography>
                </Grid>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography>{translations.search}</Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="search-client"
              fullWidth
              placeholder="TextField"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              vlue={props.inpTrainerSearch}
              onChange={props.handleSearchTrainer}
            ></TextField>
          </form>
        </Grid>

        <List>
          {props.filteredTrainerList.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onChange={props.handleChangeTrainers}
                  checked={item.isChecked}
                  color="secondary"
                  value={item.instructorName}
                  id={item.instructorID}
                  pin={item.instructorPin}
                />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  className={classes.ListItemAvatar}
                  alt={item.instructorName}
                  src={item.instructorProfile}
                />
              </ListItemAvatar>
              <ListItemText primary={item.instructorName} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Fragment>
  )
}
