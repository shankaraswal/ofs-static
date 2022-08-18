import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} mT="2">
        <Grid item sm={12} md={2} lg={2}>
            <Paper className={classes.paper}>
                <Typography variant="body1">8:00am</Typography>
                <Typography variant="body2" >30mins</Typography>
            </Paper>
        </Grid>
        <Grid item sm={12} md={2} lg={3}>
            <Paper className={classes.paper}>
                <Typography variant="body1">8:00am</Typography>
            </Paper>
        </Grid>
        <Grid item  sm={12} md={2} lg={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={12} md={2} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={12} md={2} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} ><Divider light /></Grid>
      </Grid>
    </div>
  );
}